import useTranslation from "next-translate/useTranslation";
import Image from "next/image"
import CustomButton from "../Button";
import Link from "next/link";

export default function Footer(props: any) {
    const {t} = useTranslation('common')
    return(
        <footer className="w-full flex flex-col items-center px-4 pt-20">
            <div className="w-full max-w-6xl flex flex-col items-center pb-3 border-black/10 border-b-[1px]">
                <div className="flex flex-col justify-start items-start w-full max-w-[986px]">
                    {/* <Image 
                        src={"/pka_extended_logo.svg"} 
                        alt={"logo pka extend"}
                        height={26}
                        width={158}/> */}

                    <div className="flex w-full justify-between items-center md:flex-col md:items-start">
                        <div className="pt-4">
                            <h1 className="my-5 text-7xl lg:text-6xl md:text-5xl font-bold max-w-xl">
                                Nous contacter directement
                            </h1>
                            <div className="my-5 flex flex-wrap">
                                <CustomButton 
                                    label={"Envoyez un e-mail"}
                                    color="text-white"
                                    bgColor="bg-primary"
                                    customClass="mt-2"/>
                                <CustomButton 
                                    label={"Envoyez un sms"}
                                    color="text-green"
                                    bgColor="bg-green/10"
                                    customClass="ml-4 md:ml-0 mt-2"/>
                                <CustomButton 
                                    label={"Appelez nous"}
                                    color="text-secondary"
                                    bgColor="bg-secondary/10"
                                    customClass="ml-4 md:ml-0 mt-2"/>
                            </div>
                            <div className="my-5">
                                <p className="leading-10">
                                    05 Chemin de Gavignan,  69360 - Ternay 
                                </p>
                            </div>

                            <div className="my-5">
                                <p className="flex leading-10 flex-wrap text-blue-gray font-normal">
                                    <Link href={"/mentions-legales"} className="mr-16 md:mr-8">
                                        Mentions Légales
                                    </Link>
                                    <Link href={"/mentions-legales"} className="mr-16 md:mr-8">
                                        Politique de confidentiaité
                                    </Link>
                                    <Link href={"/mentions-legales"}>
                                        Conditions générales de ventes
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="w-64 min-w-[256px] m-auto h-auto relative -bottom-4">
                            <Image 
                                width={100}
                                height={100}
                                className="h-auto w-full object-contain md:mb-5"
                                src={"/destructured_circle_logo.svg"} 
                                alt={"logo pka extend"}/>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full max-w-6xl my-5 flex justify-center">
                <div className="flex flex-col justify-start items-start w-full max-w-[986px]">
                    <p className="text-blue-gray">
                        <span className="leading-10">
                            Réalisé et développé par &nbsp;
                        </span>
                        <a className="font-bold leading-10" href="https://www.lewistina.com">
                            lewistina.com &nbsp;
                        </a>
                        <span className="bi-arrow-up-right">{""}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}