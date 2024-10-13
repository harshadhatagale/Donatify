import React from 'react'
import Link from 'next/link'
import { FcLike } from "react-icons/fc";
import {Poppins, Roboto} from "next/font/google"

const poppins= Poppins({
  subsets: ['latin'],
  weight: ["100" ,"200", "300", "400", "500","600","700",'800','900']
})
const roboto= Roboto({
  subsets: ['latin'],
  weight: ["100" , "300", "400", "500","700",'900']
})
export default function Nav() {
  return (
    <div className='px-5 shadow-md fixed top-0 bg-purple-700 h-16 w-full flex justify-between items-center'>
      <Link href={"/"} className='flex space-x-2 justify-center items-center text-2xl text-white font-bold'>
        <FcLike /> <span className={`${poppins.className}`}>Donatify</span>
      </Link>
      <div className={`${roboto.className} mx-5`}>
        <ul className='lg:flex hidden justify-center items-center space-x-3 text-md font-semibold text-white'>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>About us</Link></li>
          <li><Link href={"/"}>Donations</Link></li>
          <li><Link href={"/"}>How it works</Link></li>
          <li><Link href={"/contact"}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}
