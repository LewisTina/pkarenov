import Image from "next/image"
import CustomButton from "../Button"
import NavItem from "./NavItem"

export default function Navbar(props: any){
    
    return(
        <header className="w-full fixed pl-4 pr-3 py-4 flex items-center justify-center bg-light-gray/70 backdrop-blur-md border-black/10 border-b-[1px]">
            <div className="flex justify-between w-full max-w-7xl">
                <Image 
                    src={"/pka_extended_logo.svg"} 
                    alt={"logo pka extend"}
                    height={26}
                    width={158}/>

                <div className="flex md:hidden">
                    <NavItem 
                        label={"Accueil"} 
                        path={"#"}/>
                    <NavItem 
                        label={"Prestations"} 
                        path={"#whatWeDo"}/>
                    <NavItem 
                        label={"Quelques réalisations"} 
                        path={"#someRealizations"}/>
                    <CustomButton 
                        label={"Demander un devis"}
                        color="text-secondary"
                        bgColor="bg-secondary/10"/>
                    <CustomButton 
                        label={"Contactez nous"}
                        color="text-white"
                        bgColor="bg-primary"/>
                </div>

                <button 
                    className={`bg-primary text-white px-5 py-2.5 lg:px-4 mx-1 rounded-full font-medium hidden md:flex`}
                    onClick={undefined}>
                        <i className="bi-list flex">{""}</i>
                </button>
            </div>
        </header>
    )
}