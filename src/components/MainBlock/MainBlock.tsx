import React from 'react';
import style from './MainBlock.module.css'
import {Product} from "../Product/Product";

export const MainBlock = () => {
    return (
        <div className={style.mainContainer}>
            {/*<Product
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm0G_zFpfmWLTCd7CQcTCIjWVKR0rhevWor5yXrmT&s'}
                category={'category'} name={'name'} price={'price'} oldPrice={'oldPrice'} discount={'discount'}/>*/}
            Products
        </div>
    );
};
