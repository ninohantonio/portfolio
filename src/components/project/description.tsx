import Link from "next/link"

interface props{
    title: string,
    paragraph: string,
    link?: string,
}

const Description: React.FC<props> = ({title, paragraph, link}) => {
    return (
        <div className="basis-[35%] text-white">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {link !== undefined ?<Link href={link} > Lien live : {link}</Link> : ""}
        </div>
    )
}

export default Description