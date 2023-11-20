import Image from "next/image"
import CustomButton from "../Button"
import NavItem from "./NavItem"
import { useEffect, useState } from "react"
import SwitchTheme from "../core/SwitchTheme"
import SwitchLang from "../core/SwitchLang"
import Link from "next/link"

export default function Navbar(props: any){
    const [showSideBar, setShowSideBar] = useState(false)
    
    return(
        <header className="w-full fixed pl-4 pr-3 py-3 flex items-center justify-center bg-light-gray/40 dark:bg-darkest/40 backdrop-blur-md border-black/10 dark:border-gray/10 border-b-[1px] z-[99]">
            <div className="flex justify-between items-center w-full max-w-6xl">
                <Link href={"/#home"}>
                    <Image 
                        src={"/pka_extended_logo.svg"} 
                        alt={"logo pka extend"}
                        height={26}
                        width={158}/>
                </Link>

                <div className="flex items-center md:hidden">
                    <NavItem 
                        label={"Accueil"} 
                        path={"/#home"}/>
                    <NavItem 
                        label={"Prestations"} 
                        path={"/#whatWeDo"}/>
                    <NavItem 
                        label={"Quelques réalisations"} 
                        path={"/#someRealizations"}/>
                    {/* <NavItem 
                        label={"Demander un devis"} 
                        path={"/#askForQuote"}
                        customClass="text-secondary bg-secondary/10 hover:bg-secondary hover:text-white"/> */}
                    <Link href={"/#askForQuote"}>
                        <CustomButton 
                            label={"Demander un devis"}
                            color="text-white dark:text-primary"
                            bgColor="bg-primary dark:bg-white"/>
                    </Link>
                    <SwitchTheme id={"theme-menu-desktop"}/>
                    {/* <CustomButton 
                        label={"Contactez nous"}
                        color="text-white"
                        bgColor="bg-primary"/> */}
                </div>

                <button 
                    className={`bg-primary dark:bg-white text-white dark:text-primary px-5 py-2.5 lg:px-4 mx-1 rounded-full font-medium hidden md:flex`}
                    onClick={()=> {setShowSideBar(true)}}>
                        <i className="bi-list flex">{""}</i>
                </button>

                {
                    showSideBar && 
                    <div className="fixed inset-0 bg-   /50 backdrop-blur-sm hidden md:flex justify-end z-[999]">
                            <div className="h-full bg-white dark:bg-darkest w-4/5 flex flex-col justify-start items-end p-3" id="sideBarContent">
                                <button 
                                    className={`bg-primary dark:bg-white text-white dark:text-primary  px-5 py-2.5 lg:px-4 mx-1 rounded-full font-medium hidden md:flex`}
                                    onClick={()=> {setShowSideBar(false)}}>
                                        <i className="bi-x flex">{""}</i>
                                </button>

                                <div className="w-full">
                                    <NavItem
                                        onclick={() => {setShowSideBar(false)}}
                                        customClass="w-full block my-4" 
                                        label={"Accueil"} 
                                        path={"/#home"}/>
                                    <NavItem
                                        onclick={() => {setShowSideBar(false)}}
                                        customClass="w-full block my-4" 
                                        label={"Prestations"} 
                                        path={"/#whatWeDo"}/>
                                    <NavItem
                                        onclick={() => {setShowSideBar(false)}}
                                        customClass="w-full block my-4" 
                                        label={"Quelques réalisations"} 
                                        path={"/#someRealizations"}/>
                                    <Link href={"/#askForQuote"}>
                                        <CustomButton 
                                            action={() => {setShowSideBar(false)}}
                                            label={"Demander un devis"}
                                            color="text-white dark:text-primary"
                                            bgColor="bg-primary dark:bg-white"/>
                                    </Link>
                                </div>

                                <div className="w-full flex justify-end h-auto">
                                    <SwitchTheme id={"theme-menu-phone"}/>
                                    {/* <SwitchLang/> */}
                                </div>
                            </div>
                    </div>
                }
            </div>
        </header>
    )
}