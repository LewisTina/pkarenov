import Link from "next/link";


export default function VideoPresentation(props: {videosUrl: string, projectId: string}){
    const {videosUrl, projectId} = props
    
    return(
        <Link className="w-1/2 md:w-full aspect-[9/14] overflow-hidden flex items-center rounded-xl"  href={"/showroom/" + projectId}>
            <video src={videosUrl} muted autoPlay playsInline loop/>
        </Link>
    )
}