import React from 'react';

type FooterIconPropsType = {
    url: string
    imageSrc: string
    alt: string
}

export const FooterIcon = ({url, imageSrc, alt}: FooterIconPropsType) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <img src={imageSrc} alt={alt}/>
        </a>
    );
};