import SectionLayout from "@/components/SectionLayout";

export default function RealizationsCover(){
    return(
        <SectionLayout id={"someRealizations"} bgColor="bg-realizations-cover-bg bg-bottom" customClass="">
            <div className="inset-0 absolute bg-black/50 text-white text-center flex justify-center items-center">
                <h3 className="text-8xl md:text-6xl font-bold max-w-4xl lg:px-10 md:px-4">
                    Quelques unes de nos réalisations
                </h3>
            </div>
            <div className="w-full flex justify-center text-white h-screen  max-h-[832px] md:max-h-[30rem]">
            </div>
        </SectionLayout>
    )
}