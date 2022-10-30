import React from 'react';
import style from "./NewCollection.module.css";

type styleType = {
    backgroundImage: string
}

type NewColletionPropsType = {
    backgroundStyle: styleType
}

export const NewColletion = ({backgroundStyle} : NewColletionPropsType) => {
    return (
        <button className={style.btnBanner} style={backgroundStyle}>
            Новая коллекция
        </button>
    );
};