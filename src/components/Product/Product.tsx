import React from 'react';
import style from './Product.module.css'

type ProductPropsType = {
    image: string
    category: string
    name: string
    price: string
    oldPrice: string
    discount: string
}

export const Product = ({image, category, price, name, oldPrice, discount}: ProductPropsType) => {
    return (
        <div className={style.productContainer}>
            <div className={style.productDescription}>
                <div>
                    <img src={image} alt={'Picture of product'} className={style.img}/>
                    <div className={style.category}>{category}</div>
                </div>
                <div className={style.name}>{name}</div>
                <div className={style.price}>{price}</div>
                <div className={style.oldPrice}>{oldPrice}</div>
                <div className={style.discount}>{discount}</div>
            </div>
            <button className={style.button}>Добавить в корзину</button>
        </div>
    );
};
