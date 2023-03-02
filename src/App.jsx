import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import { RiMenu2Fill, RiHome3Line, RiFileList3Line, RiSettings4Line } from "react-icons/ri"
import { CgCoffee } from "react-icons/cg"
function App() {
const [showMenu, setShowMenu] = useState(false)
const [showOrder, setShowOrder] = useState(false)

  return (
    <div className="App bg-[#262837] w-full min-h-screen ">

      <Sidebar />
      {/*menu movil*/}
      <nav className=" bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500 p-6  flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button>
          <RiHome3Line className="text-white "/>
        </button>
        <button>
          <CgCoffee />
        </button>
        <button>
          <RiFileList3Line />
        </button>
        <button>
          <RiSettings4Line />
        </button>
      </nav>
    </div>
  )
}

export default App
