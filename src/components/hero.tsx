import Image from "next/image";
import {GiCurlyWing} from "react-icons/gi";
import {IoMdHand} from "react-icons/io";


export default function HeroMain(){
    return (
        <div className="w-[100%] h-[100%] flex flex-row items-center justify-start py-20">
            <div className="basis-[55%] space-y-16 flex flex-row justify-start mr-20 ml-6">
                <div className={"text-blue-800 basis-[15%] text-[200px] mr-1 pt-10"}>
                    <GiCurlyWing/>
                </div>
                <div className="text-white flex flex-col items-center justify-center text-4xl font-bold mt-28 h-[60vh] mt-20 w-[40vw] pt-20 space-y-2 z-10 bg-gradient-to-r from-gray-700 to-transparent bg-opacity-20 pl-6 rounded-bl-2xl">
                    <div className="">
                        <h1 className="inline"> <span className="text-blue-500">Bienvenue</span> a vous cher</h1>
                        <h1 className="text-yellow-300 inline"> Visiteur</h1>
                        <span className="">,</span><br/>
                    </div>
                    <div>
                        <h1 className="inline text-[#c4e4db]"><span className="text-[#3F51B5]">👋</span>Antonino Iraky Ny Avo</h1> 
                    </div>
                    <h1 className="inline">Developpeur et concepteur de systeme d&apos; informations</h1>
                   
                </div>
                <div className="w-[40vw] h-[30vh] -z-2 bg-white bg-gradient-conic from-gray-700 to-blue-900 blur-lg center-absolute-hero">

                </div>          
                {/* <div className="text-amber-400 text-6xl -ml-60 right-40">
                    👋🏿
                </div> */}
            </div>
            <div className="ml-20 px-10 bg-gradient-to-t from-gray-700 to-transparent mt-20 rounded-b-xl">
                <Image src={"/NinoPhoto.png"} alt={"antoninoPhoto"} width={250} height={250}/>
            </div>
        </div>
    )
}