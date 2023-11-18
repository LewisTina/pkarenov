import { useForm } from 'react-hook-form';
import InputTextField from './InputTextField'
import Image from 'next/image'
import InputTextArea from './InputTextArea';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import CustomButton from '../Button';
import SectionLayout from '../SectionLayout';

function Alert(props: any){
    const {status} = props
    return (
        <div 
            className={`flex items-center p-3 pr-6 rounded-full`}
            style={{backgroundColor: `${
                status == 200 ?
                "#35DB0030" :
                "rgba(255, 0, 0, 0.30)"
            }`,border: `${
                status == 200 ?
                "solid 2px #35DB00" :
                "solid 2px rgb(255, 0, 0)"
            }`}}>
            <i className= {`material-icons`} style={{marginRight: "0.5em", fontSize: "1.5em"}}>
            {
            status == 200 ?
            "\ue86c" :
            "\ue002"
          }
            </i>
          <span>
          {
            status == 200 ?
            "Envoi réussi vous recevrez un email de confirmation" :
            "Une erreur s'est produite, réessayez plus tard"
          }
        </span>
        </div>
    )
}

export default function ContactUs(props: any) {
    const { register, setValue,  handleSubmit, formState: {errors} } = useForm();
    const [status, setStatus] = useState<any>(undefined)
    const {t} = useTranslation('common')
    const [isFetching, setIsFetching] = useState(false)
    const [isFinish, setIsFinish] = useState(true)

    const onSubmit = async (d: any) => {
        const file = d.file?.[0];
        setIsFetching(true)
        
        const postData = {
            email: d.email || '',
            first_name: d.firstName || '',
            message: d.message || '',
            name: d.name || '',
            phone: d.phone || '',
            society: d.society || '',
            file:  d.base64 || '',
            file_name: file?.name || ''
        }


        const url = "/api/mail"

        let headers: any = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "default",
          body: JSON.stringify(postData)
        }

        let response = await fetch(url, headers)
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
        console.log(response)
        setStatus(response.status)
        return response;
    }

    useEffect(() => {
        if (isFinish) {
            const finishTimeout = setTimeout(() => {
                setIsFinish(false);
            }, 8000);
    
            return () => {
                clearTimeout(finishTimeout);
            };
        }
    
        if (!!status) {
            const statusTimeout = setTimeout(() => {
                setIsFetching(false);
                setStatus(undefined);
            }, 8000);
    
            return () => {
                clearTimeout(statusTimeout);
            };
        }
    }, [isFinish, status]);
    

    return(
        <div className="flex w-full">
            <SectionLayout id={"chart"} bgColor='bg-light-gray'>
                <div className="w-full flex justify-center xl:px-4 lg:px-0">
                    <div className="w-full flex justify-center py-16 lg:px-10 md:px-4 relative">
                        <div className="max-w-[986px] w-full flex items-center md:flex-col">
                            <div className={`w-1/2 min-w-[50%] lg:w-full flex flex-col justify-start items-start`}>
                                <h2 className="text-3xl font-bold w-full">
                                    {"Demandez votre devis à"}
                                </h2>

                                <Image 
                                    src={"/pka_logo_text.svg"} 
                                    alt={"logo pka text"}
                                    className='w-auto h-16 my-5'
                                    height={500}
                                    width={500}/>

                                <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col items-start justify-start w-full`}>
                                    <InputTextField
                                            label={t('name')}
                                            placeholder={`Votre nom`} 
                                            controller={register} 
                                            isRequired={errors}
                                            name={'name'}/>

                                    <InputTextField
                                            label={t('email')}
                                            type='email'
                                            placeholder={`Adresse mail`} 
                                            controller={register} 
                                            isRequired={errors}
                                            name={'email'}/>
                                            
                                    <InputTextField
                                            label={t('zip_code')}
                                            placeholder={`Code Postal`}
                                            controller={register} 
                                            isRequired={errors}
                                            name={'zip-code'}/>

                                    <InputTextField
                                            label={t("town")}
                                            type='town'
                                            placeholder={`Ville`}  
                                            controller={register} 
                                            isRequired={errors}
                                            name={'town'}/>

                                    <InputTextField
                                            label={t("phone")}
                                            type='tel'
                                            placeholder={`${t('your')} ${t('phone')}`}  
                                            controller={register} 
                                            name={'phone'}/>
                                    <InputTextField
                                            label={t("attachement")}
                                            type='file'
                                            placeholder={`${t('optional')} ${t('attachement')}`}  
                                            controller={register} 
                                            valueSetter={setValue}
                                            name={'file'}/>

                                    <InputTextArea
                                            label={t("message")}
                                            placeholder={t("Message")} 
                                            controller={register} 
                                            name={'message'}/>

                                        <div className={`flex md:m-0`}>
                                            {
                                                !!status ?
                                                <Alert status={status}/> :
                                                <CustomButton 
                                                    label={"Envoyer la demande"}
                                                    color="text-white"
                                                    bgColor="bg-primary"
                                                    customClass="mt-2"/>
                                            }
                                        </div>
                                </form>
                            </div>
                            <div className="h-full aspect-square translate-y-1/2 flex justify-center items-center">
                                <Image 
                                    width={500}
                                    height={500}
                                    className="h-full w-auto object-cover object-left translate-x-1/3"
                                    src={"/abstract_lines.svg"} 
                                    alt={"Logo Pka"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}