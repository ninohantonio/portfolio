'use client'


import Link from "next/link";
import {RxAvatar} from "react-icons/rx";
import {IoHomeOutline} from "react-icons/io5";
import {MdDeveloperMode, MdOutlineAndroid, MdPhoneAndroid} from "react-icons/md";
import {blue} from "next/dist/lib/picocolors";
import {useEffect} from "react";

export const navBarElement = [
    {text: "HOME", icon: <IoHomeOutline/>, redirection: "#home"},
    {text: "ABOUT", icon: <RxAvatar/>, redirection: "#about"},
    {text: "SKILLS", icon: <MdDeveloperMode/>, redirection: "#skills"},
    {text: "PROJECT", icon: <MdOutlineAndroid/>, redirection: "#project"},
    {text: "CONTACT", icon: <MdPhoneAndroid/>, redirection: "#contact"},
]

export default function MainResponsiveNavbar(){
    return (
        <div className="w-[95%] h-12 mx-auto bg-gray-600 bg-opacity-30 backdrop-blur-lg border-r-blue-600 rounded-b-3xl rounded-t-md pt-2 border-b-fine">
            <div className="flex flex-row justify-center items-center space-x-2 navbar-responsive-element">
                {
                    navBarElement.map((item, key) => (
                        <div key={key}>
                            <Link href={item.redirection} className={"text-white px-4 flex flex-col items-center justify-center bg-transparent space-x-2 py-1 rounded-lg hover:border-r-blue-700 hover:border-b-blue-400 hover:border-l-green-500 hover:border-t-blue-950 hover:transition-colors border-fine "}>
                                <div className="flex flex-col justify-center items-center">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}