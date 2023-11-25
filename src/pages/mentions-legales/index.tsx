import Layout from "@/components/Layout";
import TextPoint from "@/components/textPoint";
import useTranslation from "next-translate/useTranslation";

export default function CGU(props: any) {
    const {t} = useTranslation('common')
    return(
        <Layout title={`${t('legal_mentions')} - Lewis TINA`} footerBgColor="bg-light-gray dark:bg-black">
                <div className="w-full flex justify-center text-blue-gray dark:text-gray">
                    <div className="w-full flex justify-center py-32 min-h-screen max-w-[1535px] relative">
                        <div className="px-16 pt-8 w-[840px] h-auto md:px-4 lg:px-8 relative text-gray-500">

                        <div className="relative">
                            <h1 className="text-5xl capitalize sticky font-bold">
                                {t('legal_mentions')}
                            </h1>
                            <div className="my-5 w-20 h-2 bg-secondary"></div>
                            <div className="flex mt-12 py-2 border-dashed border-y-2 border-secondary">
                                <TextPoint title={"!!!"} text= {t("last_update", {date: "25/11/2023"})}/>
                            </div>

                            <TextPoint text= {t('article_intro')}/>
                        </div>
                        <div className="pt-20 relative" id="legal" title={t("legal")}>

                            <p className={`text-justify sm:text-left my-4`}>
                                {t('owner')} : <strong>{"PKA Rénov EI"}</strong> <br />
                                {t('owner_address')} :  <strong>{"38 Rue Anatole France, 69800 Saint-priest - France"}</strong> <br/>
                                {"SIRET N°"} :  <strong>{"847 942 877 00014"}</strong> <br/>
                                {"NAF"} :  <strong>{"43.33Z - Travaux de revêtement des sols et des murs"}</strong> <br/>
                                <strong>{'AXRE INSURANCE N°POLICE DECENNALE : 1LYSD-2003890-A'}</strong> <br/>
                             <br/>
                                {t('web_developer')}  : <strong>{"ABOUTOU TINA Pierre Lewis"}</strong> <br/>
                                {t('publication_director')} : <strong>{"ABOUTOU TINA Pierre Lewis"}</strong> <br/>
                                {t('contact_publication_director')} : <strong>
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

                        </div>
                    </div>
                </div>
        </Layout>
    )
}