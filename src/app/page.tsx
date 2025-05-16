'use client'
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css"
import MainHeader from "@/components/header";
import MainAbout from "@/components/about/main";
import MainSkills from "@/components/skills/main";
import MainProject from "@/components/project/main";
import MainContact from "@/components/contact/main";
import MainResponsiveHeader from "@/responsive/header";

export default function Home() {
  return (
    <main className={"bg-gradient-to-bl from-[#0b061e] to-black h-[100vh] w-[100vw]"}>
      <MainHeader/>
      <MainAbout/>
      <MainSkills/>
      <MainProject/>
      <MainContact/>
    </main>
    // <main className="bg-gradient-to-bl from-[#262642] to-black h-[100vh]">
    //   <MainResponsiveHeader/>
    //   <MainAbout/>
    // </main>
  );
}
