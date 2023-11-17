import useTranslation from "next-translate/useTranslation";

export default function Footer(props: any) {
    const {t} = useTranslation('common')
    return(
        <footer className="w-full flex justify-center bg-primary">
        </footer>
    )
}