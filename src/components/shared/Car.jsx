
import { RiCloseLine } from 'react-icons/ri'
function Car() {
  return (
    //Orders 
    <div className="lg:col-span-2  fixed lg:static right-0 top-0 text-white bg-[#1f1d2b] w-full h-full">
      <div className='relative text-gray-300 pt-16 p-10'>

        <RiCloseLine className="text-2xl absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full " />

        <h1 className='text-2xl my-4'> Pedidos</h1>
        <div className=' text-m flex items-center  gap-4 flex-wrap mb-8'>
          <button className="bg-[#395168]  rounded-xl py-2 px-4"> Aquí
          </button>
          <button className="  rounded-xl py-2 px-4 border border-slate-500"> Delivery
          </button>
          <button className="  rounded-xl py-2 px-4 border border-slate-500" > Recoger
          </button>
        </div>
        {/*car*/}
        <div>

        <div className='grid grid-cols-6 mb-4'>
          <h5 className='col-span-4'>Productos</h5>

          <h5>qly</h5>

          <h5>Precio</h5>
          
        </div>
          {/*product*/}
          <div className='bg-[#262837] p-4 rounded-xl'>
          <div className='grid grid-cols-6'>
            <div className='flex items-center gap-3 col-span-4'>
              <img src="coffe_2.png" alt="" className='w-12 h-12 object-cover' />
              <div>
              <h5>Café Americano... </h5>
              <p>$65.00</p>
              </div>
            </div>
            <div>
              
              <span>2</span>
            </div>
            <div>
              <span>$60.00</span>
            </div>
          </div>
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default Car