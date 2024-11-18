import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image"

const Content404 = () => {
    const {t} = useTranslation('common')
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="">
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="flex px-6">
                            <span className="text-9xl coolvetica">
                                404
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center coolvetica">
                        <div className="px-6 sm:px-0 sm:py-5">
                            <span className={`text-6xl md:text-3xl lg:text-5xl`}>
                                {t('page_not_found')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Custom_404(props: any){
    return(
        <Layout title="404 - Page Introuvable - Pka Rénov">
            <Content404/>
        </Layout>
    )
}