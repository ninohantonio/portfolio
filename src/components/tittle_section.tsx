interface props{
    title: string
}

const SectionTitle: React.FC<props> = ({title}) => {
    return(
        <div className="flex items-center justify-center bg-transparent">
            <h1 className="text-5xl font-bold rainbow-text">
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle