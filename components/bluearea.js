import React from 'react'
import Head from 'next/head'

const Bluearea = () => {
  return (
    <>
    <Head>
    <link href="http://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>
   </Head>

    
    <div className=" h-1/2 w-full  md:flex-row flex-col justify-around items-start bg-blue-500 p-10 relative ">

        <div className='p-5 flex m-10' >    
                <p className='text-white font-bold text-4xl pb-6  mr-80 tracking-widest '><span>
                You Take Care Of The Idea,<br></br>And Let Us Take Care Of<br></br>The Execution</span>
                </p>
                <a href="#" className="mt-8  flex w-60 h-14 items-center md:flex-row flex-col justify-center rounded-md border border-transparent bg-white text-base font-medium text-blue-500  md:py-2 md:px-5 md:text-lg ">Let's Get In Touch</a>
        </div> 
            
    </div>

    </>
  )
}

export default Bluearea