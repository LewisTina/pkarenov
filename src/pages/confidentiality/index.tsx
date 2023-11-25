import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import TextPoint from "@/components/textPoint";
import useTranslation from "next-translate/useTranslation";
import { DM_Sans } from 'next/font/google'

export default function CGU(props: any) {
    const {t} = useTranslation('common')
    return(
        <Layout title={`${t('legal_mentions')} - Lewis TINA`} footerBgColor="bg-light-gray dark:bg-black">
                <div className="w-full flex justify-center text-blue-gray dark:text-gray">
                    <div className="w-full flex justify-center py-32 min-h-screen max-w-[1535px] relative">
                        <div className="px-16 pt-8 w-[840px] h-auto md:px-4 lg:px-8 relative text-gray-500">

                        <div className="relative">
                            <h1 className="text-5xl capitalize sticky font-bold">
                                {t('privacy_policy_title')}
                            </h1>
                            <div className="my-5 w-20 h-2 bg-secondary"></div>
                            <div className="flex mt-12 py-2 border-dashed border-y-2 border-secondary">
                                <TextPoint title={"!!!"} text= {t("last_update", {date: "25/11/2023"})}/>
                            </div>

                            <TextPoint text= {t('article_intro')}/>
                        </div>

                        <div className="pt-20" id="introduction" title={"introduction"}>
                            <h2 className="text-4xl capitalize sticky  font-bold">
                                {'introduction'}
                            </h2>
                            <TextPoint text={t('user_agreement-10')}/>
                        </div>
                        
                        <div className="py-20 relative" id="privacy" title={t("privacy_policy_title")}>
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
        </Layout>
    )
}