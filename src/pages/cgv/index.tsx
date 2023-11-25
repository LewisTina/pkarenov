import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import TextPoint from "@/components/textPoint";
import useTranslation from "next-translate/useTranslation";
import { DM_Sans } from 'next/font/google'

export default function CGU(props: any) {
    const {t} = useTranslation('common')
    return(
        <Layout title={`${t('cgv_title')} - Lewis TINA`} footerBgColor="bg-light-gray dark:bg-black">
                <div className="w-full flex justify-center text-blue-gray dark:text-gray">
                    <div className="w-full flex justify-center py-32 min-h-screen max-w-[1535px] relative">
                        <div className="px-16 pt-8 w-[840px] h-auto md:px-4 lg:px-8 relative text-gray-500">

                        <div className="relative">
                            <h1 className="text-5xl capitalize sticky font-bold">
                                {t('cgv_title')}
                            </h1>
                            <div className="my-5 w-20 h-2 bg-secondary"></div>
                            <div className="flex mt-12 py-2 border-dashed border-y-2 border-secondary">
                                <TextPoint title={"!!!"} text= {t("last_update", {date: "25/11/2023"})}/>
                            </div>

                            <TextPoint text= {t('article_intro')}/>
                        </div>
                        
                        <div className="py-20 relative" id="privacy" title={t("privacy_policy_title")}>
                            <TextPoint title={`1. ${t("CGV.Definitions.Title")}`} text={t('CGV.Definitions.Content')}/>
                            <TextPoint title={`2. ${t("CGV.Object.Title")}`} text={t('CGV.Object.Content')}/>
                            <TextPoint title={`3. ${t("CGV.DevisCommandes.Title")}`} text={t('CGV.DevisCommandes.Content')}/>
                            <TextPoint title={`4. ${t("CGV.ModalitesPaiement.Title")}`} text={t('CGV.ModalitesPaiement.Content')}/>
                            <TextPoint title={`5. ${t("CGV.RealisationTravaux.Title")}`} text={t('CGV.RealisationTravaux.Content')}/>
                            <TextPoint title={`6. ${t("CGV.ResponsabilitesGaranties.Title")}`} text={t('CGV.ResponsabilitesGaranties.Content')}/>
                            <TextPoint title={`7. ${t("CGV.AnnulationResiliation.Title")}`} text={t('CGV.AnnulationResiliation.Content')}/>
                            <TextPoint title={`8. ${t("CGV.ProtectionsDonnees.Title")}`} text={t('CGV.ProtectionsDonnees.Content')}/>
                            <TextPoint title={`9. ${t("CGV.LitigesJuridiction.Title")}`} text={t('CGV.LitigesJuridiction.Content')}/>
                            <TextPoint title={`10. ${t("CGV.DispositionsFinales.Title")}`} text={t('CGV.DispositionsFinales.Content')}/>
                        </div>

                        </div>
                    </div>
                </div>
        </Layout>
    )
}