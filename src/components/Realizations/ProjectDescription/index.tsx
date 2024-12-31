interface ProjectDescriptionProps {
    title: string
    description: string
}

export default function ProjectDescription(props: ProjectDescriptionProps){
    const {title, description} = props
    return (
        <div className="flex flex-col w-[calc(50%-48px)] md:w-full my-10">
            <h3 className="text-4xl font-bold mb-4">
                {title}
            </h3>
            <p className="">
                {description}
            </p>
        </div>
    )
}