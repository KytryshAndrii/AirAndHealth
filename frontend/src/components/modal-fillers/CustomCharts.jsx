import { useState } from 'react';
import {LocationSelector} from '../LoacationSelectorBlock'

export const CustomCharts = () => {
  const [selectCount, setSelectCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(selectCount).fill(''));

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
      const updatedItems = [...prevSelectedItems];
      updatedItems[index] = value;
      return updatedItems;
    });
  };

  return (
    <div className='h-fit w-fit mt-10 flex flex-row justify-around content-center align-middle'>
        <div className='flex flex-col justify-center content-center mt-2'>
            {Array.from({ length: selectCount }).map((_, index) => (
                <div className='w-8/11 h-fit p-2'>
                    <LocationSelector key={index} getCityObject={(value)=>handleSelectChange(index, value)}/>
                </div>
            ))}
        </div>
        <div className='flex flex-row justify-around w-64 mt-3 h-fit text-cream-white text-md uppercase font-semibold'>
            <button className='bg-lime-800 hover:bg-lime-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl' onClick={(event)=>handleAddSelect(event)}>Add Select</button>
            <button className='bg-red-800 hover:bg-red-900 w-fit p-2 border-2 border-stone-200 rounded-2xl shadow-xl' onClick={(event)=>handleRemoveSelect(event)}>Remove Select</button>
        </div>    
    </div>
  );
};
