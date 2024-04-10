import { useEffect, useState } from 'react';
import { LocationSelector } from '../selects/LoacationSelectorBlock';
import { FromToDataSelect } from '../selects/FromToDateSelect';
import { MultiToggle } from '../selects/MultiToggle';
import { polutionAPI } from '../../api/PolutionAPI';
import { dateConverter } from '../../utils/DateFormating';
import { useTranslation } from 'react-i18next';

export const CustomChartsSelect = ({ onUpdate, clear }) => {

  const [selectCount, setSelectCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(selectCount).fill(''));
  const [updatedItems, setUpdatedItems] = useState([]);
  const [dateTo, setDateTo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [selectedDateType, setSelectedDataType] = useState([]);
  const [isClear, setIsClear] = useState(false)
  const {t} =  useTranslation();
    

  const options = [
    { label: t('Aktualny'), value: 'current' },
    { label: t('Prognoza'), value: 'forecast' },
    { label: t('Historyczny'), value: 'historical' },
  ];

  useEffect(()=>{
    setIsClear(false)
  },[isClear])

  useEffect(() => {
    const fetchDataForItem = async (item, option) => {
        try {
            let data;
            if (option === 'current') {
                data = await polutionAPI.getCurrentAirPollution(item.latitude, item.longitude);
            } else if (option === 'historical' && dateTo && dateFrom) {
                const startUnix = dateConverter.convertDateToUnix(dateFrom);
                const endUnix = dateConverter.convertDateToUnix(dateTo);
                data = await polutionAPI.getHistoricalAirPollution(item.latitude, item.longitude, startUnix, endUnix);
            } else if (option === 'forecast') {
                data = await polutionAPI.getForecastAirPollution(item.latitude, item.longitude);
            }

            return { option: option, data: data };
        } catch (error) {
            console.error(`Error fetching ${option} air pollution data:`, error);
            return null;
        }
    };

    const fetchDataForEachItem = async () => {
        const updatedItemsWithData = [];

        for (const item of updatedItems) {
            const newDataOptions = [];

            for (const option of selectedDateType) {
                const dataOption = await fetchDataForItem(item, option.value);
                if (dataOption) {
                    newDataOptions.push(dataOption);
                }
            }

            updatedItemsWithData.push({ ...item, dataOptions: newDataOptions });
        }

        onUpdate(updatedItemsWithData);
    };

    fetchDataForEachItem();
}, [updatedItems, selectedDateType, dateFrom, dateTo]);
  

  const handleSelectDataType = (datatype) => {
    setSelectedDataType(datatype);
  };

  const handleAddSelect = (event) => {
    event.preventDefault();
    if (selectCount < 5) {
      setSelectCount(selectCount + 1);
      setSelectedItems([...selectedItems, '']);
    }
  };

  const handleRemoveSelect = (event) => {
    event.preventDefault();
    if (selectCount > 1) {
      setSelectCount(selectCount - 1);
      setSelectedItems(selectedItems.slice(0, selectCount - 1));
    }
  };

  const handleSelectChange = (index, value) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = [...prevSelectedItems];
      updatedItems[index] = value;
      setUpdatedItems(updatedItems);
      return updatedItems;
    });
  };

  return (
    <div className="h-fit w-fit mt-4 flex flex-row justify-between align-middle">
      <div className="flex flex-col justify-normal mt-7 w-[50%]">
        <div className="flex flex-col justify-center content-center mt-2">
          {Array.from({ length: selectCount }).map((_, index) => (
            <div className="w-8/11 h-fit p-2" key={index}>
              <LocationSelector getCityObject={(value) => handleSelectChange(index, value)} isclear={isClear} />
            </div>
          ))}
        </div>
        {selectedDateType.some((option) => option.value === 'historical') ? (
          <div className="flex flex-row text-md w-fit h-fit p-1 m-1 border-2 shadow-lg rounded-xl">
            <p>{t('Od')}</p>
            <FromToDataSelect format="yyy-MM-dd" value={dateFrom} onChange={(date) => setDateFrom(date)} />
            <p>{t('Do')}</p>
            <FromToDataSelect format="yyy-MM-dd" value={dateTo} onChange={(date) => setDateTo(date)} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col justify-around w-[38%] ml-8 h-fit text-cream-white text-md uppercase font-semibold">
        <div className="flex flex-row w-[100%] justify-between content-center mt-10">
          <button
            className="bg-lime-800 hover:bg-lime-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl"
            onClick={(event) => handleAddSelect(event)}
          >
            {t('Dodaj miasto')}
          </button>
          <button
            className="bg-red-800 hover:bg-red-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl"
            onClick={(event) => handleRemoveSelect(event)}
          >
            {t('Usuń miasto')}
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-800 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl"
            onClick={()=>{clear(), setIsClear(true); setSelectedDataType([]), setUpdatedItems([])}}
          >
           {t('Wyczyść')}
          </button>
        </div>
        <MultiToggle options={options} value={selectedDateType} toggle={handleSelectDataType} />
      </div>
    </div>
  );
};