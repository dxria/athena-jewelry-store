import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faShoppingCart)

function Navigation() {

    return (
        <div >
            <div className="w-screen py-6 px-5 lg:px-64 flex justify-center space-x-20 md:space-x-40 shadow-md">
                {/* desktop */}

                <span className='flex items-center text-3xl font-dmserifdisplay font-semibold text-rich-bordeaux'>ATHENA</span>
                <ul className="hidden md:flex items-center space-x-24">
                    <li className="font-raleway font-semibold">Home</li>
                    <li className="font-raleway font-semibold">Shop</li>
                    <li className="font-raleway font-semibold">About</li>
                    <li className="font-raleway font-semibold">Contact us</li>
                </ul>
                <ul className="flex items-center space-x-1">
                    <li className="font-raleway font-semibold"> <FontAwesomeIcon className='p-1' icon="fa-solid fa-user" /></li>
                    <li className="font-raleway font-semibold"> <FontAwesomeIcon className='p-1' icon="fa-solid fa-shopping-cart" /></li>
                </ul>

                {/* mobile-tab */}

                <button className="space-y-1 group md:hidden">
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>
                    <div className="w-6 h-1 bg-rich-bordeaux"></div>
                

                <ul className='bg-[#FFF] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
                    <button className="px-10 py-8 relative ml-auto">
                        <div className="w-6 h-1 rotate-45 absolute bg-rich-bordeaux"></div>
                        <div className="w-6 h-1 -rotate-45 absolute bg-rich-bordeaux"></div>
                    </button>

                    <li className="font-raleway font-semibold flex justify-center w-full py-4 hover:bg-grey-rose hover:text-[#FFF]">Home</li>
                    <li className="font-raleway font-semibold flex justify-center w-full py-4 hover:bg-grey-rose hover:text-[#FFF]">Shop</li>
                    <li className="font-raleway font-semibold flex justify-center w-full py-4 hover:bg-grey-rose hover:text-[#FFF]">About</li>
                    <li className="font-raleway font-semibold flex justify-center w-full py-4 hover:bg-grey-rose hover:text-[#FFF]">Contact us</li>
                </ul>
                </button>
            </div>
        </div>
    );
}

export default Navigation;

