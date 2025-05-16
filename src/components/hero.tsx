'use client'

import Image from "next/image";
import Link from "next/link";
import { BiSolidHand } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import {GiCurlyWing} from "react-icons/gi";
import {IoMdArrowDropright, IoMdHand} from "react-icons/io";


export default function HeroMain(){
    return (
        <div className="w-[100%] h-[100%] flex flex-row items-center justify-center py-20">
            <div className="p-[5%] glass-effect1">
                <div className="text-[3.5em] rainbow-text">Antonino Iraky Ny Avo </div>
                <div className="text-white text-[2em]">👋 Hi there</div>
                <div className="text-white text-[3em] flex z-3 bg-transparent">I m a <div className="px-[15px] souligner"> fullstack</div> developer</div>
                <div className="blur glass-back1"></div>
                <div className="blur glass-back2"></div>
                <div className="blur glass-back3"></div>
                <div className="blur glass-front"></div>
                <div className="flex flex-row items-center justify-start font-mono">
                    <Link href={'#contact'} className="text-white rounded-lg px-[15px] py-[10px] mr-[20px] border-fine">contact me</Link>
                    <Link href={'#'} className="text-white rounded-lg px-[15px] py-[10px] border-fine">download cv</Link>
                </div>
            </div>
            <div className="rounded-[100%] rounded-lg px-6">
                <Image src={"/NinoPhoto.png"} alt="my photo" width={250} height={100} className="rounded-[100%] border-r-blue-600 rounded-b-3xl rounded-t-md pt-2 border-b-fine"></Image>
            </div>
        </div>
    )
}