import { useRef } from "react";
import Description from "./description";
import ImageProject from "./image";
import TechnoProject from "./techno";
import { useScroll, useTransform, motion } from "framer-motion";

export const AllProjectData = [
    {
        description: {title: ".Miray App", paragraph: "Miray app is a platform that helps and assists novices in their integration into the National School of Informatics, guiding them from the beginning to success.", link: "https://elita-devhunt.vercel.app"},
        captures: {image1: "/miray_app/mirayapp.png", image2: "/miray_app/mirayapp2.png", image3: "/miray_app/mirayapp3.png"},
        technology: [
            {logo: "/laravel.png", text: "Laravel"},
            {logo: "/next.svg", text: "NextJS"},
            {logo: "/pgsql.png", text: "PostgreSQL"},
            {logo: "/github.png", text: "Github"},
        ]
    },
    {
        description: {title: ".Dot OO", paragraph: "An online access platform for Agent Double Zero's missions to get an overview of their tasks.", link: "https://www.youtube.com/watch?v=a_RZjEwPMpU&t=9s"},
        captures: {image1: "/webcup/webcup1.png", image2: "/webcup/webcup2.png", image3: "/webcup/webcup3.png"},
        technology: [
            {logo: "/next.svg", text: "NextJS Server actions"},
            {logo: "/pgsql.png", text: "PostgreSQL"},
            {logo: "/github.png", text: "Github"},
        ]
    },
    {
        description: {title: "Ferme Data", paragraph: "Farm Data is a web application in development that helps farmers manage agricultural production (cattle, pigs, etc.).", link: "https://github.com/ninohantonio/ihm-api"},
        captures: {image1: "/fermedata/ferme1.png", image2: "/fermedata/ferme2.png", image3: "/fermedata/ferme3.png"},
        technology: [
            {logo: "/springboot.png", text: "SpringBoot"},
            {logo: "/reactjs.png", text: "ReactJS"},
            {logo: "/mysql.png", text: "MySQL"},
            {logo: "/github.png", text: "Github"},
        ]
    },

]

export default function ProjectUnit(){
    return (
        <>
            {
                AllProjectData.map((item, key) => (
                    <div key={key} className="flex flex-col relative justify-between py-6 px-8 border-l-2 h-80 mt-10 bg-gradient-to-r from-transparent to-blue-950">
                        <motion.span
                            className="absolute w-10 h-10 bg-gradient-t-r from-gray-950 to-transparent border-4 rounded-full border-r-blue-700 border-b-blue-400 border-l-green-500 border-t-blue-950 -left-5 -top-2"
                        ></motion.span>
                        <div className="flex flex-row items-center justify-around space-x-4">
                            <Description title={item.description.title} paragraph={item.description.paragraph} link={item.description.link}/>
                            <ImageProject image1={item.captures.image1} image2={item.captures.image2} image3={item.captures.image3}/> 
                        </div>
                        <div className="flex space-x-1">
                            {
                                item.technology.map((item, key) =>(
                                    <TechnoProject logo={item.logo} text={item.text} key={key} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}