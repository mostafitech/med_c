import React from 'react'
import Image from 'next/image'
import Img from '../public/assests/how.jpg'
import Imgg from '../public/assests/1.jpg'
import Imggg from '../public/assests/2.jpg'


const Howarewe = () => {
  return (
    <section  >
        <div className="bg-white h-1/2 w-full  md:flex-row flex-col justify-around items-start  p-20">

            <div className='p-5 '>     
                <p className='text-gray-800 font-bold text-4xl pb-6 tracking-widest  '><span>How Are We</span></p>       
            </div>

            <div class="bg-white flex">
            <div class=" relative overflow-hidden  sm:pt-1/3 lg:pt-2/3 p-2/3 mt-3">
                  
                  <Image src={Img}  class="rounded-lg flex " ></Image>
                                     
                  </div>
              <div class=" p-5">
               
                  <div className=''>

                    
                     
                      <div class="mt-0">
                        <h2 class="font-medium text-gray-900">Who Are We</h2>
                        <p class="mt-2 text-sm text-gray-500">MediaCaris est une société spécialisée dans les services et conseils en<br></br>
                                                                informatique, basée sur Tanger caractérisée par la maitrise des outils <br></br>technologiques, la disponibilité
                                                               et l’excellence de ses agents et surtout par ses prestations de qualité<br></br> qui répondent
                                                               exactement à votre besoin et vous apportent la solutions la plus<br></br> pertinente , que ça soit la
                                                               création du site web de votre entreprise ou<br></br> l’informatisation de votre processus métier.
                                                                MediaCaris vous crée des logiciels<br></br> des applications dédiées à l’amélioration de la performance de votre entreprise<br></br> l’optimisation de ses processus.</p>
                      </div>

                      <div class="mt-7">
                      <h2 class="font-medium text-gray-900">Our values</h2>
                        <p class="mt-2 text-sm text-gray-500">MediaCaris est une société spécialisée dans les services et conseils en<br></br>
                                                                informatique, basée sur Tanger caractérisée par la maitrise des outils <br></br>technologiques, la disponibilité
                                                               et l’excellence de ses agents et surtout par ses prestations de qualité<br></br> qui répondent
                                                               exactement à votre besoin et vous apportent la solutions la plus<br></br> pertinente , que ça soit la
                                                               création du site web de votre entreprise ou<br></br> l’informatisation de votre processus métier.
                                                                MediaCaris vous crée des logiciels<br></br> des applications dédiées à l’amélioration de la performance de votre entreprise<br></br> l’optimisation de ses processus.</p>
                      </div>
                      
                    
                  </div>
                 
              </div>
          

            </div>
            <div className=' p-5 '>
                            
                            <p className='text-gray-800 font-bold text-4xl pb-6 tracking-widest mt-14'><span>
                                        Some Of Our Work</span>
                                    </p>
                                <ul>
                                    <p className='font-semi-bold text-m  leading-5 h-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum laoreet est posuere viverra.<br></br>
                                    Dui nascetur purus sem nisi, sed sagittis tellus est tortor.</p>
                                </ul>
                        </div>
                        <div class="bg-white p-20 ">
  <div class="mx-auto max-w-xl py-5 ">
    

    <div class="flex  gap-y-10  ">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full xl:aspect-w-7 xl:aspect-h-8">
          <Image src={Imgg}  class=""/>
        </div>
        <h2 class="mt-4 text-xl text-gray-700">Preject Title</h2>
        <p class="mt-1 text-lg font-xl text-gray-900">Web development</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full  xl:aspect-w-7 xl:aspect-h-8">
          <Image src={Imggg}  class="sm:pt-1/3 lg:pt-2/3 p-2/3 mt-3"/>
        </div>
        <h2 class="mt-4 text-xl text-gray-700">Preject Title</h2>
        <p class="mt-1 text-lg font-xl text-gray-900">Marketing digital / branding</p>
      </a>

     

     
    </div>
    <div class="flex  gap-y-10 ">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full  xl:aspect-w-7 xl:aspect-h-8">
        <Image src={Imgg}  class="sm:pt-1/3 lg:pt-2/3 p-2/3 mt-3"/>
        </div>
        <h2 class="mt-4 text-xl text-gray-700">Preject Title</h2>
        <p class="mt-1 text-lg font-xl text-gray-900">Web development</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full  xl:aspect-w-7 xl:aspect-h-8">
        <Image src={Imggg}  class="sm:pt-1/3 lg:pt-2/3 p-2/3 mt-3"/>

        </div>
        <h2 class="mt-4 text-xl text-gray-700">Preject Title</h2>
        <p class="mt-1 text-lg font-xl text-gray-900">Marketing digital / branding</p>
      </a>

     

     
    </div>
  </div>
</div>
  
  
        </div>
    </section>
  )
}

export default Howarewe