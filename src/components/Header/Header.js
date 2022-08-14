import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../Assets/logo/hetali logo_final_29.7 1.png';
import './Header.css';

const Header = () => {
    const [clickHandle, setClickHandle] = useState(true);
    return (
        <div>
      <header className="w-full bg-[#FAFAFA] items-center justify-center flex py-[10px] shadow-md">
        <div className="container mx-3">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="flex items-center">
                <img className="w-[150px] mr-20" src={logo} alt="" />
                </div>
                <ul className="hidden md:flex cursor-pointer">
                <li className=" px-[30px] font-[600] bt-style">ABOUT US</li>
                <li className=" px-[30px] font-[600] bt-style">PROJECTS</li>
                <li className=" px-[30px] font-[600] bt-style">DIVERSIFICATION</li>
                <li className=" px-[30px] font-[600] bt-style">OUR PROCESS</li>
                <li className=" px-[20px] font-[600] bt-style">TESTIMONIALS</li>
                <li className=" px-[20px] font-[600] bt-style">CAREERS</li>
                <li className=" px-[20px] font-[600] bt-style">CONTACT US</li>
                </ul>
            </div>
            <div className="flex md:hidden">
              <svg
                onClick={() => setClickHandle(!clickHandle)}
                class="h-12 w-12 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              className={
                clickHandle
                  ? "hidden"
                  : "block md:hidden bg-white rounded-b-[8px] absolute top-[6rem] right-[2rem]"
              }
            >
              <ul className="px-[1.75rem] pt-3 pb-3 text-center space-y-1 cursor-pointer">
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                ABOUT US
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                PROJECTS
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                DIVERSIFICATION
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                OUR PROCESS
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                TESTIMONIALS
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                CAREERS
                </li>
                <li className=" block cursor-pointer py-2 px-3 font-[600] hover:bg-slate-400">
                CONTACT US
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
    );
};

export default Header;