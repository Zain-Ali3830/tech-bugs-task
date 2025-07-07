
import CheckOut from "./components/checkout"
import ItemCart from "./components/itemchart"
import Sidebar from "./components/sidebar"
import Table from "./components/table"
import { FaUserCircle, FaBell } from "react-icons/fa"
function App() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen">
      <div className="w-full md:w-64">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="w-full h-16  flex items-center justify-end px-4 md:px-6 gap-4">
          <div className="text-xl text-gray-600 cursor-pointer">
            <FaBell />
          </div>
          <div className="text-2xl text-gray-600 cursor-pointer">
            <FaUserCircle />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row flex-1  p-4 gap-0 sm:p-5 overflow-y-auto">
          <div className="flex flex-col gap-4 w-full  lg:w-2/3 lg:px-[110px] overflow-x-auto">
            <h1 className="font-bold text-xl sm:text-2xl text-black text-center sm:text-left">
              Orders
            </h1>
            <ItemCart />
            <Table />
          </div>
          <div className="w-full flex justify-center items-center lg:w-1/3 md:flex justify-center  xl:mt-10 overflow-hidden">
            <CheckOut />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
