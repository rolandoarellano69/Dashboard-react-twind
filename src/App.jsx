import Sidebar from "./components/shared/Sidebar"
import {RiMenu2Fill} from "react-icons/ri"
function App() {


  return (
    <div className="App bg-[#262837] w-full min-h-screen ">

      <Sidebar />
      {/*menu movil*/}
    <nav className=" bg-[#1f1d2b] lg:hidden ">  </nav>
      <button>
        <RiMenu2Fill />
      </button>
      <button>
        <RiMenu2Fill />
      </button>
      <button>
        <RiMenu2Fill />
      </button>
      <button>
        <RiMenu2Fill />
      </button>
    </div>
  )
}

export default App
