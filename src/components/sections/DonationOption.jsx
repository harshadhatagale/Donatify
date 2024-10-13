import React from 'react'
import {FaToolbox} from "react-icons/fa"
import { FaMoneyBillAlt } from "react-icons/fa";
import Link from 'next/link';
import { GiClothes } from "react-icons/gi";
export default function DonationOption() {
    return (
        <div className='py-5 px-8'>
            <h2 className='text-4xl font-bold'>Ways to Make an Impact</h2>
            <div className='flex-col lg:flex-row flex my-3 justify-around items-center space-x-4'>
                <div className='shadow-lg py-3 px-4 w-60 h-[340px] rounded-md my-4 bg-purple-700'>
                    <div className='w-full flex justify-center items-center'>
                        <FaMoneyBillAlt size={150} color='white' />
                    </div>
                    <div className='text-md font-semibold text-gray-300 h-1/3'>
                        Your generous donations help us support those in need. Even a small amount makes a big difference.
                    </div>
                    <div className='py-3 flex w-full justify-center items-center'>
                        <Link href={"/"} className='font-bold bg-green-500 rounded-md text-white px-5 py-2'>Donate Money</Link>
                    </div>
                </div>
                <div className='shadow-lg py-3 px-4 w-60 h-[340px] rounded-md my-4 bg-purple-700'>
                    <div className='w-full flex justify-center items-center'>
                        <GiClothes size={150} color='white' />
                    </div>
                    <div className='text-md font-semibold text-gray-300 h-1/3'>
                    Got clothes you no longer wear? Share the warmth by donating your old clothes.
                    </div>
                    <div className='py-3 flex w-full justify-center items-center'>
                        <Link href={"/"} className='font-bold bg-green-500 rounded-md text-white px-5 py-2'>Donate Clothes</Link>
                    </div>
                </div>
                <div className='shadow-lg py-3 px-4 w-60 h-[340px] rounded-md my-4 bg-purple-700'>
                    <div className='w-full flex justify-center items-center'>
                        <FaToolbox size={150} color='white' />
                    </div>
                    <div className='text-md font-semibold text-gray-300 h-1/3'>
                    Your old belongings can be new treasures for others. Donate your unused items.
                    </div>
                    <div className='py-3 flex w-full justify-center items-center'>
                        <Link href={"/"} className='font-bold bg-green-500 rounded-md text-white px-5 py-2'>Donate Old Things</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
