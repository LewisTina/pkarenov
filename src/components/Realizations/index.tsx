import RealizationListItem, { RealizationListItemProps } from "./listing/item";
import SectionLayout from "../SectionLayout";
import RealizationsCover from "./RealizationsCover";

const belleville = require.context(`../../../public/belleville`, true)
const belleville2 = require.context(`../../../public/belleville2`, true)

export const realisations: { [key: string]: RealizationListItemProps } = {
    "plagne-1800": {
        title: "02 Salles de Bain Rénovées dans un appartement complètement refait.",
        description: "Carrelage sol et murs, pose de cloisons, bac et paroi de douche, meuble vasque, WC suspendu... en bref aménagement complet.",
        videosUrl: "/filtered-D6F15971-5667-4057-96C0-5D685842789F.MP4"
    },
    "plagne-soleil": {
        title: "Rénovation chalet.",
        description: "Pose d’une nouvelle cheminée, installation chauffage sol, pose de parquet, habillage mur en mélèze, et bien plus (salle de bain, carrelage, habillage murs externes en pierre reconstituée).",
        videosUrl: "/laplagne-soleil-chalet.mp4"
    },
    "belleville": {
        title: "Rénovation de 05 appartements sur 02 étages d’un immeuble.",
        description: "Cloisonnage, plâtrerie, électricité, plomberie, carrelage salles de bains, pose sols PVC, assemblage et installation cuisines, peintures, pose des bacs de douches et cloisons de verre, installation de baignoires.",
        folder: belleville
    },
    "belleville-2": {
        title: "Rénovation de 05 appartements sur 02 étages d’un immeuble.",
        description: "Cloisonnage, plâtrerie, électricité, plomberie, carrelage salles de bains, pose sols PVC, assemblage et installation cuisines, peintures, pose des bacs de douches et cloisons de verre, installation de baignoires.",
        folder: belleville2
    },
    "belleville-3": {
        title: "Rénovation de 05 appartements sur 02 étages d’un immeuble.",
        description: "Cloisonnage, plâtrerie, électricité, plomberie, carrelage salles de bains, pose sols PVC, assemblage et installation cuisines, peintures, pose des bacs de douches et cloisons de verre, installation de baignoires.",
        folder: belleville
    },
}

export default function Realizations() {
    return (
        <>
        <RealizationsCover/>
        <SectionLayout id={"someRealizations"} bgColor="" customClass="">
            <div className="w-full flex justify-center text-black dark:text-white">
                <div className="w-full flex flex-col items-center py-24 lg:px-10 md:px-4 overflow-hidden">
                    {
                        Object.keys(realisations).map((key, index) => (
                            <RealizationListItem projectId={key} key={key} idx={index} {...realisations[key]}/>
                        ))
                    }
                </div>
            </div>
        </SectionLayout>
        </>

    )
}