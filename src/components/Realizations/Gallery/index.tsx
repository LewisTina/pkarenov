import Image from "next/image"
import styles from './index.module.scss'
import Link from "next/link";

function Gallery(props: {folder: __WebpackModuleApi.RequireContext, projectId: string}) {
  const { folder, projectId } = props
  const imageList = folder.keys().map((image: any) => folder(image));

  return (
    <Link href={"/showroom/" + projectId} className={`cursor-pointer pointer-events-auto my-16 ${styles.galleryClose}`}>
        {
            imageList.slice(0, 3).map((image: any, index: number) => (
              <div className="transition-all flex pointer-events-none select-none" key={index}>
                  <Image 
                      className=""
                      src={image.default}
                      height={500}
                      width={500}
                      quality={75}
                      alt={`image projet ${index}`}/>
              </div>
            ))
        }
        <span className="transition-all relative flex h-5 w-5 z-50">
            <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-secondary">
            </span>
        </span>
    </Link>
  );
}

export default Gallery;