
import { RiShoppingCartFill, RiCloseLine } from 'react-icons/ri'
function Car() {
  return (
    //Orders 
    <div className="lg:col-span-2  fixed lg:static right-0 top-0 text-white bg-[#1f1d2b] w-full h-full">
      <div className='relative text-gray-300 pt-16 p-10'>
      
        <RiCloseLine className="text-2xl absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full " />
        
        <h1 className='text-2xl my-4'> Pedidos</h1>   
        <div className=' text-m flex items-center  gap-4 flex-wrap'>
          <button className="bg-[#395168]  rounded-xl py-2 px-4"> Aquí
          </button>
          <button className="  rounded-xl py-2 px-4 border border-slate-500"> Delivery
          </button>
          <button className="  rounded-xl py-2 px-4 border border-slate-500" > Recoger
          </button>
        </div>
      </div>
    </div>
  )
}

export default Car