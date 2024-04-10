import { useState } from 'react';
import { CustomChartsSelect } from '../selects/CustomChartsSelect';
import { ChartsGenerator } from './ChartsGenerator';
import { useTranslation } from 'react-i18next';

export const CustomCharts = () => {

  const [itemsList, setItemsList] = useState([])
  const {t} =  useTranslation();

  const handleCustomChartsSelect = (updatedItems) =>{
    setItemsList(updatedItems)
  }

  const handleClearOptions = () => {
    setItemsList([])
  }

  return (
    <div>
      <CustomChartsSelect onUpdate={handleCustomChartsSelect} clear={handleClearOptions}/>
      {itemsList.length > 0 ?
        <GenarateItems items={itemsList}/>
      : 
      <div className='absolute top-[53%] left-[40%] text-3xl text-gray-400 font-semibold text-center '>{t('Brak Informacji')}</div>
      }
    </div>
  )
};

const GenarateItems = ({items}) => {
  return (
    <>
      {items.map((item)=>(<ChartsGenerator dataOptions={item.dataOptions} title={item.name}/>))
      }
    </>
  )
}

