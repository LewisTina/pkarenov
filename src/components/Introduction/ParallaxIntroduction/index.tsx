import React, { useEffect, useState } from 'react';
import { ParallaxProvider, useParallax} from 'react-scroll-parallax';
import Image from "next/image"

const ParallaxEffect = () => {
    const [startFirstAndEnd, setStartFirstAndEnd] = useState({startScroll: 0, endScroll: 640})
    const [coverRect, setCoverRect] = useState<any>({top: 0, bottom: 0, left:0, right: 0, height: 0, width: 0})

    useEffect(() => {
        const maProjectDiv = document.getElementById('Introduction');
        const homeDiv = document.getElementById('home');
        const rectProject = maProjectDiv!.getBoundingClientRect();
        const rectHome = homeDiv!.getBoundingClientRect();
        setCoverRect(rectHome)

        addEventListener("resize", (event) => {
          const rectHome = homeDiv!.getBoundingClientRect();
          setCoverRect(rectHome)
        });

        setStartFirstAndEnd({
          startScroll: 0,
          endScroll: rectProject.top - 128
        });

      }, []);

      // Each image is initially translated away from its starting position
      const a = useParallax<HTMLDivElement>({
        ...startFirstAndEnd,
        translateX: ["-15%", "0%"],
        translateY: ["-85%", "0%"],
        rotate: [-22.58, 0]
      });
      const b = useParallax<HTMLDivElement>({
        ...startFirstAndEnd,
        translateX: ["-60%", "0%"],
        translateY: [`-${coverRect.height <= 832 ? "355%" : coverRect.height / 2.5}`, "0%"],
        rotate: [-12.67, 0]
      });
      const c = useParallax<HTMLDivElement>({
        ...startFirstAndEnd,
        translateX: ["180%", "0%"],
        translateY: ["-250%", "0%"],
        rotate: [15.45, 0]
      });

  return (
    
    <>
      <div className="w-8/12 lg:w-full p-8 lg:px-0 flex justify-end md:justify-center items-start lg:items-center">
          <div className="flex w-[640px] lg:w-[540px] md:w-4/5 shrink-0 px-2 md:px-1 pt-16 lg:pt-0">
              <div ref={a.ref} className="w-full aspect-[1/1.076] rounded-xl flex relative overflow-hidden pointer-events-none">
                  <Image 
                      fill
                      className="object-cover object-center"
                      src={"/petite-salle-bain-au-style-moderne-ai-genere-2.jpg"} 
                      alt={"Cuisine intérieure moderne"}/>
              </div>
          </div>
          <div className="w-80 md:w-4/5 shrink-0 px-2 md:px-1">
              <div  ref={b.ref} className="w-full aspect-[1/0.83] rounded-xl flex relative overflow-hidden pointer-events-none">
                  <Image
                      fill
                      className="object-cover object-bottom"
                      src={"/petite-salle-bain-au-style-moderne-ai-genere.jpg"} 
                      alt={"Cuisine intérieure moderne"}/>
              </div>
              <div  ref={c.ref} className="w-full aspect-[1/1.22] mt-4 md:mt-2 rounded-xl flex relative overflow-hidden pointer-events-none">
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

const ParallaxEffectProvider = () => {

  return (
    <ParallaxProvider>
        <ParallaxEffect/>
    </ParallaxProvider>
  );
};

export default ParallaxEffectProvider;
