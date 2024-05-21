import Image from "next/image";

export const skillsItems = [
    {prefix: "BACK-", postfix: "END", skills: [
        {logo: "/laravel.png", alt: "laravel", text: "Laravel"},
        {logo: "/nodejs.png", alt: "nodejs", text: "NodeJS"},
        {logo: "/springboot.png", alt: "springboot", text: "SpringBoot"},
    ]},
    {prefix: "FRONT-", postfix: "END", skills: [
        {logo: "/typescript.png", alt: "typescript", text: "TypeScript"},
        {logo: "/javascript.png", alt: "javascript", text: "JavaScript"},
        {logo: "/reactjs.png", alt: "reactjs", text: "ReactJS"},
        {logo: "/next.svg", alt: "nextjs", text: "NextJs"},
    ]},

]

export const skillsItems2 = [
    {prefix: "DATA", postfix: "BASE", skills: [
        {logo: "/mysql.png", alt: "mysql", text: "MySQL"},
        {logo: "/pgsql.png", alt: "pgsql", text: "PostgresQL"},
        {logo: "/oracle.png", alt: "oracle", text: "ORACLE db"},
        {logo: "/mogodb.png", alt: "mongodb", text: "Mongo db"},
    ]},
    {prefix: "CI/CD and versioning", postfix: "Tools", skills: [
        {logo: "/github.png", alt: "github", text: "GitHub"},
        {logo: "/docker.png", alt: "docker", text: "Docker"},
    ]},
]

export const skillsItems3 = [
    {prefix: "MOBILE-", postfix: "DEV", skills: [
        {logo: "/kotlin.png", alt: "kotlin", text: "Kotlin"},
        {logo: "/android.jpeg", alt: "compose", text: "Android Compose"},
    ]},
    
]

export const skillsItems4 = [
    {prefix: "DEVELOPEMENT-", postfix: "Tools", skills: [
        {logo: "/intellij.png", alt: "intellij", text: "IntellijU"},
        {logo: "/phpstorm.png", alt: "phpstorm", text: "PHP Storm"},
        {logo: "/webstorm.jpeg", alt: "webstorm", text: "WebStorm"},
        {logo: "/vscode.jpeg", alt: "vscode", text: "Visual Studio Code"},
        {logo: "/androidstudio.png", alt: "androidstudio", text: "Android Studio"},
    ]},
]

export default function SkillsContainer(){
    return (
        <>
            <div className="w-full flex flex-row justify-start items center py-10 px-10" id="skills">
                {
                    skillsItems.map((item, key) => (
                        <div key={key} className="px-4 mr-8">
                            <span className="text-2xl font-mono text-gray-300">{item.prefix}</span><span className="text-2xl font-mono text-blue-400 ">{item.postfix}</span>
                            <div className="flex flex-row space-x-1">
                            {
                                item.skills?.map((item, key) => (
                                        <div className="flex flex-row items-center space-x-2 px-4 bg-gradient-to-r from-gray-800 to-transparent py-2 px-2 rounded-sm border-fine" key={key}>
                                            <Image src={item.logo} alt={item.alt} width={35} height={35}/>
                                            <span className="text-[#c4e4db]">{item.text}</span>
                                        </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex flex-row justify-start items center py-10 px-10">
                {
                    skillsItems2.map((item, key) => (
                        <div key={key} className="px-4 mr-8">
                            <span className="text-2xl font-mono text-gray-300">{item.prefix}</span><span className="text-2xl font-mono text-blue-400 ">{item.postfix}</span>
                            <div className="flex flex-row space-x-1">
                            {
                                item.skills?.map((item, key) => (
                                        <div className="flex flex-row items-center space-x-2 px-4 bg-gradient-to-r from-gray-800 to-transparent py-2 px-2 rounded-sm border-fine" key={key}> 
                                            <Image src={item.logo} alt={item.alt} width={35} height={35}/>
                                            <span className="text-[#c4e4db]">{item.text}</span>
                                        </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex flex-row justify-start items center py-10 px-10">
                {
                    skillsItems3.map((item, key) => (
                        <div key={key} className="px-4 mr-8">
                            <span className="text-2xl font-mono text-gray-300">{item.prefix}</span><span className="text-2xl font-mono text-blue-400 ">{item.postfix}</span>
                            <div className="flex flex-row space-x-1">
                            {
                                item.skills?.map((item, key) => (
                                        <div className="flex flex-row items-center space-x-2 px-4 bg-gradient-to-r from-gray-800 to-transparent py-2 px-2 rounded-sm border-fine" key={key}>
                                            <Image src={item.logo} alt={item.alt} width={35} height={35}/>
                                            <span className="text-[#c4e4db]">{item.text}</span>
                                        </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex flex-row justify-start items center py-10 px-10">
                {
                    skillsItems4.map((item, key) => (
                        <div key={key} className="px-4 mr-8">
                            <span className="text-2xl font-mono text-gray-300">{item.prefix}</span><span className="text-2xl font-mono text-blue-400 ">{item.postfix}</span>
                            <div className="flex flex-row space-x-1">
                            {
                                item.skills?.map((item, key) => (
                                        <div className="flex flex-row items-center space-x-2 px-4 bg-gradient-to-r from-gray-800 to-transparent py-2 px-2 rounded-sm border-fine" key={key}>
                                            <Image src={item.logo} alt={item.alt} width={35} height={35}/>
                                            <span className="text-[#c4e4db]">{item.text}</span>
                                        </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>


        </>
    )
}