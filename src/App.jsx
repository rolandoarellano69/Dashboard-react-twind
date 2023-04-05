import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import { RiMenu2Fill, RiHome3Line, RiFileList3Line, RiSettings4Line, RiCloseLine } from "react-icons/ri"
import { CgCoffee } from "react-icons/cg"
import Header from "./components/shared/Header"
import Car from "./components/shared/Car"
import MenuCoffee from "./components/shared/MenuCoffee"
import Content from "./components/shared/Content"
import Pay from "./components/shared/Pay"


function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)


  const toggleMenu = () => {

    setShowMenu(!showMenu);
    setShowOrder(false);

  }
const toggleOrder = () => {

    setShowOrder(!showOrder);
    setShowMenu(false);

  }


  return (
    <div className="App bg-[#262837] w-full min-h-screen ">
      <Sidebar showMenu={showMenu} />
      {/*menu movil*/}
      <nav className=" bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-500 p-4  flex items-center justify-between rounded-tl-xl rounded-tr-xl ">
        <button className="p-2">
          <RiHome3Line />
        </button>
        <button className="p-2">
          <CgCoffee />
        </button>
        <button  onClick={toggleOrder} className="p-2">
          <RiFileList3Line />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}

        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20" >
        <div className="lg:col-span-6 md:p-8 p-4">
          <Header />
          <MenuCoffee />
        <Content />
        </div>
        <Car showOrder={showOrder}/>
        <Pay />
       
    
      </main>
    </div>
  )
}

export default App
