type textPoint = {
    title?: string;
    text: string;
}
export default function TextPoint(props: textPoint) {
    const {title, text} = props

    return (
        <div className={`my-4`}>
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
            <p className="w-full whitespace-pre-line font-medium text-justify  sm:text-left">
                {text}
            </p>
        </div>
    )
}