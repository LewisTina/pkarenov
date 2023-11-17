import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import useTranslation from "next-translate/useTranslation";

const Content404 = () => {
    const {t} = useTranslation('common')
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="">
                <div className="flex sm:flex-col sm:items-center">
                    <div className="flex items-center">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none" className='w-12'>
                                <circle cx="16.7887" cy="16.2113" r="15.7113" className='stroke-primary'/>
                                <circle cx="16.7887" cy="16.2112" r="12.2999" className='stroke-primary'/>
                            </svg>
                        </div>
                        <div className="flex px-6 border-r-2 sm:border-r-0 border-darkest dark:border-white">
                            <span className="text-6xl">
                                404
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="px-6 sm:px-0 sm:py-5">
                            <span className={`font-semibold`}>
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
        <Layout title="404 - Lewis Tina">
            <main className="min-h-screen w-full relative flex flex-col items-center">
                <Navbar/>
                <Content404/>
            </main>
        </Layout>
    )
}