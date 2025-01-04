import React from 'react'
import Button from './Button'
import CountdownTimer from './Timer';

const ContentSection = () => {
  return (
    <div className="z-10 px-4 sm:px-6 lg:px-8">
       <CountdownTimer/>
      <p className="text-center font-semibold pt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] mx-auto max-w-3xl">
        Are you a passionate Video Editor from Pakistan? Or aspiring to become one? Then you're at the right place. Introducing:
      </p>

      <h1 className="text-center font-extrabold font-sans mt-2 leading-[1.1] text-[33px] sm:text-[45px] lg:text-[85px] mx-auto w-full max-w-[1200px]">
        <span className="text-white mx-3">World's</span>
        <span className="text-red-500 mx-2">Biggest</span>
        <span className="text-yellow-400">Video Editing Bundle!</span>
      </h1>

      <p className="text-center pt-5 font-semibold text-[16px] sm:text-[18px] lg:text-[23px] mx-auto max-w-3xl capitalize">
        Get over 70 GB of video editing assets, including transitions, overlays, fonts, LUTs, FX, premade templates, and premium software like Premiere Pro, After Effects, and six additional Adobe products. On top of that, get a full-fledged video editing course to get you started.
      </p>

    <div className="bg-yellow-100 text-black text-center font-bold rounded-lg py-2 px-4 mt-6 mx-auto w-[clamp(300px, 60%, 900px)]">
        <span className="text-red-500">Limited-Time Offer:</span> ₨599 Only! 
        <span className="line-through text-gray-500 ml-2">₨3000+</span> <span className="text-green-500">Save 80%!</span>
      </div>

      <Button />
    </div>
  )
}

export default ContentSection
