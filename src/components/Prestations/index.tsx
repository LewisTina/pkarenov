import SectionLayout from "../SectionLayout";

export default function Prestations(){
    return(
        <SectionLayout id={"whatWeDo"} bgColor="bg-black">
            <div className="w-full flex justify-center text-gray">
                <div className="w-full flex justify-center py-24 px-4 overflow-hidden">
                    <div className="max-w-[986px] w-full flex items-center md:flex-col">
                        <div className="w-8/12 md:w-full">
                            <h2 className="text-9xl lg:text-8xl md:text-7xl leading-[0.85] lg:leading-[0.85] md:leading-[0.85]  my-3 w-9/12 md:w-full text-white coolvetica whitespace-pre-line">
                                {"Rénovation de \n bout-en-bout"}
                            </h2>
                            <p className="text-3xl lg:text-xl md:text-base my-3">
                                {"De l’ossature au revêtement, de la conception aux dernières finissions, entrez dans un monde où l'innovation architecturale rencontre un artisanat impeccable, où votre vision prend vie, pièce par pièce."}
                            </p>
                        </div>
                        <div className="h-full w-4/12 relative translate-x-1/3">
                        </div>
                    </div>
                </div>
            </div>

        </SectionLayout>
    )
}