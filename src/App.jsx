import CheckOut from "./components/checkout"
import ItemCart from "./components/itemchart"
import Sidebar from "./components/sidebar"
import Table from "./components/table"
function App() {

  return (
    <>
     <div className="flex min-h-screen overflow-hidden bg-gray-100">
      <div className="md:w-65 lg:block overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center w-full  md:flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center lg:items-center gap-5 p-5 min-w-0 overflow-x-auto">
        <div className="flex flex-col  justify-center items-center gap-4 w-full min-w-0 overflow-x-auto lg:flex justify-end items-end">
          <h1 className="font-bold text-2xl w-full text-center text-gray-600 lg:text-left px-[110px] text-black">Orders</h1>
        <div className="flex flex-col gap-5 w-full  lg:w-[85%] overflow-x-auto  ">
          <ItemCart />
          <Table />
        </div>
        </div>
        <div className="w-full  flex  justify-center md:justify-center   lg:w-full xl:w-1/2  xl:mt-10 overflow-hidden">
          <CheckOut />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
