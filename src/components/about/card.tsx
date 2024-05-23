import React from 'react'

interface CardProps {
    title: string,
    content: string,
    image?: string,
}

const AboutCard: React.FC<CardProps> = ({title, content, image}) => {
    return (
        <div className='flex flex-col justify-center w-[100%] h-[100%] rounded-lg text-white bg-gray-700 bg-opacity-20 text-black z-20 relative bg-transparent space-x-2 py-1 rounded-lg px-6 hover:border-r-blue-700 hover:border-b-blue-400 hover:border-l-green-500 hover:border-t-blue-950 hover:transition-colors border-fine'>
            <div className='text-lg font-bold text-[#c4e4db]'>
                {title}
            </div>
            <div className='text-md font-mono'>
                {content}
            </div>
            <div>
                {image}
            </div>
        </div>
    )
}

export default AboutCard