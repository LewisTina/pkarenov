import SectionLayout from "../SectionLayout";
import Gallery from "./Gallery";
import ProjectDescription from "./ProjectDescription";
import RealizationsCover from "./RealizationsCover";
import VideoPresentation from "./videos";

export default function Realizations() {
    return (
        <>
        <RealizationsCover/>
        <SectionLayout id={"someRealizations"} bgColor="" customClass="">
            <div className="w-full flex justify-center text-black dark:text-white">
                <div className="w-full flex flex-col items-center py-24 lg:px-10 md:px-4 overflow-hidden">
                    <div className="max-w-[986px] w-full flex items-center justify-between flex-row-reverse md:flex-col">
                        <VideoPresentation videosUrl={"/filtered-D6F15971-5667-4057-96C0-5D685842789F.MP4"}/>
                        <ProjectDescription title={"02 Salles de Bain Rénovées dans un appartement complètement refait."} description={"Carrelage sol et murs, pose de cloisons, bac et paroi de douche, meuble vasque, WC suspendu ... en bref aménagement complet."}/>
                    </div>
                    <div className="max-w-[986px] w-full flex items-center justify-between md:flex-col">
                        <VideoPresentation videosUrl={"/laplagne-soleil-chalet.mov"}/>
                        <ProjectDescription title={"Rénovation chalet."} description={"Pose d’une nouvelle cheminée, Installation chauffage sol, pose de parquet,  habillage mur en mélèze. et bien plus (Salle de bain, carrelage habillage murs externes en pierre reconstituées)"}/>
                    </div>
                    <div className="max-w-[986px] w-full flex items-center justify-between flex-row-reverse md:flex-col">
                        <Gallery folder={"belleville"}/>
                        <ProjectDescription title={"Rénovation 05 Appartements sur 02 étages d’un immeuble"} description={"Cloisonnage, plâtrerie, électricité, plomberie, carrelage salles de bains, pose sols PVC, assemblage et installation cuisines, peintures, pose des bacs de douches et cloisons de verre, installation de baignoires."}/>
                    </div>
                </div>
            </div>
        </SectionLayout>
        </>

    )
}