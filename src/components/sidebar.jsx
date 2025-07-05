
import { FiSettings, FiHome } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaDog } from 'react-icons/fa';
import { SlBadge } from "react-icons/sl";
import { LuDna } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { CgSupport } from "react-icons/cg";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button
      onClick={toggleSidebar}
      className={`absolute top-6 left-6 z-[9999] sm:hidden p-2 text-gray-900 focus:outline-none hover:text-yellow-400 transition-colors duration-200 ${
        isOpen ? 'hidden' : 'block'
      }`}
    >
      <HiMenu className="w-7 h-7" />
    </button>
      <nav className={`bg-gray-900 shadow-md border-r border-gray-200 h-screen fixed top-0 left-0 w-[260px] py-2 px-4 overflow-auto z-50 transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:block lg:w-[320px]`}>

        <div className="relative flex flex-col h-full">
          <div className="flex  gap-2 text-white text-xl  w-full rounded-md px-2 py-2 mb-3">
            <FaDog className="text-yellow-500 h-7 w-7" />
            <h1>Pet DNA</h1>
            <button
              onClick={toggleSidebar}
              className="sm:hidden ml-auto text-white hover:text-yellow-400 transition-colors duration-200 text-right"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm">Your Pets</h4>
            <div className="flex gap-2">
              <div className="h-5 w-5 bg-white border-2 border-orange-500 rounded-full"></div>
              <div className="h-5 w-5 bg-white border-2 border-blue-500 rounded-full"></div>
              <div className="h-5 w-5 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
                <button>
                  <FaPlus className="text-[9px] text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[8px] text-white">
            <div>Maxi</div>
            <div>Fiona</div>
            <div>add new</div>
          </div>

          <div className="mt-3 ">
            <h4 className="text-sm  mb-4 text-white">Main Menu</h4>
            <ul className="space-y-4 px-2 flex-1">
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <FiHome className="w-4 h-4 mr-3" />
                  <span>Overview</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <LuDna className="w-4 h-4 mr-3" />
                  <span>DNA</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <FaHandHoldingHeart className="w-4 h-4 mr-3" />
                  <span>Care</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <LuShoppingCart className="w-4 h-4 mr-3" />
                  <span>Orders</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <SlBadge className="w-4 h-4 mr-3" />
                  <span>Referrals</span>
                </div>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="flex-1">
            <h4 className="text-sm text-slate-500 mb-4 text-white">
              Preferences
            </h4>
            <ul className="space-y-4 px-2 flex-1">
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <FiSettings className="w-4 h-4 mr-3" />
                  <span>Settings</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <CgSupport className="w-4 h-4 mr-3" />
                  <span>Support & Help</span>
                </div>
              </li>
              <li>
                <div className="text-sm flex items-center font-medium  text-white hover:text-yellow-400">
                  <FaSignOutAlt className="w-4 h-4 mr-3" />
                  <span>Logout</span>
                </div>
              </li>
            </ul>
             <div className="mt-4">
            <hr className="my-4 border-gray-200" />
          </div>

          <div className="bg-gray-800 max-w-full flex flex-col mt-10 items-center gap-3 rounded-lg p-5 mb:20 md:mb-48">
            <h3 className="text-white text-center">
              Meet Buddy . Your Pet <br />
              <span className="text-center">Care Guide</span>
            </h3>
            <p className="text-gray-300">
              Have questions about your pet's <br /> health , behaviour or daily
              routine?
            </p>
            <button className="bg-yellow-400 text-white pl-2 pr-2 rounded-lg text-[#205295] border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition-colors duration-300">
              Ask Buddy Now
            </button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
