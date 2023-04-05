
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri'

const Car = (props) => {
  
  const { showOrder,setShowOrder } = props;

  const toggleOrder = () => {

    setShowOrder(!showOrder);
    setShowMenu(false);

  }

  return (
    //Orders 
    <div className= {`lg:col-span-2 fixed  top-0 lg:static text-white bg-[#1f1d2b] w-full lg:w-96 lg:right-0 h-full
   ${showOrder ? 'left-0' : '-left-full'} transition-all duration-500 z-50'`}
    >
     

      <div className='relative h-full lg:pt-8 text-gray-300 pt-16 p-8 '>
        <RiCloseLine onClick={toggleOrder} className="lg:hidden text-2xl absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full "
        
        />
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
          <div className='grid grid-cols-6 mb-4 p-4'>
            <h5 className='col-span-4'>Productos</h5>
            <h5>Cant</h5>
            <h5>Precio</h5>
          </div>

          {/* products */}
          <div className=' h-[400px] md:h-[700px] lg:h-[500] overflow-scroll'>

            {/*product*/}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className='grid grid-cols-6 mb-4'>
                <div className='flex items-center gap-3 col-span-4'>
                  <img src="coffe_2.png" alt="" className='w-10 h-10 object-cover' />
                  <div>
                    <h5 className='text-sm'>Café Americano... </h5>
                    <p className='text-xs text-gray-500'>$65.00</p>
                  </div>
                </div>
                {/* note */}
                <div >
                  <span>2</span>
                </div>
                <div>
                  <span>$60.00</span>
                </div>
              </div>
            <div className='grid grid-cols-6 items-center  gap-2'>
              <form className='col-span-5'>
                <input type="text" placeholder='Agrega una nota...' className='bg-[#1f1d2b] text-sm text-gray-400 w-full py-1 px-4 rounded-lg outline-none' />
              </form>
              <div className=' text-center'>
                <button className=' border border-red-500 p-2 rounded-lg text-red-500'> <RiDeleteBin6Line />    </button>
              </div>
            </div>
            </div>
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className='grid grid-cols-6 mb-4'>
                <div className='flex items-center gap-3 col-span-4'>
                  <img src="coffe_2.png" alt="" className='w-10 h-10 object-cover' />
                  <div>
                    <h5 className='text-sm'>Café Americano... </h5>
                    <p className='text-xs text-gray-500'>$65.00</p>
                  </div>
                </div>
                {/* note */}
                <div >
                  <span>2</span>
                </div>
                <div>
                  <span>$60.00</span>
                </div>
              </div>
            <div className='grid grid-cols-6 items-center  gap-2'>
              <form className='col-span-5'>
                <input type="text" placeholder='Agrega una nota...' className='bg-[#1f1d2b] text-sm text-gray-400 w-full py-1 px-4 rounded-lg outline-none' />
              </form>
              <div className=' text-center'>
                <button className=' border border-red-500 p-2 rounded-lg text-red-500'> <RiDeleteBin6Line />    </button>
              </div>
            </div>
            </div>
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
              <div className='grid grid-cols-6 mb-4'>
                <div className='flex items-center gap-3 col-span-4'>
                  <img src="coffe_2.png" alt="" className='w-10 h-10 object-cover' />
                  <div>
                    <h5 className='text-sm'>Café Americano... </h5>
                    <p className='text-xs text-gray-500'>$65.00</p>
                  </div>
                </div>
                {/* note */}
                <div >
                  <span>2</span>
                </div>
                <div>
                  <span>$60.00</span>
                </div>
              </div>
            <div className='grid grid-cols-6 items-center  gap-2'>
              <form className='col-span-5'>
                <input type="text" placeholder='Agrega una nota...' className='bg-[#1f1d2b] text-sm text-gray-400 w-full py-1 px-4 rounded-lg outline-none' />
              </form>
              <div className=' text-center'>
                <button className=' border border-red-500 p-2 rounded-lg text-red-500'> <RiDeleteBin6Line />    </button>
              </div>
            </div>
            </div>
           

            {/* note */}
          </div>
          {/*pay*/}
          <div className='bg-[#262837] p-4 w-full rounded-t-2xl absolute bottom-0 left-0 '>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-gray-400'>Descuentos</span>
              <span>$0.00 MXN</span>

            </div>
            <div className='flex items-center justify-between mb-6'>
              <span className='text-gray-400'>Subtotal</span>
              <span>$65.00 MXN</span>
            </div>
            <div className='mb-2'>
              <button className='text-gray-100 bg-blue-500 w-full rounded-lg  py-2 px-4 '>
                Pagar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Car