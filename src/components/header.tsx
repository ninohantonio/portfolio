'use client'

import MainNavbar from "@/components/navbar";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import HeroMain from "@/components/hero";
import MainLogo from "./logo";

export default function MainHeader(){
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
        <div className="h-[100vh]">
            <MainLogo/>
            <motion.nav
                initial={{y: '88vh'}}
                animate={{y: scrollDirection === 'down' ? 0 : '88vh'}}
                transition={{type: 'spring', stiffness: 200}}
                style={{
                    position: 'fixed',
                    width: '100%',
                    backgroundColor: 'transparent',
                    zIndex: 20
                }}
            >
                <div className={"py-2 relative"}>
                    <div
                        className="h-8 w-[50vw] rounded-md blur bg-gradient-conic from-green-500 to-blue-600 absolute center-absolute">

                    </div>
                    <MainNavbar/>
                </div>
            </motion.nav>
            <HeroMain/>
        </div>
    )
}