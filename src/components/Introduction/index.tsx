import SectionLayout from "../SectionLayout";
import Image from "next/image"
import ParallaxIntroduction from './ParallaxIntroduction'

export default function Introduction() {
    return(
        <SectionLayout id={"Introduction"} customClass="z-0 lg:mb-24">
            <div className="w-full flex justify-center text-primary dark:text-white overflow-x-visible">
                <div className="w-full flex justify-center lg:px-10 md:px-4 overflow-x-visible">
                        <div className="w-full flex items-center justify-end lg:flex-col">
                            <ParallaxIntroduction/>
                            <div className="w-4/12 lg:w-full px-8 lg:px-0 relative flex flex-col items-start justify-start">
                                <h4 className="text-5xl lg:text-4xl font-bold mb-4">
                                    {"Expertise Exceptionnelle en Rénovation"}
                                </h4>
                                <p className="">
                                    {"Avec PkaRenov, chaque projet est une occasion de créer quelque chose d'exceptionnel."}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </SectionLayout>
    )
}