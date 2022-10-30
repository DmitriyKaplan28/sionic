import React from 'react';
import style from './Basket.module.css'
import deleteIcon from '../../common/assets/images/deleteIcon.png'


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
                    <button className={style.btnBuy}>Оформить</button>
                </div>
                <div className={style.basketItem}>
                    <img className={style.itemImg}
                         src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm0G_zFpfmWLTCd7CQcTCIjWVKR0rhevWor5yXrmT&s'}
                         alt=""/>
                    <p className={style.itemTitle}>product</p>
                    <div className={style.itemNumber}>
                        <span>-</span>
                        <input className={style.basketItemInput} type="number" defaultValue={1}/>
                        <span>+</span>
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
