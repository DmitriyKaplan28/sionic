import React from 'react';
import style from './Basket.module.css'
import deleteIcon from '../../common/assets/images/deleteIcon.png'
import {NavLink} from "react-router-dom";


export const Basket = () => {
    return (
        <div className={style.basketContainer}>
            <div className={style.basketHeader}>
                <p className={style.basketTitle}>Корзина</p>
                <p className={style.clearBasket}>Очистить корзину</p>
            </div>
            <div className={style.basketContent}>
                <div className={style.basketContentTop}>
                    <div>
                        <p>Стоимость корзины:</p>
                        <h3>100 &#8381;</h3>
                    </div>
                    <NavLink to={'/delivery'}>
                        <button className={style.btnBuy}>Оформить</button>
                    </NavLink>
                </div>
                <div className={style.basketItem}>
                    <img className={style.itemImg}
                         src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm0G_zFpfmWLTCd7CQcTCIjWVKR0rhevWor5yXrmT&s'}
                         alt=""/>
                    <p className={style.itemTitle}>product</p>
                    <div className={style.itemNumber}>
                        <span className={style.basketItemSpan}>-</span>
                        <input className={style.basketItemInput} type="number" defaultValue={1}/>
                        <span className={style.basketItemSpan}>+</span>
                    </div>
                    <p className={style.itemPrice}>100 &#8381;</p>
                    <span className={style.basketItemSpan}>
                    <img src={deleteIcon} alt="delete icon"/>
                    </span>
                </div>
            </div>
        </div>
    );
};
