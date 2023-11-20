import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import TextPoint from "@/components/textPoint";
import useTranslation from "next-translate/useTranslation";
import { DM_Sans } from 'next/font/google'

export default function CGU(props: any) {
    const {t} = useTranslation('common')
    return(
        <Layout title={`${t('legal_mentions')} - Lewis TINA`}>
            <main className="min-h-screen w-full relative flex flex-col items-center">
                <Navbar/>
                <div className="w-full flex justify-center ">
                    <div className="w-full flex justify-center py-32 min-h-screen max-w-[1535px] relative">
                        <div className="px-16 pt-8 w-[840px] h-auto md:px-4 lg:px-8 relative text-gray-500">

                        <div className="relative">
                            <h1 className="text-5xl capitalize sticky text-darkest dark:text-light-grey">
                                {t('legal_mentions')}
                            </h1>
                            <div className="my-5 w-20 h-2 bg-secondary"></div>
                            <div className="flex mt-12 py-2 border-dashed border-y-2 border-secondary">
                                <TextPoint title={"!!!"} text= {t("last_update", {date: "11/10/2023"})}/>
                            </div>

                            <TextPoint 
                                text= {t('article_intro')}
                                />
                        </div>
                        <div className="pt-20 relative" id="legal" title={t("legal")}>
                            <h2 className="text-4xl capitalize sticky">
                                {t('legal')}
                            </h2>

                            <p className={`text-justify sm:text-left my-4`}>
                                {t('owner')} : <strong>{"Pierre Lewis ABOUTOU TINA"}</strong> <br />
                                {t('owner_address')} :  <strong>{"5 Chemin de Garvignan 69360 - Ternay"}</strong> <br/>
                             <br/>
                                {t('web_developer')}  : <strong>{"ABOUTOU TINA Pierre Lewis"}</strong> <br/>
                                {t('publication_director')} : <strong>{"ABOUTOU TINA Pierre Lewis"}</strong> <br/>
                                {t('contact_publication_director')} : <strong>
                                <a href="mailto:contact@lewistina.com?subject=Contact%20a%20partir%20des%20mentions%20l%C3%A9gales%20via%20le%20site%20lewistina.com">contact@lewistina.com</a></strong> <br/>
                             <br/>
                                {t('developer')} : <strong>{"ABOUTOU TINA Pierre Lewis"}</strong> <br/>
                                {t('contact_developer')} : <strong>
                                    <a href="mailto:contact@lewistina.com?subject=Contact%20a%20partir%20des%20mentions%20l%C3%A9gales%20via%20le%20site%20lewistina.com">contact@lewistina.com</a></strong> <br/>
                             <br/>

                                {t('website_host')} : LWS <br/>
                                {t('sas_info')}<br/>
                                {t('trade_register')} {"(RCS) RCS Paris B 851 993 683 00024 "}<br/>
                                {"Code APE (INSEE) 6311Z"} <br/>
                                {t('vat_number')} : {"FR 21 851 993 683"} <br/>
                               {" Siège Sociale de l'hébergeur"} : {"10, RUE PENTHIEVRE - 75838 Paris - France"} <br/>
                            </p>
                            
                        </div>

                        <div className="pt-20" id="introduction" title={"introduction"}>
                            <h2 className="text-4xl capitalize sticky">
                                {'introduction'}
                            </h2>
                            <TextPoint
                                text={t('user_agreement')}
                                />
                        </div>

                        <div className="pt-20 relative" id="cgu" title={t("terms_and_services")}>
                            <h2 className="text-4xl capitalize sticky">
                                {t('terms_and_services')}
                            </h2>

                            <TextPoint title={`1. ${t("terms_of_use_section_1")}`} text={t('terms_of_use_section_1_content')}/>
                            <TextPoint title={`2. ${t("terms_of_use_section_2")}`} text={t('terms_of_use_section_2_content')}/>
                            <TextPoint title={`3. ${t("accessibility")}`} text={t('user_agreement')}/>
                            <TextPoint title={`4. ${t("terms_of_use_section_3")}`} text={t('terms_of_use_section_3_content')}/>
                            <TextPoint title={`5. ${t("intellectual_property_title")}`} text={t('intellectual_property')}/>
                            <TextPoint title={`6. ${t("terms_of_use_section_4")}`} text={t('terms_of_use_section_4_content')}/>
                            <TextPoint title={`7. ${t("terms_of_use_section_5")}`} text={t('terms_of_use_section_5_content')}/>
                            <TextPoint title={`8. ${t("terms_of_use_section_6")}`} text={t('terms_of_use_section_6_content')}/>
                        </div>
                        
                        <div className="py-20 relative" id="privacy" title={t("privacy_policy_title")}>
                            <h2 className="text-4xl capitalize sticky">
                                {t('privacy_policy_title')}
                            </h2>

                            <TextPoint title={`1. ${t("privacy_policy_section_1")}`} text={t('privacy_policy_section_1_content')}/>
                            <TextPoint title={`2. ${t("privacy_policy_section_2")}`} text={t('privacy_policy_section_2_content')}/>
                            <TextPoint title={`3. ${t("privacy_policy_section_3")}`} text={t('privacy_policy_section_3_content')}/>
                            <TextPoint title={`4. ${t("privacy_policy_section_4")}`} text={t('privacy_policy_section_4_content')}/>
                            <TextPoint title={`5. ${t("privacy_policy_section_5")}`} text={t('privacy_policy_section_5_content')}/>
                            <TextPoint title={`6. ${t("privacy_policy_section_6")}`} text={t('privacy_policy_section_6_content')}/>

                            
                        </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </Layout>
    )
}