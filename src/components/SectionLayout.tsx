interface SectionLayoutProps {
    id: string
    children: any
    bgColor?: string
}

export default function SectionLayout(props: SectionLayoutProps){
    const {id, children, bgColor} = props
    return (
        <section className={`${bgColor} w-full flex justify-center my-5`} id={id}>
            <div className="flex w-full max-w-6xl justify-center">
                {children}
            </div>
        </section>
    )
}