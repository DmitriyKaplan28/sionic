import React from 'react';
import style from './MainBlock.module.css'
import {Product} from "../Product/Product";

export const OrdersHistory = () => {
    return (
        <div className={style.mainContainer}>
            <Product
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm0G_zFpfmWLTCd7CQcTCIjWVKR0rhevWor5yXrmT&s'}
                category={'test'} name={'test'} price={'test'} oldPrice={'test'} discount={'test'}/>

        </div>
    );
};
