import React from 'react';
import style from './ShopWindow.module.css'
import {Product} from "./Product/Product";

export const ShopWindow = () => {
    return (
        <>
            <section className={style.categoriesContainer}>
                <h2 className={style.categories}>Категории товаров</h2>
                <button className={style.btnSettings}>Настройки</button>
                <div className={style.categoriesList}>
                    <button className={style.btnCategory}>Имя категории</button>
                </div>
            </section>

            <section className={style.productsContainer}>
                <ul className={style.productsList}>
                    <Product
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm0G_zFpfmWLTCd7CQcTCIjWVKR0rhevWor5yXrmT&s'}
                        category={'category'} name={'name'} price={'price'} oldPrice={'oldPrice'}
                        discount={'discount'}/>
                </ul>
                <button className={style.btnLoadMore}>Показать больше товаров</button>
            </section>
        </>
    );
};
