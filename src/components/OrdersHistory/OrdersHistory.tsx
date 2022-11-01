import React, {Fragment} from 'react';
import style from './OrdersHistory.module.css'
import {Order} from "./Order/Order";

export const OrdersHistory = () => {
    return (
        <Fragment>
            <span className={style.title}>История заказов</span>
            <br/>
            <div className={style.ordersList}>
                {/*{ordersNoFound}
                {orderHistoryList.length > 0 &&
                    orderHistoryList.map((item) => {
                        return <HistoryItem key={item.id} orderInfo={item} />;
                    })}*/}
                <Order/>
            </div>
        </Fragment>
    );
};
