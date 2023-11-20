import Image from "next/image"
import style from "./index.module.scss"
import Preload from "../Preload"

export default function Cover(props: any){
    return (
        <div className={`lg:h-[100svh] h-screen sm:min-h-[100svh] md:min-h-[40rem] w-full p-4 ${style.cover} relative z-10`} id="home">
            <div className="inset-0 p-4 absolute pointer-events-none z-0">
                <Image 
                    fill
                    className="object-contain xl:object-cover object-right-bottom"
                    src={"/btp-vector-01.svg"} 
                    alt={"Btp vector line"}/>
            </div>
            <div className="inset-0 p-4 absolute flex flex-col justify-between items-center py-4">
                <span className=""></span>
                <p className="text-center max-w-2xl text-primary dark:text-white">
                    <span className="block">
                        Chez PkaRenov, la rénovation va bien au-delà de la simple amélioration esthétique.
                    </span>
                    <span className="text-7xl lg:text-6xl md:text-5xl font-bold">
                        Transformez Votre Espace, Réalisez Vos Rêves
                    </span>
                </p>
                <span className=""></span>
                {/* <div className="relative bg-primary/20 h-24 flex items-center justify-center rounded-full aspect-square animate-bounce">
                    <Image 
                        src={"/mouse.svg"} 
                        alt={"logo pka extend"}
                        height={32}
                        width={20}/>
                </div> */}
            </div>

        </div>
    )
}