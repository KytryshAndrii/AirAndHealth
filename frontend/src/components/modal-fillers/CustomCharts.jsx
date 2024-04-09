import { useEffect, useState } from 'react';
import {LocationSelector} from '../selects/LoacationSelectorBlock'
import { FromToDataSelect } from '../selects/FromToDateSelect';
import {MultiToggle} from '../selects/MultiToggle'
import { polutionAPI } from '../../api/PolutionAPI';
import { dateConverter} from '../../utils/DateFormating';

export const CustomCharts = () => {
  const [selectCount, setSelectCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(selectCount).fill(''));
  const [updatedItems, setUpdatedItems] = useState([])

  const [dateTo, setDateTo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [selectedDateType, setSelectedDataType] = useState([{label:"", value:""}]);
  
  const options = [
    { label: "Current", value: "current" },
    { label: "Forecast", value: "forecasr" },
    { label: "Historical", value: "historical"},
  ];

  useEffect(()=>{
    updatedItems.map((item)=>{
        console.log("polution data", polutionAPI.getCurrentAirPollution(item.latitude, item.longitude))
        console.log("historical data", polutionAPI.getHistoricalAirPollution(item.latitude, item.longitude, dateConverter.convertDateToUnix(dateFrom), dateConverter.convertDateToUnix(dateTo)))
    })
    console.log(dateFrom, dateTo)
  },[updatedItems])
   
  const handleSelectDataType = (datatype) => {
    setSelectedDataType(datatype)
  }

  const handleAddSelect = (event) => {
    event.preventDefault()
    if (selectCount < 5) {
      setSelectCount(selectCount + 1);
      setSelectedItems([...selectedItems, '']);
    }
  };

  const handleRemoveSelect = (event) => {
    event.preventDefault()
    if (selectCount > 1) {
      setSelectCount(selectCount - 1);
      setSelectedItems(selectedItems.slice(0, selectCount - 1));
    }
  };

  const handleSelectChange = (index, value) => {
    setSelectedItems(prevSelectedItems => {
         if (!prevSelectedItems) {
          prevSelectedItems = [];
        }
        const updatedItems = [...prevSelectedItems];
        updatedItems[index] = value;
        setUpdatedItems(updatedItems);
        
        return updatedItems;
      });
  };

  return (
    <div className='h-fit w-fit mt-4 flex flex-row justify-between align-middle'>
        <div className='flex flex-col justify-normal mt-7 w-[50%]'>
            <div className='flex flex-col justify-center content-center mt-2'>
                {Array.from({ length: selectCount }).map((_, index) => (
                    <div className='w-8/11 h-fit p-2'>
                        <LocationSelector key={index} getCityObject={(value)=>handleSelectChange(index, value)}/>
                    </div>
                ))}
            </div>
            {selectedDateType.some(option => option.value == 'historical')?
            <div className="flex flex-row text-md w-fit h-fit p-1 m-1 border-2 shadow-lg rounded-xl">
                <p>From</p>
                    <FromToDataSelect
                        format= {"yyy-MM-dd"}
                        value={dateFrom} 
                        onChange={date=> setDateFrom(date)}/> 
                <p>To</p> 
                    <FromToDataSelect
                        format= {"yyy-MM-dd"}
                        value={dateTo} 
                        onChange={date => setDateTo(date)}/>
            </div> : <></>}
        </div>
        <div className='flex flex-col justify-around w-[38%] ml-8 h-fit text-cream-white text-md uppercase font-semibold'>    
            <div className='flex flex-row w-[90%] justify-between content-center mt-10'>
                <button className='bg-lime-800 hover:bg-lime-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl' onClick={(event)=>handleAddSelect(event)}>Add Selector</button>
                <button className='bg-red-800 hover:bg-red-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl' onClick={(event)=>handleRemoveSelect(event)}>Remove Selector</button>
            </div>
            <MultiToggle options={options} value={selectedDateType} toggle={handleSelectDataType}/>
        </div>    
    </div>
  );
};
