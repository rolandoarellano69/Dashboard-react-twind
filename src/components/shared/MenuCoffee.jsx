import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
function MenuCoffee() {
  return (
    <div className='px-4 text-gray-300 flex justify-between items-center'>
      <h2 className='text-2xl py-2 '>Selección</h2>
      <button className='bg-[#1F1D2B] flex rounded-md items-center text-sm gap-4 py-2 px-4'><RiArrowDropDownLine className='text-slate-300'/>Filtro</button>
    </div>
  )
}

export default MenuCoffee