import { useState } from "react";
import AboutCard from "./card";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../tittle_section";

export const AboutCardItems = [
    {title: "Academic journey", content: "2023-2024: third year in a Bachelor's degree in General Computer Science at ENI Fianarantsoa Madagascar"},
    {title: "High School Diploma", content: "2019 : Obtained a high school diploma in the general education series C at Arcade High School."},
    {title: "Passion", content: "I am passionate about the world of digital development, particularly Java and Kotlin technologies for mobile. I would love to work with you on new innovative ideas."},
    {title: "Objective", content: "My objective is to become a competent engineer and bring innovation to the digital world. I plan to delve deeper into artificial intelligence and robotics in the future."},
]

export default function LeftAbout() {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="h-full bg-black w-full flex flex-col justify-center items-center" id="about">
            <SectionTitle title="ABOUT ME"/>
            <div className="flex flex-wrap justify-center items-center w-[90%] h-[85%] py-[5%]">
                {
                    AboutCardItems.map((item, key) => (
                        <div 
                            className="relative group block p-2 h-[50%] w-[40%]"
                            key={key}
                            onMouseEnter={() => setHoveredIndex(key)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === key && (
                                    <motion.span
                                        className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-900 t0-blue-700 dark:bg-slate-800/[0.8] blur-sm block rounded-lg"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0}}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <AboutCard title={item.title} content={item.content}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}