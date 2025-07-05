  import React, { useState } from "react";
  import { FaBox } from "react-icons/fa";
  import { FaShoppingCart } from "react-icons/fa";
  import { FaDna } from 'react-icons/fa6';
  import { FaLightbulb } from 'react-icons/fa'; 
  function ItemCart() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    return (
      <>
        <div className="flex flex-wrap md:flex-nowrap justify-center bg-gray-300 md:justify-evenly items-center h-fit p-4 rounded-md shadow-lg   gap-4 border-2 border-gray-300 w-full">
          <div className="bg-gray-400 rounded-md w-[300px] h-[200px]"></div>

          <div className="flex flex-col justify-between p-4 gap-6">
            <div className="flex items-center gap-4">
              <h4 className="font-semibold whitespace-nowrap">Lorem Ipsum Title</h4>
              <span className=" flex justify-center items-center text-[10px] bg-orange-200 pl-2 pr-2 whitespace-nowrap  rounded-2xl text-orange-300">
                Free Shipping
              </span>
            </div>
            <ul className="text-gray-600 text-[14px] list-none">
              <li >
                <div className="text-sm flex items-center font-medium gap-2">
                  <FaDna className="w-4 h-4 text-blue-600"/>
                  <span>Analyze Your Pet's DNA in 5 minutes</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium gap-2">
                                  <FaBox className="w-4 h-4 text-amber-700"/>
                  <span>Include Free return Shipping </span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium gap-2">
                  <FaLightbulb className="w-4 h-4 text-yellow-400" />
                  <span>Results in 2-3 weeks with AI wellness insights</span>
                </div>
              </li>
            </ul>
            <h4 className="font-semibold">$129</h4>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>
                <FaShoppingCart color="orange" />
              </span>
              <button className=" flex justify-start text-orange-300">
                Add to Cart
              </button>
            </div>
              <div className="flex justify-center bg-yellow-300  gap-3 items-center  rounded-2xl pl-2 pr-2 ">
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
          </div>
          </div>
          </div>
        
        </div>
      </>
    );
  }

  export default ItemCart;
