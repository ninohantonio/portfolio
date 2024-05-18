import { GiCurlyWing } from "react-icons/gi";

export default function MainLogo(){
    return (
        <div className="flex flex-row items-center justify-center h-14 w-14 bg-gray-700 rounded-full absolute right-3 top-2 text-xl text-white">
            <span><GiCurlyWing/></span><span>A</span>
        </div>
    )
}