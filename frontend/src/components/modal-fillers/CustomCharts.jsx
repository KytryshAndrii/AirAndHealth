import { useState } from 'react';
import { CustomChartsSelect } from '../selects/CustomChartsSelect';
import { ChartsGenerator } from './ChartsGenerator';

export const CustomCharts = () => {

  const [itemsList, setItemsList] = useState(null)

  const handleCustomChartsSelect = (updatedItems) =>{
    setItemsList(updatedItems)
  }

  const handleClearOptions = () => {
    setItemsList(null)
  }

  return (
    <div>
      <CustomChartsSelect onUpdate={handleCustomChartsSelect} clear={handleClearOptions}/>
      {itemsList ?
        <GenarateItems items={itemsList}/>
      : 
      <div className='absolute top-[53%] left-[40%] text-3xl text-gray-400 font-semibold text-center '>No Information</div>
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

