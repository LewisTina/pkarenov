interface BlockListingProps {
    title: string
    list: string[]
}

export default function BlockListing(props: BlockListingProps){
    const {title, list} = props
    return (
        <div className="w-1/2 lg:w-full my-8">
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="border-l-[1px] border-gray/50 pl-8 pr-4 my-4">
                {
                    list.map((item: string, idx: number) => {
                        return (
                            <span className="block leading-10" key={idx}>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}