import { useRef } from "react";
import { RealizationListItemProps } from "../Realizations/listing/item";
import ShowRoomImages from "./gallery";
import ShowRoomVideo from "./video";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';

export default function ShowRoom(props: RealizationListItemProps & {name: string}) {
    const { name, title, folder, videosUrl } = props
    const frameRef = useRef<HTMLDivElement>(null)
    const main = useRef<HTMLDivElement>(null)
    /* const scrollTween = useRef();

    const { contextSafe } = useGSAP(
        () => {
            const panels: HTMLElement[] = gsap.utils.toArray('.panel');
            panels.forEach((panel: HTMLElement, i: number) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top bottom',
                    end: panels[i + 1] ? panels[i+1].offsetTop : '+=105%',
                    onToggle: (self) => self.isActive && !scrollTween.current && goToSection(i),
                    id: 'panel-' + i,
                    markers: true,
                });
            });
            ScrollTrigger.create({
                start: 0,
                end: 'max',
                snap: 1 / (panels.length - 1),
            });
        },
        { scope: main }
    );

    const goToSection = contextSafe((i: any) => {
        const panels: HTMLElement[] = gsap.utils.toArray('.panel');
        const item = panels[i];
        scrollTween.current = gsap.to(window, {
          scrollTo: { y: item?.offsetTop, autoKill: false },
          id: 'scrollTween',
          onComplete: () => (scrollTween.current = null),
          overwrite: true,
        });
      }); */
    
    const panelClassName = "h-screen w-full flex flex-col panel z-10"

    return (
        <div ref={main} className="w-full">
            <section className={`min-h-screen w-full flex flex-col -z-10`} ref={frameRef}>
                <div className={`w-full flex min-h-[70svh] flex-col gap-8 p-4`}>
                    <h1 className="m-auto mb-0 uppercase coolvetica text-[max(2.5rem,20vw)] leading-[0.75em] text-primary dark:text-white">
                        {name}
                    </h1>
                    <h2 className={`mx-auto text-xl leading-6 w-full max-w-[512px] text-center`}>
                        {title}
                    </h2>
                </div>
                {
                    videosUrl &&
                    <ShowRoomVideo url={videosUrl} title={title}/>
                }
                {
                    folder &&
                    <ShowRoomImages folder={folder} frameRef={frameRef}/>
                }
            </section>

            <section className={`${panelClassName} text-7xl text-primary justify-center items-center bg-black`}>ONE</section>
            <section className={`${panelClassName} text-7xl text-primary justify-center items-center bg-orange-400`}>TWO</section>
            <section className={`${panelClassName} text-7xl text-primary justify-center items-center bg-purple-500`}>THREE</section>
            <section className={`${panelClassName} text-7xl text-primary justify-center items-center bg-green`}>FOUR</section>
        </div>
    )
}