import React from 'react';
import style from './Header.module.css'
import {Link, NavLink} from "react-router-dom";
import placeIcon from '../../common/assets/images/place.svg'
import basketIcon from '../../common/assets/images/basket.svg'
import avatarIcon from '../../common/assets/images/avatar.png'
import {ReactComponent as SearchIcon} from '../../common/assets/images/searchIcon.svg';


export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <Link to="/" className={style.logo}>React</Link>
            <div className={style.country}>
                <img src={placeIcon} alt={'location'} className={style.placeIcon}/>
                <div className={style.countryName}>Город</div>
            </div>
            <div className={style.searchBar}>
                <input type="text" name="search" className={style.inputSearch}
                       placeholder="Поиск бренда, товара, категории..."/>
                <button type="button" className={style.btnSearch}>
                    <SearchIcon/>
                </button>
            </div>
            <NavLink to={"/basket"}>
                <div className={style.basket}>
                    <img src={basketIcon} alt={'basket'} className={style.basketIcon}/>
                    <div className={style.count}>10+</div>
                </div>
            </NavLink>
            <NavLink to={'/ordershistory'}>
                <div className={style.avatar}>
                    <img src={avatarIcon} alt="user avatar" className={style.avatarIcon}/>
                </div>
            </NavLink>
        </div>
    );
};
