import SectionLayout from "../SectionLayout";
import ChartElement from "./ChartElement";
import Image from "next/image"

export default function Chart() {
    return (
        <SectionLayout id={"chart"} customClass="my-10 lg:my-0">
            <div className="w-full flex justify-center xl:px-4 lg:px-0">
                <div className="w-full bg-light-gray dark:bg-dark-gray/10 rounded-xl lg:rounded-none flex justify-center py-16 lg:px-10 md:px-4 overflow-hidden">
                    <div className="max-w-[986px] w-full flex items-center md:flex-col">
                        <div className="w-9/12 md:w-full">
                            <h2 className="text-7xl lg:text-6xl md:text-5xl font-bold my-3 w-11/12 md:w-full text-primary dark:text-white">
                                Infiniment Professionnel
                            </h2>
                            <p className="text-3xl lg:text-xl md:text-base my-3 w-11/12 md:w-full text-dark-gray dark:text-blue-gray">
                                {"Que vous envisagiez de redéfinir votre domicile ou de donner une nouvelle vie à un espace professionnel, notre équipe d'experts est prête à transformer vos rêves en réalité."}
                            </p>
                            <div className="flex md:flex-col md:items-center">
                                <ChartElement title={"Déjà"} counter={"06"} description={"Années d’expériences"}/>
                                <ChartElement title={"Plus de"} counter={"150"} description={"Chantiers terminés"}/>
                                <ChartElement title={"Plus de"} counter={"50"} description={"Clients satisfaits"}/>
                            </div>
                        </div>
                        <div className="h-full w-3/12 relative translate-x-1/3 md:w-full md:aspect-square md:max-w-md md:mt-20 md:translate-x-1/2">
                            <Image 
                                width={500}
                                height={500}
                                className="h-full w-auto object-cover object-left"
                                src={"/logo_pka.svg"} 
                                alt={"Logo Pka"}/>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}