import BlockListing from "../BlockListing";
import SectionLayout from "../SectionLayout";
import Image from "next/image"

export default function Prestations(){
    return(
        <SectionLayout id={"whatWeDo"} bgColor="bg-black">
            <div className="w-full flex justify-center text-gray overflow-x-visible">
                <div className="w-full flex justify-center py-24 lg:px-10 md:px-4 overflow-x-visible">
                    <div className="max-w-[986px] w-full flex flex-col">
                        <h2 className="text-9xl lg:text-8xl md:text-7xl leading-[0.85] lg:leading-[0.85] md:leading-[0.85] my-3 w-8/12 md:w-full text-white coolvetica whitespace-pre-line">
                            {"Rénovation de \n bout-en-bout"}
                        </h2>
                        <div className="w-full flex items-center md:flex-col">
                            <div className="w-9/12 md:w-full lg:w-7/12">
                                <p className="text-3xl lg:text-xl md:text-base my-3 w-10/12 lg:w-full">
                                    {"De l’ossature au revêtement, de la conception aux dernières finissions, entrez dans un monde où l'innovation architecturale rencontre un artisanat impeccable, où votre vision prend vie, pièce par pièce."}
                                </p>
                                <div className="flex flex-wrap my-8">
                                    <BlockListing title={"Revêtement des sols"} list={["Pose carrelage sols", "Jointage", "Pose sols stratifiés (Parquet Bois/PVC)", "Pose lino", "Pose de plinthes", "Assemblage terrasses (Dalles Béton/Bois)", "Vitrification parquet"]}/>
                                    <BlockListing title={"Murs & plafonds"} list={["Isolation", "Plâtrerie", "Bande à joint", "Peinture", "Pose de faillance (Carrelage murs)"]}/>
                                    <BlockListing title={"Cuisines et meubles"} list={["Conception cuisine", "Pose cuisines", "Branchement d’équipement", "Montage de meubles", "Pose de meubles Mureaux"]}/>
                                    <BlockListing title={"Salles de bains & WC"} list={["Installation de bac de douche", "Pose de baignoire", "Installation de paroi de douche", "Pose WC (Suspendu/Autoportant)", "Pose meuble vasque"]}/>
                                    <BlockListing title={"Divers"} list={["Électricité", "Plomberie"]}/>
                                </div>
                            </div>
                            <div className="h-full w-3/12 md:w-full lg:w-5/12 py-3 relative flex flex-col items-start justify-start">
                                <div className="h-[348px] md:h-auto md:w-full aspect-[1/0.76] rounded-xl my-2.5 md:ml-8 ml-11 flex relative overflow-hidden pointer-events-none">
                                    <Image 
                                        fill
                                        className="object-cover object-bottom"
                                        src={"/interieur-cuisine-moderne-aux-couleurs-vives.jpg"} 
                                        alt={"Cuisine intérieure moderne"}/>
                                </div>
                                <div className="bg-green h-[348px] md:h-auto md:w-full aspect-[1/0.76] rounded-xl my-2.5 flex relative overflow-hidden pointer-events-none">
                                    <Image 
                                        fill
                                        className="object-cover object-bottom"
                                        src={"/amenagement-interieur-decoration-salle-bain-agreable-moderne.jpg"} 
                                        alt={"Cuisine intérieure moderne"}/>
                                </div>
                                <div className="bg-green h-[348px] md:h-auto md:w-full aspect-[1/0.76] rounded-xl my-2.5 md:ml-16 ml-24 flex relative overflow-hidden pointer-events-none">
                                    <Image 
                                        fill
                                        className="object-cover object-bottom"
                                        src={"/cuisine-inter-white.png"} 
                                        alt={"Cuisine intérieure moderne"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}