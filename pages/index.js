import Head from 'next/head'
import React, { Fragment } from 'react'
import Hero from '../components/hero'
import Whatwedo from '../components/whatwedo'
import Howarewe from '../components/howarewe'



export default function Home() {
  return (
  <>
      <div>
    
            <Head>
          
              <title>MediaCaris</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
              <link href="http://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>
                      

            </Head>

      </div>

      <Hero/>
      <Whatwedo/>
      <Howarewe/>

  </>
   

    
  )
}
