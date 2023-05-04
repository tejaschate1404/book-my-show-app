import React from 'react'
import { BiChevronDown, BiSearch } from "react-icons/bi";




function NavSm(){
  return (
    <>
      <div className="text-white flex item-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Pune <BiChevronDown />
          </span>
        </div>
        <div className='w-8 h-8'>
          <button>Use App</button>
          <BiSearch className="w-full h-full"/>
        </div>
      </div>
    </>
  ); 
  
}




function NavMd() {
  return (
    <>
      <div className="flex gap-2 pl-6 w-full">
        <div className="pl-5">
          <img
            src=""
            alt="logo"
            className="bg-transparent mt-2"
            style={{ height: "35px", width: "35px" }}
          />
        </div>
        <div className="flex items-center justify-center w-96 gap-3 h-10 p-1 pl-2 m-2 bg-white rounded-md">
          <label>
            <BiSearch className="text-slate-700" />
          </label>
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search For movies,Events, Plays And activites..."
          ></input>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="hover:text-white text-gray-400">Pune</h3>
          <BiChevronDown className="text-white" />
        </div>
        <div className="flex items-center">
          <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
            Sign in
          </button>
        </div>
        <div className="flex items-center">
         
        </div>
      </div>

      {/* <div className="w-10 h-10">
        <img src="" alt="logo" className="w-full h-full" />
      </div>
      <div classsName="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div> */}
    </>
  );
  
}


function NavLg() {
  return (
    // <div className="container flex mx-auto px-4 items-center justify-between">
    //   <div classsName="w-1/2 flex items-center gap-3 bg-white">
    //     <div className="w-10 h-10">
    //       <img src="" alt="logo" className="w-full h-full" />
    //     </div>
    //     <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
    //       <BiSearch />
    //       <input type="search"
    //         className="w-full bg-transparent border-none focus:outline-none"
    //         placeholder='Search for movies, events,plays, sports and activiters'
    //       />
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1">
          <div className="pl-32">
            <img src="" alt="logo" className="w-full h-full" />
          </div>
          <div
            className="flex items-center justify-center gap-3 h-10  pl-2 m-2 bg-white rounded-md"
            style={{ width: "550px" }}
          >
            <label>
              <BiSearch className="text-slate-700" />
            </label>
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search For movies,Events, Plays And activites"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <h3 className="hover:text-white text-gray-400">Ahemdabad</h3>
            <BiChevronDown className="text-white" />
          </div>
          <div> </div>
          <div className="flex items-center">
            <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
              Sign in
            </button>
          </div>
          <div className="flex items-center pr-32"></div>
        </div>
      </div>
    </>
  );

}



// Main Component
const Navbar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        {/* Small Screen Navbar */}
        <div className="md:hidden ">
          <NavSm />
        </div>
      </nav>

      {/* Medium Screen Size */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* Large Screen Size */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </>
  );
}

export default Navbar







