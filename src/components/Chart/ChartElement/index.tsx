interface ChartElementProps {
    title: string
    counter: string
    description: string
}

export default function ChartElement(props: ChartElementProps){
    const {title, counter, description} = props
    return (
        <div className="flex flex-col mr-auto md:mr-0 md:items-center pt-16">
            <span className="block text-dark-gray text-xl">{title}</span>
            <span className="block text-primary text-8xl">{counter}</span>
            <span className="block text-primary text-xl">{description}</span>
        </div>
    )
}