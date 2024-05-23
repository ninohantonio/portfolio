import Description from "./description";
import ImageProject from "./image";
import TechnoProject from "./techno";

export const AllProjectData = [
    {
        description: {title: ".Miray App", paragraph: "Miray decription", link: "https://elita-devhunt.vercel.app"},
        captures: {image1: "/miray_app/mirayapp.png", image2: "/miray_app/mirayapp2.png", image3: "/miray_app/mirayapp3.png"},
        technology: [
            {logo: "/laravel.png", text: "Laravel"},
            {logo: "/next.svg", text: "NextJS"},
            {logo: "/pgsql.png", text: "PostgreSQL"},
            {logo: "/github.png", text: "Github"},
        ]
    },
    {
        description: {title: ".Dot OO", paragraph: "Dot Zero Zero is an application for spy agent", link: "https://www.youtube.com/watch?v=a_RZjEwPMpU&t=9s"},
        captures: {image1: "/webcup/webcup1.png", image2: "/webcup/webcup2.png", image3: "/webcup/webcup3.png"},
        technology: [
            {logo: "/next.svg", text: "NextJS Server actions"},
            {logo: "/pgsql.png", text: "PostgreSQL"},
            {logo: "/github.png", text: "Github"},
        ]
    },


]

export default function ProjectUnit(){
    return (
        <>
            {
                AllProjectData.map((item, key) => (
                    <div key={key} className="flex flex-col justify-between py-6 px-8 border-l-2 h-80 mt-10 bg-gradient-to-r from-gray-900 to-transparent">
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