import { RiHome6Line, RiPercentLine, RiMailLine, RiNotification4Line, RiSettings4Line } from 'react-icons/ri'
import { CgCoffee } from 'react-icons/cg'


function Sidebar() {
  return (
    <div className='bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full  text-white'>

      <ul className='pl-4'>
        <li >
          <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>logo</h1>
        </li>

        <li className=' p-4 bg-[#262837] rounded-tl-xl rounded-bl-xl'>
          <a href="#" className='p-4  bg-[#395168] rounded-xl flex justify-center '>
            <RiHome6Line className='text-2xl   ' />
          </a>
        </li>

        <li className=' hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href="#" className='group-hover:bg-[#395168]   p-4   rounded-xl flex justify-center text-white group-hover:text-white'>
            <RiPercentLine className='text-2xl ' />
          </a>
        </li>

        <li className=' hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href="#" className='group-hover:bg-[#395168]   p-4   rounded-xl flex justify-center text- group-hover:text-white'>
            <CgCoffee className='text-2xl ' />
          </a>
        </li>

        <li className=' hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href="#" className='group-hover:bg-[#395168]   p-4   rounded-xl flex justify-center text-white group-hover:text-white'>
            <RiMailLine className='text-2xl ' />
          </a>
        </li>

        <li className=' hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href="#" className='group-hover:bg-[#395168]   p-4   rounded-xl flex justify-center text-white group-hover:text-white'>
            <RiNotification4Line className='text-2xl ' />
          </a>
        </li>
        <li className=' hover:bg-[#262837] p-4  rounded-tl-xl rounded-bl-xl group transition-colors'>
          <a href="#" className='group-hover:bg-[#395168]   p-4   rounded-xl flex justify-center text-white group-hover:text-white'>
            <RiSettings4Line className='text-2xl ' />
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar