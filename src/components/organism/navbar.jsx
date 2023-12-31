import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


 function Navbar() {
  const nav = [
    {link:'/',title:"Home"},
    {link:'/',title:"Blog"},
    {link:'/',title:"Project"},
    {link:'/',title:"Contact"}
  ]



 const [isOpen, setIsOpen] = useState(false);

 return (
  <>
   <nav className="relative flex items-center justify-between flex-wrap p-3 bg-transparent">
     <div className=" flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <img src={require('../image/logo.png')} className="w-100 h-20 mr-2 ml-5" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full flex items-end mr-5 lg:flex lg:items-center  lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-md text-white mr-1 lg:flex-grow lg:mr-1">
         {nav.map((e)=>(
          <Link to={e.link} className="block hover:bg-gray-400 hover:px-1 px-1 rounded-md mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
          {e.title}
        </Link>
         ))}
        
       </div>

     </div>
   </nav>

    </>
  )
}
export default Navbar;