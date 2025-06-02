import React from 'react'
import { Bot, ChevronRight } from "lucide-react";
import Image from 'next/image';
function Hero() {
    return (
        <div className='w-full h-[90vh] px-5 lg:flex lg:justify-between lg:items-center flex justify-center items-center bg-gradient-to-t from-[#020024] via-[#4B0979] to-[#160393]'>
            <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
                <h1 className='text-white text-4xl font-bold'>Enterprise AI Agents
                    for the Future</h1>
                <p className='text-white'>The best place to find your next agent</p>
                <div className='flex gap-5'>
                    <button className='bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md flex items-center justify-center'>Deploy your Agent <ChevronRight /></button>
                    <button className='border-2 border-gray-900 text-white hover:border-gray-600 px-4 py-2 rounded-md'>Watch Demo</button>
                </div>
            </div>
            <div className='w-1/2  flex flex-col justify-center items-center'>
                {/* <Bot size={60} className="mr-2 text-white " /> */}
                <Image src="/chat-bot.svg" alt="hero" width={400} height={400} />
            </div>
        </div>
    )
}

export default Hero