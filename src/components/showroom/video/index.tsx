import { useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

export default function ShowRoomVideo(props: {url: string, title: string} ) {
    const { url, title } = props
    const frameRef = useRef<HTMLDivElement>(null)
    const videoWrapperRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        const scrollTrigger = {
            trigger: frameRef.current,
            start: "-60%",
            end: "top top",
            markers: true,
            scrub: 2
        }
        
        const tl = gsap.timeline({ scrollTrigger });
        const tl2 = gsap.timeline({ scrollTrigger });
        
        tl.to(videoWrapperRef.current, {
            width: (frameRef.current?.clientHeight ?? 0) * 0.65,
        });

        tl2.from(textRef.current, {
            scale: 0,
            // width: "0px",
            marginLeft: "0px",
        });
    });

    return (
        <div className="w-full h-screen flex justify-center items-center gradient_mask" ref={frameRef}>
            <div className="h-full max-h-full w-[100%] overflow-hidden flex items-center rounded-b-xl" ref={videoWrapperRef}>
                <video src={url} className="w-full" muted autoPlay playsInline loop/>
            </div>

            <div ref={textRef}>
                <h2 className={`ml-16 text-[max(2.5rem,9vw)] leading-[0.85em] flex-1 coolvetica uppercase  w-full max-w-[512px]`}>
                    {title}
                </h2>
            </div>
        </div>
    )
}