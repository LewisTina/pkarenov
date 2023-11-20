import { useEffect, useRef } from "react";


export default function VideoPresentation(props: {videosUrl: string}){
    const {videosUrl} = props
    
    return(
        <div className="w-1/2 md:w-full aspect-[9/14] overflow-hidden flex items-center rounded-xl pointer-events-none">
            <video /* ref={videoRef} */ src={videosUrl} muted autoPlay playsInline loop>
            </video>
        </div>
    )
}