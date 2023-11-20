interface SectionLayoutProps {
    id: string
    children: any
    bgColor?: string
    customClass?: string
}

export default function SectionLayout(props: SectionLayoutProps){
    const {id, children, bgColor, customClass} = props
    return (
        <section className={`${bgColor} ${customClass} bg-no-repeat bg-cover relative w-full flex justify-center`} id={id}>
            <div className="flex w-full max-w-6xl justify-center">
                {children}
            </div>
        </section>
    )
}