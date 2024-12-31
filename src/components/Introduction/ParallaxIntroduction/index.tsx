import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import gsap from 'gsap';
import Image from "next/image"

const ParallaxEffect = (props: { frame: HTMLElement }) => {
  const { frame } = props
  const a = useRef<HTMLDivElement>(null)
  const b = useRef<HTMLDivElement>(null)
  const c = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const scrollTrigger = {
      trigger: frame,
      start: "top top",
      end: "87%",
      scrub: true
    }

    const tl = gsap.timeline({ scrollTrigger });
    const tl2 = gsap.timeline({ scrollTrigger });
    const tl3 = gsap.timeline({ scrollTrigger });

    tl.from(a.current, { y: "-85%", x: "-15%", rotate: "-22.58deg" });
    tl2.from(b.current, { y: `-100vh`, x: "-60%", rotate: "-12.67deg" });
    tl3.from(c.current, { y: "-250%", x: "180%", rotate: "15.45deg" });
  });

  return (
    
    <>
      <div className="w-8/12 lg:w-full p-8 pb-0 lg:px-0 flex justify-end md:justify-center items-start lg:items-center">
          <div className="flex w-[640px] lg:w-[540px] md:w-4/5 shrink-0 px-2 md:px-1 pt-16 lg:pt-0">
              <div ref={a} className="w-full aspect-[1/1.076] rounded-xl flex relative overflow-hidden pointer-events-none">
                  <Image 
                      fill
                      className="object-cover object-center"
                      src={"/petite-salle-bain-au-style-moderne-ai-genere-2.jpg"} 
                      alt={"Cuisine intérieure moderne"}/>
              </div>
          </div>
          <div className="w-80 md:w-4/5 shrink-0 px-2 md:px-1">
              <div  ref={b} className="w-full aspect-[1/0.83] rounded-xl flex relative overflow-hidden pointer-events-none">
                  <Image
                      fill
                      className="object-cover object-bottom"
                      src={"/petite-salle-bain-au-style-moderne-ai-genere.jpg"} 
                      alt={"Cuisine intérieure moderne"}/>
              </div>
              <div  ref={c} className="w-full aspect-[1/1.22] mt-4 md:mt-2 rounded-xl flex relative overflow-hidden pointer-events-none">
                  <Image 
                      fill
                      className="object-cover object-bottom"
                      src={"/plaquiste-intr.png"} 
                      alt={"Cuisine intérieure moderne"}/>
              </div>
          </div>
      </div>
    </>
  );
};

export default ParallaxEffect;
