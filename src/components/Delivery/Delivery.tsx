import React, {Fragment} from 'react';
import style from './Delivery.module.css'
import OrderForDelivery from "./OrderForDelivery/OrderForDelivery";
import {RootState} from "../../store/orm/models/redux-orm-store";
import {useSelector} from "react-redux";


export const Delivery = () => {
    const cartData = useSelector((state: RootState) => state.shop.cart);
    const totalPrice = useSelector((state: RootState) => state.shop.total);

    return (
        <Fragment>
            <span className={style.headerTitle}>Корзина</span>
            <br/>
            {cartData.length === 0 && <span>Вы не выбрали ни одного товара</span>}
            {cartData.length > 0 && (
            <div className={style.deliveryContainer}>
                <div className={style.deliveryList}>
                    <span>Name of order</span>
                    <div className={style.info}>
                        <span>Стоимость корзины:</span>
                        <span className={style.total}>
                <b>{totalPrice} &#8381;</b>
              </span>
                    </div>
                    <button type="button">
                        Оформить
                    </button>
                </div>
                <div className={style.ordersList}>
                    {cartData.length > 0 &&
                        cartData.map((i) => {
                            const key =
                                i.product_id.toString() + i.product_variation_id.toString();
                            return <OrderForDelivery key={key} cartItemData={i} readonly={false}/>;
                        })}
                </div>
            </div>
             )}
        </Fragment>
    );
};
