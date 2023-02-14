import { RiHome6Line } from 'react-icons/ri'

function Sidebar() {
  return (
    <div className='bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full  text-white'>

      <ul className='pl-4'>
        <li>
          <li className=' p-4 bg-[#262837] rounded-tl-xl rounded-bl-xl'>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>logo</h1>
          </li>
          <a href="#" className='p-4  bg-[#ec7c6a] rounded-xl flex justify-center '>
            <RiHome6Line className='text-2xl mx-auto  ' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar