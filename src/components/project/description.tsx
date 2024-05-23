import Link from "next/link"

interface props{
    title: string,
    paragraph: string,
    link?: string,
}

const Description: React.FC<props> = ({title, paragraph, link}) => {
    return (
        <div className="basis-[35%] text-white py-6">
            <h1 className="text-[#c4e4db] text-xl font-bold">{title}</h1>
            <p className="px-4 font-mono text-sm py-4">{paragraph}</p>
            {link !== undefined ?<Link href={link} target="_blank" className="font-mono py-4 text-sm"> <span className="text-blue-700">Lien live : </span> {link}</Link> : ""}
        </div>
    )
}

export default Description