import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import { RiMenu2Fill, RiHome3Line, RiFileList3Line, RiSettings4Line, RiCloseLine } from "react-icons/ri"
import { CgCoffee } from "react-icons/cg"
import Header from "./components/shared/Header"
import Car from "./components/shared/Car"
import MenuCoffee from "./components/shared/MenuCoffee"
import Tabs from "./components/shared/Tabs"
import Content from "./components/shared/Content"


function App() {
  const [showMenu, setShowMenu] = useState(false)


  const toggleMenu = () => {

    setShowMenu(!showMenu);

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
        <button className="p-2">
          <RiFileList3Line />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu2Fill />}

        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-1 p-4 pb-20" >
        <div className="lg:col-span-6 ">
          <Header />
          <MenuCoffee />
        </div>
        <Car />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </main>
    </div>
  )
}

export default App
