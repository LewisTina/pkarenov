import Image from "next/image"
import style from "./index.module.scss"

export default function Cover(props: {coverRef: React.RefObject<HTMLDivElement>}) {
    return (
        <div className={`lg:h-[100svh] h-screen sm:min-h-[100svh] md:min-h-[40rem] w-full p-4 ${style.cover} relative z-10`} id="home" ref={props.coverRef}>
            <div className="inset-0 p-4 absolute pointer-events-none z-0">
                <Image 
                    fill
                    className="object-contain xl:object-cover object-right-bottom"
                    src={"/btp-vector-01.svg"} 
                    alt={"Btp vector line"}/>
            </div>
            <div className="inset-0 p-4 absolute flex flex-col justify-between items-center py-4">
                <div className="m-auto text-center max-w-2xl text-primary dark:text-white">
                    <h1 className="block">
                        Chez Pka Rénov, la rénovation va bien au-delà de la simple amélioration esthétique.
                    </h1>
                    <h2 className="text-7xl lg:text-6xl md:text-5xl font-bold">
                        Transformez Votre Espace, Réalisez Vos Rêves
                    </h2>
                </div>
            </div>
        </div>
    )
}