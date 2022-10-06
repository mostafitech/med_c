import Link from 'next/link'
import React from 'react'
import {FaAt, FaInstagram, FaPhone} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPeriscope} from 'react-icons/fa'



const Footer = () => {
  return (
  

<>

            <div className='bg-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
                    <div className='p-5'>
                        <ul>
                       <p className='text-gray-800 font-semi-bold text-3xl pb-6 italic'><a href='/'><span>
                                Media</span><span className='text-blue-600'>Caris</span></a>
                            </p>
                            <p className='font-semi-bold text-sm italic leading-5'>Lorem Ipsum est simplement du faux<br></br>texte Lorem Ipsum est simplement<br/>
                            Lorem Ipsum est simplement du faux</p>
                            <div className='flex gap-6 pd-5 mt-4'>
                                <FaInstagram className='text-2xl text-yellow-600 cursor-pointer hover:text-yellow-600 hover:rotate-180 hover:translate-y-6'/>
                                <FaFacebook className='text-2xl text-blue-700 cursor-pointer hover:text-blue-600 hover:rotate-180 hover:translate-y-6'/>
                                <FaTwitter className='text-2xl text-blue-700 cursor-pointer hover:text-blue-600 hover:rotate-180 hover:translate-y-6'/>
                            </div>
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-semi-bold text-2xl pd-4'><span>Site Map</span></p>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer mt-4'><Link href="/">Home</Link></li>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer'><Link href="/services">Services</Link></li>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer'><Link href="/about">About US</Link></li>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer'><Link href="/portfolio">Portfolio</Link></li>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer'><Link href="/404">Formation</Link></li>
                            <li className='text-gray-500 text-md pd-3 font-semi-bold hover:text-blue-500 cursor-pointer'><Link href="/contact">Contact US</Link></li>
                            
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-semi-bold text-2xl pd-4'><span>Location</span></p>
                            
                            <li className='text-gray-500 text-md pd-2 font-semi-bold text-sm mt-4 flex gap-3'><FaPeriscope className='text-xl cursor-pointer text-blue-500 '/> Lorem Ipsum est simplement du faux texte<br></br> employé dans</li>
                            <li className='text-gray-500 text-md pd-2 font-semi-bold text-sm mt-3 flex gap-3'><FaPeriscope className='text-xl cursor-pointer text-blue-500 '/>Lorem Ipsum est simplement du faux texte<br></br> employé dans</li>
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-semi-bold text-2xl pd-4'><span>Contact Us</span></p>
                            <li className='text-black text-md pd-2 font-semi-bold mt-4 text-sm flex gap-3  hover:text-blue-500 cursor-pointer'><FaAt className='text-xl cursor-pointer text-blue-500 stroke-1'/>contact@mediacaris.com</li>
                            <li className='text-black text-md pd-2  font-semi-bold text-sm mt-3 flex gap-3' ><FaPhone className='text-xl cursor-pointer text-blue-500 '/>0600000000</li>
                        </ul>
                    </div>
            </div>
           <div className='flex flex-col justify-center text-center p-5 bg-gray-50'>
           <span class=" dark:text-gray-400" >© 2022 <a href="/" class="hover:underline"><span className='text-black'>Media</span><span className='text-blue-500'>Caris</span>™</a>. All Rights Reserved.
            </span>
           </div>
            
             </>

  )
}

export default Footer