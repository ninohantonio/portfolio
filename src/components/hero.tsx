import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import {GiCurlyWing} from "react-icons/gi";
import {IoMdArrowDropright, IoMdHand} from "react-icons/io";


export default function HeroMain(){
    return (
        <div className="w-[100%] h-[100%] flex flex-row items-center justify-start py-20 z-1">
            <div className="basis-[55%] space-y-16 flex flex-row justify-start mr-20 ml-6">
                <div className={"text-blue-800 basis-[15%] text-[200px] mr-1 pt-10"}>
                    <GiCurlyWing/>
                </div>
                <div className="text-white flex flex-col items-center justify-start text-4xl font-bold mt-28 mt-20 w-[40vw] py-10 px-6 space-y-8 z-10 bg-gradient-to-r from-gray-700 to-transparent bg-opacity-20 rounded-bl-2xl">
                   <h1>
                       Hey 👋. I&apos;m <span className="text-blue-500">Antonino Iraky Ny Avo. </span>Developer and Information Systems Designer
                   </h1>
                   <p className="font-mono text-lg left-0">
                     I&apos;m here to realize your digital idea 🤗
                   </p>
                   <div className="w-full flex justify-start">
                        <div className="border-2 px-6  py-2 text-lg flex flex-row items-center space-x-4 rounded-lg px-6 hover:border-r-blue-700 hover:border-b-blue-400 hover:border-l-green-500 hover:border-t-blue-950 hover:transition-colors border-fine cursor-pointer">
                            <span>Hire me</span> <FaArrowRight/>
                        </div>
                   </div>
                </div>
                <div className="w-[40vw] h-[30vh] -z-2 bg-white bg-gradient-conic from-gray-700 to-blue-900 blur-lg center-absolute-hero">

                </div>          
                {/* <div className="text-amber-400 text-6xl -ml-60 right-40">
                    👋🏿
                </div> */}
            </div>
            <div className="ml-20 px-10 from-gray-700 to-transparent rounded-b-xl h-full w-full">
                <Image src={"/NinoPhoto.png"} alt={"antoninoPhoto"} width={300} height={300}/>
            </div>
        </div>
    )
}