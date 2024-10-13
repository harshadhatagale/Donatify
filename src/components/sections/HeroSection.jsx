import React from 'react'
import {Image} from"next/image"
import {Poppins, Roboto} from "next/font/google"
import Link from 'next/link'
const poppins= Poppins({
  subsets: ['latin'],
  weight: ["100" ,"200", "300", "400", "500","600","700",'800','900']
})
export default function HeroSection() {
  return (
    <div class="text-center flex flex-col space-y-9 justify-center items-center bg-cover bg-center h-[550px]" style={{"backgroundImage":'url("/donation1.jpg")'}}>
      <h2 className={`w-full flex justify-center text-center items-center bg-gradient-to-r from-purple-500 via-pink-600 to-red-700 bg-clip-text text-transparent text-4xl lg:text-6xl font-extrabold ${poppins.className}`}>Make a Difference Today!</h2>
      <p className='text-xl text-white font-medium lg:text-2xl'>Donate your money, old clothes, and unused things to those in need.</p>
      <Link href={"/"} className='bg-green-700 py-3 px-4 font-bold hover:bg-green-400 rounded-lg text-white '>Donate Now</Link>
    </div>
  )
}
