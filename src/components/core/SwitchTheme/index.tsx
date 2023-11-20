import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";
import style from './index.module.scss'


export default function SwitchTheme(props: {id: string}) {
  const {id} = props
    
  const { theme, setTheme } = useTheme();
  const {t} = useTranslation("common")
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState<string | undefined>(undefined)
  const handleChange = (value:'light' | 'dark' | 'system') => {
          setTheme(value)
    };

  const getIcon = (theme: string) => {
    const icons: any = {
      "system": "laptop",
      "light": "brightness-high",
      "dark": "moon"
    }

    return icons[theme] || "laptop"
  }

  useEffect(() => {
    setActiveTheme(theme)
  }, [theme])

  useEffect(()=> {
    if(isOpen == true){
      var elem = document.getElementById(id);
      if(typeof elem !== 'undefined' && elem !== null) {
        window.addEventListener('click', function(e){   
          if (!(elem!.contains(e.target as HTMLElement))){
              setIsOpen(false)
          } 
        });
      }
    }
})


  return (
    <div className={`relative inline-block text-left ${style.themeMenu}`} style={{textTransform: "capitalize"}} id={id}>
      <div className={style.preview}>
        <button 
          type="button"
          className="flex w-full items-center gap-x-1.5 rounded-md text-secondary px-3 py-2 text-sm" id="theme-button" 
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {setIsOpen(!isOpen)}}>
          <i className={`bi-${getIcon(activeTheme!)}`}>{""}</i>
        </button>
      </div>
      

      {
        isOpen &&
        <div className={`absolute right-0 z-10 mt-5 w-48 origin-top-right text-xs rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${style.menuButton}`} role="menu" aria-orientation="vertical" aria-labelledby="theme-button">
          <div className="py-1" role="none">
            <button 
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray flex w-full items-center px-4 py-2 text-sm " 
              role="menuitem" 
              id="theme-item-0"
              onClick={() => {handleChange('light')}}>
                <i className={`bi-${getIcon('light')}`}>{""}</i>
                {t('light')}
            </button>

            <button 
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray flex w-full items-center px-4 py-2 text-sm" 
              role="menuitem" 
              id="theme-item-1"
              onClick={() => {handleChange('dark')}}>
                <i className={`bi-${getIcon('dark')}`}>{""}</i>
                {t('dark')}
            </button>

            <button 
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray flex w-full items-center px-4 py-2 text-sm" 
              role="menuitem" 
              id="theme-item-2"
              onClick={() => {handleChange('system')}}>
                <i className={`bi-${getIcon('system')}`}>{""}</i>
                {t('system')}
            </button>

          </div>
        </div>
        }
</div>
  );
}