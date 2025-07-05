import { FaTrash } from "react-icons/fa";
function CheckOut() { 
  return (
    <>
      <div className="w-full h-fit max-w-[400px] flex flex-col justify-center p-4 bg-gray-300  rounded-md shadow-lg ">
        <div className="flex justify-start w-full px-8">
          <h2 className="font-semibold text-lg text-start  w-full">Checkout</h2>
        </div>
        {/* {Section 1} */}
        <div className="flex justify-center items-center rounded-md  gap-4 p-4">
          <div className="bg-gray-400 rounded-md w-[50px] h-[50px]"></div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center gap-10">
              <h4 className="font-semibold">Lorem Ipsum Title</h4>
              <FaTrash className="w-4 h-4 " />
            </div>
            <p className="text-xs text-gray-300">2x</p>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">$129</h4>
              <div className="flex justify-center bg-yellow-300  gap-3 items-center  rounded-2xl pl-2 pr-2 ml-4">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center">
          <hr className="my-2 w-[85%] border-t-3 rounded-full border-gray-700" />
        </div>

        {/* {Section 2} */}

        <div className="flex justify-center items-center rounded-md  gap-4 p-4">
          <div className="bg-gray-400 rounded-md w-[50px] h-[50px]"></div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center gap-10">
              <h4 className="font-semibold">Lorem Ipsum Title</h4>
              <FaTrash className="w-4 h-4 " />
            </div>
            <p className="text-xs text-gray-300">2x</p>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">$129</h4>
              <div className="flex justify-center bg-yellow-300  gap-3 items-center  rounded-2xl pl-2 pr-2 ml-4">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <hr className="my-2 w-[85%] border-t-3 rounded-full border-gray-700" />
        </div>

        {/* {Section 3} */}

        {/* <div> */}
        <div className="flex justify-start w-full px-9 ">
          <h2 className="text-lg font-medium w-full text-start ">Order Summary</h2>
        </div>
        <div className="flex justify-between items-center mt-4  w-full px-10 text-gray-600">
          <h4>Subtotal</h4>
          <h5>$516</h5>
        </div>
        <div className="flex justify-between items-center mt-4  w-full px-10  text-gray-600">
          <h4>Shipping</h4>
          <h5 className="p-0">$0</h5>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <hr className="my-2 w-[85%] border-t-3 rounded-full border-gray-700" />
        </div>
        <div className="flex justify-between items-center mt-1  w-full px-10  text-gray-600">
          <h4>Total</h4>
          <h5 className="p-0">$516</h5>
        </div>
        <div className="flex flex-wrap justify-center justify-center items-center gap-4  mt-4 p-4    ">
          <input
            type="text"
            placeholder="Add Promo Code"
            className="border-2 border-gray-400 rounded-full px-5 py-2 "
          />
          <button className="bg-yellow-400 border-2 border-yellow-400 rounded-full text-white px-4 py-2  ">
            Apply
          </button>
        </div>
        <button className="bg-yellow-400 border-2 border-yellow-400 rounded-full text-white mt-2 px-4 py-2  ">Proceed to Checkout</button>

        {/* </div> */}
      </div>
    </>
  );
}
export default CheckOut;
