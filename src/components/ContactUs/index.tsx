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
            className={`flex items-center py-2 pr-6 rounded-lg text-ellipsis whitespace-nowrap`}
            style={{
            backgroundColor: `${
                status == 200 ?
                "#35DB0030" :
                "rgba(255, 0, 0, 0.10)"
            }`,border: `${
                status == 200 ?
                "solid 1px #35DB00" :
                "solid 1px rgb(255, 0, 0)"
            }`}}>
            <i className= {`bi px-3 flex bi-${status == 200 ? "check-circle-fill" : "info-circle-fill"}`}></i>
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
            message: d.message || '',
            name: d.name || '',
            phone: d.phone || '',
            society: d.society || '',
            zip_code: d.zip_code || '',
            town: d.town || '',
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
            <SectionLayout id={"askForQuote"} bgColor='bg-light-gray  dark:bg-black'>
                <div className="w-full flex justify-center xl:px-4 lg:px-0">
                    <div className="w-full flex justify-center py-16 lg:px-10 md:px-4 relative">
                        <div className="max-w-[986px] w-full flex items-center md:flex-col">
                            <div className={`w-full min-w-[50%] lg:w-full flex flex-col justify-start items-center z-10`}>
                                <h2 className="text-3xl font-bold">
                                    {"Demandez votre devis à"}
                                </h2>

                                <Image 
                                    src={"/pka_logo_text.svg"} 
                                    alt={"logo pka text"}
                                    className='w-auto h-16 my-5'
                                    height={500}
                                    width={500}/>

                                <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col items-center justify-start w-full`}>
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
                                            name={'zip_code'}/>

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
                                            placeholder={`Numéro de téléphone`}  
                                            controller={register} 
                                            name={'phone'}/>

                                    <InputTextField
                                            label={t("society")}
                                            type='tel'
                                            placeholder={`Société (Optionnel)`}  
                                            controller={register} 
                                            name={'society'}/>

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
                                                <>
                                                {
                                                    isFetching ?
                                                    <svg aria-hidden="true" className="w-6 h-6 ml-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#FFFFFF40"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#FFFFFF"/>
                                                    </svg> : 
                                                <CustomButton 
                                                    disabled={isFetching}
                                                    label={"Envoyer la demande"}
                                                    color="text-white dark:text-primary"
                                                    bgColor="bg-primary dark:bg-white"
                                                    customClass="mt-2"/>
                                                }
                                                </>
                                            }
                                            
                                        </div>
                                </form>
                            </div>
                            <div className="h-full pointer-events-none md:h-auto md:w-full aspect-square translate-y-[30%] md:translate-y-1/2 flex justify-center items-center absolute right-0 md:bottom-0 z-0">
                                <Image 
                                    width={500}
                                    height={500}
                                    className="h-full w-auto object-cover object-left translate-x-[40%] md:translate-x-0"
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