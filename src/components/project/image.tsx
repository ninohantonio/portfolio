import Image from "next/image"
import React from "react"

interface props{
    image1: string,
    image2: string,
    image3: string
}


const ImageProject: React.FC<props> = ({image1, image2, image3}) => {
    return (
        <div>
            <Image src={image1} alt="image1" height={100} width={100}/>
            <Image src={image2} alt="image2" height={100} width={100}/>
            <Image src={image3} alt="image3" height={100} width={100}/>
        </div>
    )
}

export default ImageProject