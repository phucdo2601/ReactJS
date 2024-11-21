import { IKImage } from 'imagekitio-react'
import React from 'react'

interface ImageCompProps {
    src: string;
    className?: string;
    w?: number;
    h?: number;
    alt?: string;
}

const ImageComp = ({
    src,
    className,
    w,
    h,
    alt
}: ImageCompProps) => {
  return (
    <>
        <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
                    src={import.meta.env.VITE_IK_URL_ENDPOINT + src} className={className} alt={alt}
                    loading='lazy' lqip={{
                        active: true, quality: 20
                    }}
                    width={w}
                    height={h}
                    />
    </>
  )
}

export default ImageComp