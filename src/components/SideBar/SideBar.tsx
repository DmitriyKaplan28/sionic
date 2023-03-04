import React from 'react';
import style from './SideBar.module.css'
import imageFree from "../../common/assets/images/imageFree.svg";
import imageSweetBackground from "../../common/assets/images/newCollectionSweets.jpg";
import {NewColletion} from "./NewCollection/NewColletion";

export const SideBar = () => {
    const backgroundStyleSweet = {
        backgroundImage: `url(${imageSweetBackground})`,
    };
    return (
        <div className={style.sideContainer}>
            <div className={style.sideBanner}>
                <img src={imageFree} alt="Image of free products" className={style.image}/>
                <h2 className={style.h2}>Получай товары БЕСПЛАТНО!</h2>
                <button className={style.btn}>
                    Узнать подробнее
                </button>
            </div>
            <NewColletion backgroundStyle={backgroundStyleSweet} />
        </div>
    );
};
