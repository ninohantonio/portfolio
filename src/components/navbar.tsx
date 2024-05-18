'use client'


import Link from "next/link";
import {RxAvatar} from "react-icons/rx";
import {IoHomeOutline} from "react-icons/io5";
import {MdDeveloperMode, MdOutlineAndroid, MdPhoneAndroid} from "react-icons/md";
import {blue} from "next/dist/lib/picocolors";
import {useEffect} from "react";

export const navBarElement = [
    {text: "HOME", icon: <IoHomeOutline/>, redirection: "#"},
    {text: "ABOUT", icon: <RxAvatar/>, redirection: "#"},
    {text: "SKILLS", icon: <MdDeveloperMode/>, redirection: "#"},
    {text: "PROJECT", icon: <MdOutlineAndroid/>, redirection: "#"},
    {text: "CONTACT", icon: <MdPhoneAndroid/>, redirection: "#"},
]

export default function MainNavbar(){
    return (
        <div className="w-[65vw] h-14 mx-auto bg-gray-600 bg-opacity-30 backdrop-blur-lg border-r-blue-600 rounded-b-3xl rounded-t-md pt-2 border-b-fine">
            <div className="flex flex-row justify-center items-center space-x-4 navbar-element">
                {
                    navBarElement.map((item, key) => (
                        <div key={key}>
                            <Link href={item.redirection} className={" text-white flex flex-row z-10 items-center bg-transparent space-x-2 py-1 rounded-lg px-6 hover:border-r-blue-700 hover:border-b-blue-400 hover:border-l-green-500 hover:border-t-blue-950 hover:transition-colors hover:z-50 border-fine "}>
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}