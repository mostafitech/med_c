import React,{useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [state, setState] =useState(false)
  const toggle =() =>{
    setState(!state)
  }
  return (
    
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-white shadow-xl sticky top-0 z-10 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <Link href="/" className="flex items-center cursor-pointer">
                      <li className='text-gray-800 font-semi-bold text-3xl pb-4 mt-3 flex w-10 h-10 ml-20 '>
                      <span className='font-semi-bold  flex'>Media</span><span className='text-blue-600 font-bold  tracking-widest
                      '>Caris</span></li>
                     
                  </Link>
            
                  <div className="hidden w-full md:block md:w-auto" >
                      <ul className="flex flex-col p-4  rounded-lg  md:flex-row md:space-x-12 md:mt-0 md:text-m md:font-medium md:border-0 mr-20 ">
                          <li>
                          <Link onClick={toggle} href="/" className={'block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white ' + (state ? 'block py-2 pr-4 pl-3  rounded  text-blue-500 md:p-0 dark:text-white':'')} >Home</Link> 
                          </li>
                          <li>
                          <Link onClick={toggle} href="/about" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white">About</Link> 
                          </li>
                          <li>
                          <Link onClick={toggle} href="/services" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white">Services</Link> 
                          </li>
                          <li>
                          <Link onClick={toggle} href="/pricing" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white">Pricing</Link> 
                          </li>
                          <li>
                          <Link onClick={toggle} href="/contact" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white">Contact</Link> 
                          </li>
                      </ul>
                  </div>
            </div>
     </nav>

  )
}

export default Navbar