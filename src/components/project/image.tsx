import { AnimatePresence, motion } from "framer-motion"
import { hidden } from "next/dist/lib/picocolors"
import Image from "next/image"
import React, { useState } from "react"


interface props{
    image1: string,
    image2: string,
    image3: string
}


const ImageProject: React.FC<props> = ({image1, image2, image3}) => {
    const [selectedId, setSelectedId] = useState("")
    const ImageItems = [
        {src: image1, id: image1},
        {src: image2, id: image2},
        {src: image3, id: image3}
    ]

    return (
        <div className="relative basis-[65%] flex flex-row justify-center">
            {/* {ImageItems.map(item => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <Image src={item.src} alt={item.src} width={100} height={100}/>
                </motion.div>
            ))} */}
            <motion.div
                className="w-80 h-40 absolute top-6"
                whileHover={{ 
                    scale: 1.5, 
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            >
                <Image src={image1} alt={image1} width={300} height={100} className=""/>
            </motion.div>
            <motion.div
                className="w-80 h-40"
                whileHover={{ scale: 1.5 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            >
                 <Image src={image2} alt={image2} width={300} height={100} className=""/>
            </motion.div>
            <motion.div
                className="w-80 h-40"
                whileHover={{ 
                    scale: 1.5, 

                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            >
                 <Image src={image3} alt={image3} width={300} height={100} className=""/>
            </motion.div>
            {/* <Image src={image2} alt={image2} width={300} height={100} className=""/>
            <Image src={image3} alt={image3} width={300} height={100} className=""/> */}
        </div>
    )
}

export default ImageProject