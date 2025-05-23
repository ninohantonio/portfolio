'use client'

import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import HeroMain from "@/components/hero";
import MainLogo from "@/components/logo";
import MainResponsiveNavbar from "./navbar";
import ResponsiveHeroMain from "./hero";

export default function MainResponsiveHeader(){
    const [y, setY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');

    const handleScroll = () => {
        if (window.scrollY > y) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        setY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [y]);
    return (
        <div className="h-[100vh]" id="home">
            {/* <MainLogo/> */}
            <motion.nav
                initial={{y: 0}}
                animate={{y: scrollDirection === 'down' ? -100 : '1vh'}}
                transition={{type: 'spring', stiffness: 200}}
                style={{
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: 'transparent',
                    zIndex: 20,
                }}
            >
                <div className={"py-2 relative"}>
                    <div
                        className="h-8 w-[50%] rounded-md blur bg-gradient-conic from-green-500 to-blue-600 absolute center-absolute">

                    </div>
                    <MainResponsiveNavbar/>
                </div>
            </motion.nav>
            <ResponsiveHeroMain/>
        </div>
    )
}