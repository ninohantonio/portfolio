import SectionTitle from "../tittle_section";
import ContactForm from "./form";

export default function MainContact(){
    return (
        <div className="w-full h-[100%] bg-black py-8" id="contact">
            <SectionTitle title="CONTACT ME"/>
            <ContactForm/>
        </div>
    )
}