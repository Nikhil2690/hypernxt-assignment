import React from 'react';
import {  User, Heart, Search, Menu, ChevronLeft, ChevronRight, ChevronDown, Star } from 'lucide-react';
import Logo from '../assets/hypernxtlogo.png'
import Sidebar from './Sidebar';

export const Navbar = ({setIsCartOpen}) => {


  return (
    <>
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            
                <img className='w-full' src={Logo} alt="Logo"></img>
            
          </div>
          
         <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
  <select className="border border-gray-300 rounded-l-xl px-4 py-4 text-sm text-gray-600">
    <option>All Categories</option>
    <option>Groceries</option>
    <option>Drinks</option>
    <option>Chocolate</option>
  </select>

  {/* Search input wrapper */}
  <div className="relative flex-1">
    <input
      type="text"
      placeholder="Search for more than 20,000 products"
      className="w-full border border-l-0 border-gray-300 rounded-r-xl px-4 py-4 pr-12 text-sm placeholder-gray-500 focus:outline-none"
    />
    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
  </div>
</div>


          <div className="flex items-center space-x-6">
            <button className="text-sm text-gray-700 hover:text-gray-600">
              Apply for Store Partner
            </button>
            <User className="w-6 h-6 text-gray-700 cursor-pointer" />
            <Heart className="w-6 h-6 text-gray-700 cursor-pointer" />
            {/* <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div> */}
            <div className="text-right cursor-pointer" onClick={()=> setIsCartOpen(true)}>
              <div className="text-sm text-gray-500 flex gap-2 ml-5">Your Cart <ChevronDown/></div>
              <div className="text-black text-lg font-semibold ml-5">$1290.00</div>
            </div>

          </div>
        </div>
      </div>
    </nav>


    </>
  );
};