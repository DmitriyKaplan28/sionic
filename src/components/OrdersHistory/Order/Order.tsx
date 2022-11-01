import React from 'react';
import style from './Order.module.css'

/*type OrderPropsType = {
    orderInfo: OrderInfo;
};

type OrderInfo = {
    id: number;
    date: string;
    name: string;
    phone: string;
    address: string;
    total: number;
    cartInfo: CartItemInfo[];
};*/


export const Order = () => {
    return (
        <div className={style.orderContainer}>
            <div className={style.orderHeader}>
                <img alt="order"/>
                <span className={style.orderName}>Заказ №2</span>
                <span className={style.orderDate}>31.10.2022</span>
                <span>Подробнее</span>
            </div>
            {/*{showDetails && (
                <CartItemList cartData={orderInfo.cartInfo} readonly={true}/>
            )}*/}
            <div className={style.row}>
                <div className={style.infoBlock}>
                    <span>Статус заказа</span>
                    <span>Оплачен/Завершен</span>
                </div>
                <div className={style.infoBlock}>
                    <span>Номер заказа</span>
                    <span>1</span>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.infoBlock}>
                    <span>Кол-во товаров</span>
                    <span>4</span>
                </div>
                <div className={style.infoBlock}>
                    <span>Стоимость заказа</span>
                    <span>50</span>
                </div>
                <div className={style.infoBlock}>
                    <span>Адрес доставки</span>
                    <span>Адрес заказа</span>
                </div>
            </div>
        </div>
    );
};
