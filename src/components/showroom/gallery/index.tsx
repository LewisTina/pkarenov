import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image"
import gsap from 'gsap';

const ANGLE = 54;

export default function ShowRoomImages(props: {folder: __WebpackModuleApi.RequireContext, frameRef: React.RefObject<HTMLDivElement>}) {
    const { folder, frameRef } = props
    const imgWrapRef = useRef<HTMLDivElement>(null)

    const imageList = useMemo(() => !!folder ? folder.keys().map((image: any) => folder(image)) : [], [folder]);
    const imageCount = imageList.length;

    const rotateGap = ANGLE / (imageList.length);
    const [ rotate, seRotate ] = useState<number[]>(Array.from(new Array(imageCount), (_el, _index) => (0)));
    const imageRefs : React.RefObject<HTMLDivElement>[] = useMemo(() => (
        Array.from(new Array(imageCount), (_el, _index) => 
            createRef<HTMLDivElement>()
        )
    ), [imageCount])

    useEffect(() => {
        const minRotate = -(ANGLE / 2);
        for (let i = 0; i < imageCount; i++) {
            seRotate((prev) => {
                return prev.map((el, index) => {
                    return minRotate + (rotateGap * index)
                })
            })
        }
    }, [imageCount, imageList, rotateGap])

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: imgWrapRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: true,
            markers: true,
        });

        const scrollTrigger = {
            trigger: frameRef.current,
            start: "top top",
            end: "30%",
            markers: true,
            scrub: true
        }

        const scrollTrigger2 = {
            trigger: imgWrapRef.current,
            start: "-350vh",
            end: "+=50%",
            markers: true,
            scrub: true,
        }
    
        const tl = gsap.timeline({ scrollTrigger });
        const tl2 = gsap.timeline({ scrollTrigger: scrollTrigger2 });
        const tl3 = gsap.timeline({ scrollTrigger: scrollTrigger2 });
        const tl4 = gsap.timeline({ scrollTrigger: scrollTrigger2 });
    
        tl.to(imageRefs.map((e) => e.current), {
            rotate: 0,
            borderRadius: '0%',
        });
    
        tl2.to(imgWrapRef.current, {
            aspectRatio: 'auto',
            height: '100vh',
            maxHeight: '100vh',
            justifyContent: 'flex-start',
            width: '100vw',
            margin: 0,
        });

        tl3.to(imageRefs.slice(1).map((e) => e.current), {
            flex: 'none',
            width: `${40 / (imageCount - 1)}%`,
        })

        tl4.to(imageRefs[0].current, {
            width: '60vw',
            mawWidth: '60vw',
            height: '100vh',
            overflow: 'hidden',
            flex: "none",
        })
      });
    return (
        <div className="w-[110%] h-fit max-h-screen mx-[-5%] flex items-start justify-center gap-8 my-32" style={{aspectRatio: imageCount - 1}} ref={imgWrapRef}>
            {
                imageList.map((image: any, index: number) => {
                    return (
                        <div 
                            ref={imageRefs[index]}
                            className={`h-full max-h-full w-fit flex flex-none pointer-events-none select-none rounded-[2%] overflow-hidden`}
                            style={{transform: `rotate(${rotate[index]}deg)`}}
                            key={index}>
                            <Image 
                                className="w-auto h-full max-w-[100%] max-h-[100%] object-cover"
                                src={image.default}
                                height={5000}
                                width={5000}
                                alt={"Cuisine intérieure moderne"}/>
                        </div>
                    )
                })
            }
        </div>
    )
}