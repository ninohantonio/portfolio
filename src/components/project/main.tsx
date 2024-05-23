import SectionTitle from "../tittle_section";
import ProjectUnit from "./project";

export default function MainProject(){
    return (
        <div id="project" className="bg-black px-8 py-8">
            <SectionTitle title="My PROJECT" />
            <ProjectUnit/>
        </div>
    )
}