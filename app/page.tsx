"use client";





import Image from "next/image";
import fourstarimage from "@/public/fourstarimage.png";
import reactlogo1 from "@/public/reactlogo1.png";
import { FaAngleDown } from "react-icons/fa";
import relume from "@/public/relume.png";
import relumefonts from "@/public/relumefonts.png";
import allzakelly from "@/public/allzakelly.png";
import untillknows from "@/public/untillnows.png";
import endtoend from "@/public/endtoend.png";
import one from "@/public/three.jpeg"
import two from "@/public/two.jpeg"
import three from "@/public/one.jpeg"
import guest from "@/public/guest.png"
import { IoMenu } from "react-icons/io5";
import aeroplane from "@/public/aeroplane.png";
import refound from "@/public/refound.png";
import { FaFigma } from "react-icons/fa6";
import { FaWebflow } from "react-icons/fa6";
import memory from "@/public/memory.png";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
  }


  const avatars = [
    {
      id: 1,
      image:one
    },
    {
      id: 2,
      image:two
    },
    {
      id: 3,
      image:three
    },
  ];

  return (
    <div>
      <div className="font-relative bg-[rgba(241,240,238,255)] h-[650px] hover:bg-[rgba(242,239,255,255)]  "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: "none" }} // Hide the default cursor  >
      >
          {isHovering && (
          <Image
            src={guest}
            alt="Custom cursor"
            className="pointer-events-none absolute "
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.05s ease",
            }}
          />
        )}
        <p className="text-white bg-black text-center p-2 text-[12px] md:text-[18px] flex justify-center items-center w-full z-20">
          <Image
            src={reactlogo1}
            alt="reactlogo"
            width={20}
            height={20}
            className="mr-2"
          />
          Export your site to React
          <span className="underline ml-2 cursor-pointer">Try it now</span>
        </p>

        {/* header component*/}

    <div className="hidden md:block">
    <div className="flex justify-between items-center text-xl pt-8 mx-[50px]  ">
          <div className="flex items-center justify-center">
            <Image
              src={relume}
              alt="relume"
              width={40}
              height={40}
              className="mr-2"
            />
            <Image
              src={relumefonts}
              alt="relumefont"
              width={70}
              className="mb-1"
            />
          </div>

          <div className="flex items-center space-x-6 font-sans font-medium  ml-9">
            <p className="flex text   text-baseitems-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl font-relative font-medium tracking-wider  ">
              Products <FaAngleDown />
            </p>
            <p className="flex items-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl font-relative text-base font-medium tracking-wider">
              Community <FaAngleDown />
            </p>
            <p className="flex items-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl font-relative text-base font-medium tracking-wider">
              Pricing
            </p>
            <p className="flex items-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl font-relative text-base font-medium tracking-wider">
              Learn
            </p>
            <p className="flex items-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl font-relative text-base font-medium tracking-wider">
              Contact Sales
            </p>
          </div>

          <div className="flex items-center">
            <p className="flex items-center p-2 hover:bg-[rgba(232,228,243,255)] cursor-pointer hover:rounded-xl mr-2">
              Log in
            </p>

            <button className="px-4 py-2 rounded-xl border border-neutral-600 text-white bg-black font-relative font-semibold tracking-wider transition duration-200">
              Start for free
            </button>
          </div>
        </div>
    </div>



    {/* mobile responsive data */}
    <div className="md:hidden block">
    <div className="flex items-center justify-between mx-3 mt-3 md:hidden ">
           <div className="flex items-center">
           <Image
              src={relume}
              alt="relume"
              width={30}
              height={30}
              className="mr-2"
            />
            <Image
              src={relumefonts}
              alt="relumefont"
              width={70}
              className="mb-1"
            />
           </div>


<div><IoMenu/></div>

          </div>

    </div>

        {/* middle */}
<div>
    
<motion.div
          className="flex justify-between  min-h-[600px] mt-5"
          
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* First section - Images that move right */}
          <motion.div
            animate={isHovered ? { x: 40 } : { x: 0 }}
            
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={allzakelly}
              alt="allzakelly"
              width={200}
              className="ml-3 mb-4 rounded-xl md:block hidden" 
            />

{/* <Image
              src={allzakellymobile}
              alt="allzakelly"
              width={40}
              className=" mb-8 rounded-xl block md:hidden" 
            /> */}
            {/* <Image src={jessica} alt="jessica" width={100} className="mb-5 ml-200 rounded-xl "/> */}
            






<Image
              src={untillknows}
              alt="untillknows"
              width={200}
              className="mb-4 rounded-xl hidden md:block" 
            />


{/* <Image
              src={untillknowmobile}
              alt="untillknows"
              width={40}
              className="mb-16   mr-14 block md:hidden   rounded-xl"
            /> */}



            <Image
              src={endtoend}
              alt="endtoend"
              width={200}
              className="ml-3 hidden md:block rounded-xl"
            />

{/* <Image
              src={endtoendmobile}
              alt="untillknows"
              width={40}
              className="mb-4 rounded-xl block md:hidden" 
            /> */}



          </motion.div>

          {/* Middle section - Information */}

          <motion.div   initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}>

           
          <div >
            <div className="mr-2 mt-2 flex  justify-center rounded-3xl ">
              <div className="flex items-center border-[#e1e0de]  border-2 px-1 md:px-4 py-1 rounded-3xl">
                <div>
                  <span className="text-[10px] ml-6 md:ml-0 md:text-[20px] font-medium rounded-3xl py-1 cursor-pointer">
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                      400k<span className="text-[#6f4af2]">+</span>
                    </span>
                    <span className="text-gray-800 ml-2">
                      Designers & Devs build with Relume
                    </span>
                  </span>
                </div>

                <div className="flex items-center -space-x-2 ml-2">
                  {avatars.map((avatar, index) => (
                    <div
                      key={avatar.id}
                      className="relative inline-block"
                      style={{
                        zIndex: avatars.length - index,
                      }}
                    >
                      <Image
                        src={avatar.image}
                        alt={`Avatar ${avatar.id}`}
                        className="w-3 h-3 md:w-6 md:h-6 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              
            </div>



            <p className="text-8xl tracking-tight font-relative  text-center hidden md:block">
              Website designed &
            </p>

            
            <p className="text-8xl font-relative md:block hidden">built faster with AI</p>
            <p className="   text-2xl mt-12 text-center md:block hidden">
              Use AI as your design ally, not as a replacement. Effortlessly
              generate{" "}
            </p>
            <p className=" text-2xl  text-center md:block hidden">
              sitemaps and wireframes for marketing websites in minutes{" "}
            </p>

       



       {/* this is moboile responsive */}




    
            
          </div>
          </motion.div>

          {/* Third section - Images that move left */}
          <motion.div
            className="relative "
           
            animate={isHovered ? { x: -40 } : { x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* <Image src={mario} alt="mario" width={100} className="mr-16"/> */}
            <Image
              src={aeroplane}
              alt="allzakelly"
              width={200}
              className="mb-4 hidden md:block "
            />
            {/* <Image
              src={aeroplanemobile}
              alt="allzakelly"
              width={40}
              className=" mb-4 rounded-xl block md:hidden" 
            /> */}



            <Image
              src={refound}
              alt="untillknows"
              width={200}
              className="mb-4 hidden  md:block"
            />
            {/* <Image
              src={allzakellymobile}
              alt="allzakelly"
              width={50}
              className=" mb-4 rounded-xl block md:hidden" 
            /> */}
            <Image
              src={memory}
              alt="endtoend"
              width={200}
              className="mr-4 hidden  md:block absolute"
            />
            {/* <Image
              src={allzakellymobile}
              alt="allzakelly"
              width={50}
              className=" mb-4 rounded-xl block md:hidden" 
            /> */}
          </motion.div>
        </motion.div>
</div>









        {/* this is the bottom button component */}
<div className="md:block hidden">
  
<div className="flex items-center ml-12 absolute bottom-14  ">
          <button
            className=" flex px-4 py-1 rounded-md text-lg font-normal font-relative tracking-wide
      bg-[#e0daff] text-[rgb(98,72,255)] 
      hover:bg-[rgb(98,72,255)] hover:text-white 
      transition duration-200"
          >
            <Image
              src={fourstarimage}
              alt="fourstartimage"
              width={30}
              height={30}
              className="text-[rgb(98,72,255)] "
            />
            Shuffle
          </button>

          <button className="border-2  border-[#d0d0ce] text-[#686868] bg-[rgba(241,240,238,255)] flex text-sm justify-center  items-center  rounded-3xl font-relative px-5 py-2 ml-4 ">
            <FaFigma
              className="mr-2
"
            />{" "}
            <FaWebflow className="mr-2" /> | 1,000+ Components{" "}
          </button>
        </div>
</div>
      </div>





  {/* this is related to the laptop version */}
      <div className=" md:flex flex flex-col items-center justify-center pt-8 hover:s bg-[rgba(241,240,238,255)] ">
        <div
          style={{
            background: `
          linear-gradient(white, white) padding-box,
          linear-gradient(to right, #FF5D5D, #6366F1) border-box
        `,
          }}
          className=" flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out  
        border-[6px] border-b-[12px] border-transparent rounded-2xl
        relative p-4  md:w-[950px] 
      "
        >
          <div >
          <input
            type="text"
            placeholder="Describe a company in a sentence or two..."
            className="w-full p-3 text-gray-600  text-lg md:text-2xl placeholder-gray-500 outline-none rounded-3xl cursor-pointer"
          />
          </div>

         <div>
           <button
            className="
          bg-[#6366F1] text-white px-4 py-2 rounded-lg  
          flex items-center gap-2 absolute right-4 
          top-1/2 -translate-y-1/2
         text-2xl cursor-pointer"
          >
            <span className="text-xl">✨</span>
            Generate
          </button>
         </div>
        </div>
      </div>



   
    </div>
  );
}
