import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navber = () => {
  const [isOpen,setIsOpen] =useState(false);
  return (
    <nav className="bg-black ">
      <div className="h-[75px] text-white items-center flex justify-between">
        {/* menuber */}
        <button onClick={() => setIsOpen(!isOpen)} className="block sm:hidden sm:px-8 ">
            <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        {/* logo */}
        <div className="sm:px-12">
          <a href="">
              <img src={logo} alt="" className="w-[126px] h-[34px]"/>
          </a>
        </div>
        {/* menu buttons dasktop   */}
        <div className="hidden sm:block">
            <a href=""className="px-4">Home</a>
            <a href=""className="px-4">About</a>
            <a href=""className="px-4">Discovery</a>
            <a href=""className="px-4">Contuct us</a>
        </div>
        <div className="px-4 flex">
          <a href=""><FontAwesomeIcon icon={faUser} size='2x' /></a>
          <a href=""><FontAwesomeIcon icon={faCartShopping} size='2x' /></a>
        </div>
          
      </div>
        {/* menu buttons Mobail   */}
        <div className={`${isOpen ? "block":"hidden"} sm:hidden bg-gray-400 space-y-2 pb-3`}>
          <a href=""className="px-4 block">Home</a>
          <a href=""className="px-4 block">About</a>
          <a href=""className="px-4 block">Discovery</a>
          <a href=""className="px-4 block">Contuct us</a>
        </div>

    </nav>
  )
}

export default Navber
