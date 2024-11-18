import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap';
import Image from 'next/image'

const pkarenov = ["p", "k", "a", "r", "e", "n", "o", "v"]

export default function ParallaxLogoAnimation(props: { frame: HTMLElement }) {
    const { frame } = props
    const p = useRef<HTMLImageElement>(null)
    const k = useRef<HTMLImageElement>(null)
    const a = useRef<HTMLImageElement>(null)
    const r = useRef<HTMLImageElement>(null)
    const e = useRef<HTMLImageElement>(null)
    const n = useRef<HTMLImageElement>(null)
    const o = useRef<HTMLImageElement>(null)
    const v = useRef<HTMLImageElement>(null)

    const i = useRef<HTMLImageElement>(null)

    const refArray = [p, k, a, r, e, n, o, v]

    useGSAP(() => {
        const scrollTrigger = {
            trigger: frame,
            start: "30%",
            end: "bottom bottom",
            scrub: 1,
            markers: true
        }
  
        const tl = gsap.timeline({ scrollTrigger });
        const tl2 = gsap.timeline({ scrollTrigger });
        const tl3 = gsap.timeline({ scrollTrigger });
        const tl4 = gsap.timeline({ scrollTrigger });
        const tl5 = gsap.timeline({ scrollTrigger });
        const tl6 = gsap.timeline({ scrollTrigger });

        tl.to(p.current, { 
            y: "1250%", 
            x: "1250%", 
        });

        tl2.to(k.current, { 
            y: "1250%", 
            x: "1600%", 
        });
        tl.to(a.current, { 
            y: "1250%", 
            x: "980%", 
        });

        tl3.to(r.current, { 
            y: "1380%", 
            x: "700%", 
        });

        tl.to(e.current, { 
            y: "1380%", 
            x: "870%", 
        });

        tl4.to(n.current, { 
            y: "1380%", 
            x: "600%", 
        });

        tl5.to(o.current, { 
            y: "1510%", 
            x: "390%", 
        });

        tl.to(v.current, { 
            y: "1510%", 
            x: "480%", 
        });

        tl6.fromTo(i.current, {
            opacity: 0,
        }, {
            opacity: 1,
            y: "1380%", 
            x: "970%", 
        }, 0.5);

    });

    return (
        <div className="flex gap-2 my-5">
        {
            pkarenov.map((letter) => {
                return (
                    <Image 
                        src={`/split_pka/${letter}.svg`} 
                        alt={`logo pka text ${letter}`}
                        className='w-auto h-20'
                        height={500}
                        width={500}
                        ref={refArray[pkarenov.indexOf(letter)]}
                        key={letter}/>
                )
            })
        }

        <Image 
            src={`/logo_pka.svg`} 
            alt={`logo pka illustration`}
            className='w-auto h-20 absolute'
            height={500}
            width={500}
            ref={i}/>
        </div>
    )
}