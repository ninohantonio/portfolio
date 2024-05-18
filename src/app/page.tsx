'use client'
import Image from "next/image";
import MainHeader from "@/components/header";
import MainAbout from "@/components/about/main";

export default function Home() {
  return (
    <main className={"bg-gradient-to-bl from-[#262642] to-black h-[100vh] w-[100vw]"}>
      <MainHeader/>
      <MainAbout/>
    </main>
  );
}
