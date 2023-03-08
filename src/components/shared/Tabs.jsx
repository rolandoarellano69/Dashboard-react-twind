
function Tabs() {
  return (
    <nav className="text-gray-300 flex items-center gap-4 text-xs  justify-between lg:justify-start lg:gap-8 ">
      <a href="#" className="relative py-2  before:w-20 before:h-1 before:absolute before:bg-[#395168] before:left-0 before:rounded-md before:-bottom-[3px]">Cafés Calientes</a>
      <a href="#" className="">Cafés Helados</a>
      <a href="#">Refreshers</a>
      <a href="#">Alternativas al café</a>


    </nav>
  )
}

export default Tabs