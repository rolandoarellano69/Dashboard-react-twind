import { RiSearchLine } from 'react-icons/ri'
import Tabs from './Tabs'
import Content from './Content'

function Header() {
  return (

    <header className="p-4">
      {/*header*/}

      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>

        <div>
          <h1 className='text-2xl text-gray-300'>COFFI APP</h1>
          <p className='text-gray-500'>07 de Marzo 2023</p>
        </div>

        {/*Logo y fecha*/}

        <form>
          <div className="w-full relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input type="text" placeholder="Buscar... " className=' placeholder:italic placerholder:text-slate-400 bg-[#1f1d2b] rounded-lg w-full py-2 pl-10 pr-4  text-gray-300 outline-none' />
          </div>
        </form>
      </div>

      {/*Tabs*/}
      
      <Tabs />

      
      
    </header>


  )
}

export default Header