import React from 'react'
import Button from './Button'

const ContentSection = () => {
  return (
    <div className="z-10 px-4 sm:px-6 lg:px-8">
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

      <p className="text-center text-[13px] sm:text-[16px] lg:text-[18px] font-semibold bg-gray-100 mt-10 mx-auto text-black rounded-lg w-[300px] sm:w-[380px] lg:w-[900px]">
        *Lifetime Access - One-time payment - Instant Access - 100% Risk Free*
      </p>

      <Button />
    </div>
  )
}

export default ContentSection
