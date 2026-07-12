import { ArrowLeftToLine, ArrowRightToLine, Maximize2, Plus } from 'lucide-react'
import React, { useState } from 'react'
import HeroMiddleSection from './HeroMiddleSection'

const HeroSectionSIdeNavbar = () => {
    const [leftOpen, setLeftOpen] = useState(true)
    const [rightOpen, setRightOpen] = useState(false)
  return (
    <>
  <div className="h-screen flex flex-col">

    <div className="flex-1 flex gap-3 p-2 overflow-hidden">

      {leftOpen ? (
        <div  className="w-[267px] bg-[#121212] rounded-[10px] p-2">
        <div className="flex justify-between">
          <ArrowRightToLine className="p-0.5" onClick={()=> setLeftOpen(false)} />

          <div className="flex gap-3">
            <Plus className="bg-gray-400 rounded-full p-0.5" />
            <Maximize2 className="hover:bg-gray-700 rounded-full p-1" />
          </div>
        </div>
      </div>
      ) : 
      (
        <div  className='flex flex-col gap-2 items-center  w-18 bg-[#121212] rounded-[10px] p-2'>
          <ArrowLeftToLine onClick={()=> setLeftOpen(true)} className="p-0.5" />
            <Plus className="bg-gray-400 rounded-full p-0.5" />
        </div>
      )
        
      }

      {/* Main Content */}
      <div className="flex-1 bg-[#121212] rounded-[10px] ">
        <>
        <HeroMiddleSection />
        </>
      </div>

      {/* Right Sidebar */}
      {rightOpen ? (
        <div  className="w-[267px] bg-[#121212] rounded-[10px] p-2">
        <div className="flex justify-between">
          <ArrowRightToLine onClick={()=> setRightOpen(false)} className="p-0.5" />

          <div className="flex gap-3">
            <Plus className="bg-gray-400 rounded-full p-0.5" />
            <Maximize2 className="hover:bg-gray-700 rounded-full p-1" />
          </div>
        </div>
      </div>
      ) : 
      (
        <div  className='flex flex-col  gap-2 items-center  w-18 bg-[#121212] rounded-[10px] p-2'>
          <ArrowLeftToLine onClick={()=> setRightOpen(true)} className="p-0.5" />
            <Plus className="bg-gray-400 rounded-full p-0.5" />
        </div>
      )
      }
    </div>

    {/* Bottom Player */}
    <div className="h-11 shrink-0 bg-amber-300">
      Bottom Player
    </div>

  </div>
</>
  )
}

export default HeroSectionSIdeNavbar    