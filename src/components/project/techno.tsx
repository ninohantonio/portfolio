import Image from "next/image"
import React from "react"

interface props{
    logo: string,
    text: string
}


const TechnoProject: React.FC<props> = ({logo, text}) => {
    return (
        <div className="flex flex-row items-center space-x-2 px-4 bg-gradient-to-r from-gray-800 to-transparent py-2 px-2 rounded-sm border-fine">
            <Image src={logo} alt={text} width={35} height={35}/>
            <span className="text-[#c4e4db]">{text}</span>
        </div>
    )
}

export default TechnoProject