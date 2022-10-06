import React from "react";
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Whatwedo = () => {
    return (

        <section className=""  >
                <div className="  w-full  md:flex-row flex-col justify-around items-start bg-blue-100 p-20 h-1">

                    <div className='p-5 '>
                            
                        <p className='text-gray-800 font-bold text-4xl pb-6 tracking-widest '><span>
                                    What We Do</span>
                                </p>
                            <ul>
                                <p className='font-semi-bold text-m  leading-5 h-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum laoreet est posuere viverra.<br></br>
                                Dui nascetur purus sem nisi, sed sagittis tellus est tortor.</p>
                            </ul>
                    </div>

                </div>
       

                <div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start bg-blue-100 p-20 ">
                <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-bold text-2xl pd-4 mb-5 '><svg className='text-7xl text-blue-700 cursor-pointer mb-5' xmlns="http://www.w3.org/2000/svg" width="80" height="74" viewBox="0 0 103 97" fill="none">
                                        <ellipse cx="29.1717" cy="31" rx="29.1717" ry="31" fill="#0E87F6" fill-opacity="0.31"/>
                                        <path d="M36.8715 61.1406C34.5074 61.1406 32.1963 61.8417 30.2307 63.1551C28.265 64.4685 26.7329 66.3353 25.8282 68.5195C24.9235 70.7036 24.6868 73.107 25.148 75.4257C25.6092 77.7444 26.7477 79.8742 28.4193 81.5459C30.091 83.2176 32.2208 84.356 34.5395 84.8172C36.8582 85.2784 39.2616 85.0417 41.4457 84.137C43.6299 83.2323 45.4967 81.7002 46.8101 79.7346C48.1236 77.7689 48.8246 75.4579 48.8246 73.0938C48.8153 69.9264 47.553 66.8915 45.3134 64.6519C43.0737 62.4122 40.0388 61.1499 36.8715 61.1406V61.1406ZM36.8715 80.8281C35.3418 80.8281 33.8464 80.3745 32.5745 79.5246C31.3026 78.6748 30.3112 77.4668 29.7258 76.0536C29.1404 74.6403 28.9873 73.0852 29.2857 71.5848C29.5841 70.0845 30.3208 68.7064 31.4024 67.6247C32.4841 66.543 33.8622 65.8064 35.3626 65.508C36.8629 65.2096 38.418 65.3627 39.8313 65.9481C41.2446 66.5335 42.4525 67.5248 43.3024 68.7968C44.1522 70.0687 44.6058 71.564 44.6058 73.0938C44.5966 75.1422 43.7788 77.1041 42.3303 78.5526C40.8818 80.001 38.9199 80.8189 36.8715 80.8281V80.8281ZM25.5512 44.8984L31.0707 39.3438L25.5512 33.7891C25.1595 33.3975 24.9395 32.8663 24.9395 32.3125C24.9395 31.7587 25.1595 31.2275 25.5512 30.8359C25.9428 30.4443 26.4739 30.2243 27.0277 30.2243C27.5815 30.2243 28.1127 30.4443 28.5043 30.8359L34.059 36.3555L39.6137 30.8359C40.0053 30.4443 40.5364 30.2243 41.0902 30.2243C41.644 30.2243 42.1752 30.4443 42.5668 30.8359C42.9584 31.2275 43.1784 31.7587 43.1784 32.3125C43.1784 32.8663 42.9584 33.3975 42.5668 33.7891L37.0472 39.3438L42.5668 44.8984C42.9584 45.29 43.1784 45.8212 43.1784 46.375C43.1784 46.9288 42.9584 47.46 42.5668 47.8516C42.1752 48.2432 41.644 48.4632 41.0902 48.4632C40.5364 48.4632 40.0053 48.2432 39.6137 47.8516L34.059 42.332L28.5043 47.8516C28.1127 48.2432 27.5815 48.4632 27.0277 48.4632C26.4739 48.4632 25.9428 48.2432 25.5512 47.8516C25.1595 47.46 24.9395 46.9288 24.9395 46.375C24.9395 45.8212 25.1595 45.29 25.5512 44.8984V44.8984ZM90.3793 78.6484C90.7709 79.04 90.9909 79.5712 90.9909 80.125C90.9909 80.6788 90.7709 81.21 90.3793 81.6016C89.9877 81.9932 89.4565 82.2132 88.9027 82.2132C88.3489 82.2132 87.8178 81.9932 87.4262 81.6016L81.8715 76.082L76.3168 81.6016C75.9252 81.9932 75.394 82.2132 74.8402 82.2132C74.2864 82.2132 73.7553 81.9932 73.3637 81.6016C72.972 81.21 72.752 80.6788 72.752 80.125C72.752 79.5712 72.972 79.04 73.3637 78.6484L78.8832 73.0938L73.3637 67.5391C73.1697 67.3452 73.0159 67.115 72.911 66.8616C72.8061 66.6083 72.752 66.3367 72.752 66.0625C72.752 65.7883 72.8061 65.5167 72.911 65.2634C73.0159 65.01 73.1697 64.7798 73.3637 64.5859C73.5576 64.392 73.7878 64.2382 74.0411 64.1333C74.2945 64.0283 74.566 63.9743 74.8402 63.9743C75.1144 63.9743 75.386 64.0283 75.6393 64.1333C75.8927 64.2382 76.1229 64.392 76.3168 64.5859L81.8715 70.1055L87.4262 64.5859C87.8178 64.1943 88.3489 63.9743 88.9027 63.9743C89.4565 63.9743 89.9877 64.1943 90.3793 64.5859C90.7709 64.9775 90.9909 65.5087 90.9909 66.0625C90.9909 66.6163 90.7709 67.1475 90.3793 67.5391L84.8597 73.0938L90.3793 78.6484ZM74.3129 46.4805C72.2035 54.1094 65.6996 60.6836 58.4926 62.4766L57.9652 62.5469C57.454 62.5438 56.9613 62.3552 56.5788 62.0162C56.1962 61.6771 55.9497 61.2107 55.8853 60.7035C55.8208 60.1964 55.9427 59.6831 56.2283 59.2591C56.5139 58.8352 56.9437 58.5293 57.4379 58.3984C63.1683 56.957 68.5824 51.4727 70.2699 45.3555C71.4301 41.1367 71.4652 34.7383 64.9262 28.1641L62.8871 26.1602V35.125C62.8871 35.6844 62.6649 36.221 62.2693 36.6166C61.8737 37.0121 61.3372 37.2344 60.7777 37.2344C60.2183 37.2344 59.6817 37.0121 59.2862 36.6166C58.8906 36.221 58.6683 35.6844 58.6683 35.125V21.0625C58.6683 20.5031 58.8906 19.9665 59.2862 19.5709C59.6817 19.1754 60.2183 18.9531 60.7777 18.9531H74.8402C75.3997 18.9531 75.9362 19.1754 76.3318 19.5709C76.7274 19.9665 76.9496 20.5031 76.9496 21.0625C76.9496 21.6219 76.7274 22.1585 76.3318 22.5541C75.9362 22.9496 75.3997 23.1719 74.8402 23.1719H65.8754L67.8793 25.2109C74.1371 31.4336 76.4222 38.9922 74.3129 46.4805V46.4805Z" fill="#131313"/>
                                        </svg><span>Design</span></p>
                            <p className='text-gray-500 font-semi-bold text-m '>
                            Lorem ipsum dolor sit amet, consectetur<br></br>
                               adipiscing elit. Volutpat elit enim odio<br></br>
                               Consequat et ipsumsemper tempor massa<br></br>
                               Suspendissemetus eget nec amet. Nisl et sit <br></br> 
                               auctoregestas commodo.Erat ultricies sed <br></br>
                               quam proin nibh vel potenti. Varius varius<br></br>
                               ullamcorper auctor at enim. Lorem ipsum <br></br> 
                               consectetur adipiscing elit. </p>
                               <a href="#" className="   w-full items-left justify-left rounded-md   bg-transparent  text-base font-medium text-blue-500  md:py-2  md:text-lg flex gap-3 "><span >EXPLOR OUR SERVICE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg></a>
                               
                            
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-bold text-2xl pd-4 mb-5'><svg className='text-7xl text-blue-700 cursor-pointer  mb-5' xmlns="http://www.w3.org/2000/svg" width="80" height="74" viewBox="0 0 114 106" fill="none">
                                    <ellipse cx="29.1717" cy="31" rx="29.1717" ry="31" fill="#0E87F6" fill-opacity="0.31"/>
                                    <path d="M46.5 27.25V38.5H35.25V27.25H46.5ZM29.625 21.625V44.125H52.125V21.625H29.625ZM74.625 35.6875V46.9375H63.375V35.6875H74.625ZM57.75 30.0625V52.5625H80.25V30.0625H57.75ZM46.5 61V72.25H35.25V61H46.5ZM29.625 55.375V77.875H52.125V55.375H29.625Z" fill="#131313"/>
                                    <path d="M85.875 44.125V61H69V77.875H52.125V100.375H108.375V44.125H85.875ZM74.625 66.625H85.875V77.875H74.625V66.625ZM69 94.75H57.75V83.5H69V94.75ZM85.875 94.75H74.625V83.5H85.875V94.75ZM102.75 94.75H91.5V83.5H102.75V94.75ZM102.75 77.875H91.5V66.625H102.75V77.875ZM91.5 61V49.75H102.75V61H91.5Z" fill="#131313"/>
                                    </svg><span>Development</span></p>
                            <p className='text-gray-500 font-semi-bold text-m '>
                            Lorem ipsum dolor sit amet, consectetur<br></br>
                               adipiscing elit. Volutpat elit enim odio<br></br>
                               Consequat et ipsumsemper tempor massa<br></br>
                               Suspendissemetus eget nec amet. Nisl et sit <br></br> 
                               auctoregestas commodo.Erat ultricies sed <br></br>
                               quam proin nibh vel potenti. Varius varius<br></br>
                               ullamcorper auctor at enim. Lorem ipsum <br></br> 
                               consectetur adipiscing elit. </p>
                               <a href="#" className=" w-full items-left justify-left rounded-md   bg-transparent  text-base font-medium text-blue-500  md:py-2  md:text-lg flex gap-3">EXPLOR OUR SERVICE
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg></a>
                               
                           
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul>
                            <p className='text-gray-800 font-bold text-2xl pd-4 mb-5'><svg className='text-7xl text-blue-700 cursor-pointer  mb-5' xmlns="http://www.w3.org/2000/svg" width="80" height="74" viewBox="0 0 112 104" fill="none">
                                    <ellipse cx="29.1717" cy="31" rx="29.1717" ry="31" fill="#0E87F6" fill-opacity="0.31"/>
                                    <path d="M100.75 61.8125V75.875H33.25V30.875H61.375V25.25H33.25C31.7582 25.25 30.3274 25.8426 29.2725 26.8975C28.2176 27.9524 27.625 29.3832 27.625 30.875V75.875C27.625 77.3668 28.2176 78.7976 29.2725 79.8525C30.3274 80.9074 31.7582 81.5 33.25 81.5H55.75V92.75H44.5V98.375H89.5V92.75H78.25V81.5H100.75C102.242 81.5 103.673 80.9074 104.727 79.8525C105.782 78.7976 106.375 77.3668 106.375 75.875V61.8125H100.75ZM72.625 92.75H61.375V81.5H72.625V92.75Z" fill="black"/>
                                    <path d="M106.375 42.125V36.5H100.466C100.103 34.7394 99.4042 33.0654 98.4072 31.5697L102.598 27.3791L98.6209 23.4022L94.4303 27.5928C92.9346 26.5958 91.2606 25.8968 89.5 25.5341V19.625H83.875V25.5341C82.1144 25.8968 80.4404 26.5958 78.9447 27.5928L74.7541 23.4022L70.7772 27.3791L74.9678 31.5697C73.9708 33.0654 73.2718 34.7394 72.9091 36.5H67V42.125H72.9091C73.2718 43.8856 73.9708 45.5596 74.9678 47.0553L70.7772 51.2459L74.7541 55.2228L78.9447 51.0322C80.4404 52.0292 82.1144 52.7282 83.875 53.0909V59H89.5V53.0909C91.2606 52.7282 92.9346 52.0292 94.4303 51.0322L98.6209 55.2228L102.598 51.2459L98.4072 47.0553C99.4042 45.5596 100.103 43.8856 100.466 42.125H106.375ZM86.6875 47.75C85.0187 47.75 83.3874 47.2551 81.9999 46.328C80.6123 45.4009 79.5309 44.0831 78.8923 42.5414C78.2537 40.9996 78.0866 39.3031 78.4121 37.6664C78.7377 36.0297 79.5413 34.5263 80.7213 33.3463C81.9013 32.1663 83.4047 31.3627 85.0414 31.0371C86.6781 30.7116 88.3746 30.8787 89.9164 31.5173C91.4581 32.1559 92.7759 33.2373 93.703 34.6249C94.6302 36.0124 95.125 37.6437 95.125 39.3125C95.1228 41.5496 94.2331 43.6944 92.6512 45.2762C91.0694 46.8581 88.9246 47.7478 86.6875 47.75Z" fill="black"/>
                                    </svg> <span>Management</span></p>
                            <p className='text-gray-500 font-semi-bold text-m '>
                               Lorem ipsum dolor sit amet, consectetur<br></br>
                               adipiscing elit. Volutpat elit enim odio<br></br>
                               Consequat et ipsumsemper tempor massa<br></br>
                               Suspendissemetus eget nec amet. Nisl et sit <br></br> 
                               auctoregestas commodo.Erat ultricies sed <br></br>
                               quam proin nibh vel potenti. Varius varius<br></br>
                               ullamcorper auctor at enim. Lorem ipsum <br></br> 
                               consectetur adipiscing elit.</p>
                               <a href="#" className=" w-full items-left justify-left rounded-md   bg-transparent  text-base font-medium text-blue-500  md:py-2  md:text-lg flex gap-3">EXPLOR OUR SERVICE
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg></a>
                               
                           
                        </ul>
                    </div>
                    </div>
                
               
                

        </section>
    )
}

export default Whatwedo