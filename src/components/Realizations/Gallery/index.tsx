import React, { useState } from 'react';
import Image from "next/image"
import style from './index.module.scss'

function Gallery(props: {folder: string}) {
    const { folder } = props
    const images = require.context(`../../../../public/belleville`, true);
    const imageList = images.keys().map((image: any) => images(image));
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
        className={`py-10  ${isOpen ? style.galleryOpen : style.galleryClose}`}>
                <span className="transition-all relative flex h-10 w-10 z-50 cursor-pointer pointer-events-auto" onClick={() => {setIsOpen(!isOpen)}}>
                    <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-10 bg-secondary/50"></span>
                </span>
        {
            imageList.slice(0, 3).map((image: any, index: number) => (
                <div className="transition-all aspect-[1/1.33] mt-4 md:mt-2 rounded-xl flex overflow-hidden pointer-events-none shrink-0" key={index}>
                  <Image 
                      fill
                      className="object-cover object-bottom"
                      src={image.default}
                      quality={75}
                      alt={"Cuisine intérieure moderne"}/>
              </div>
            ))
        }
    </div>
  );
}

export default Gallery;