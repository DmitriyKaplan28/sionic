import React from 'react';
import style from './App.module.css';
import {Header} from "./components/Header/Header";
import {ShopWindow} from "./components/ShopWindow/ShopWindow";
import {SideBar} from "./components/SideBar/SideBar";
import {Footer} from "./components/Footer/Footer";
import {Basket} from "./components/Basket/Basket";
import {Delivery} from "./components/Delivery/Delivery";
import {OrdersHistory} from "./components/OrdersHistory/OrdersHistory";
import {Navigate, Route, Routes} from "react-router-dom"


function App() {
    return <div className={style.app}>
        <div className={style.content}>
            <div className={style.mainContent}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={"/products"}/>}/>
                    <Route path="/products" element={<ShopWindow/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/delivery" element={<Delivery/>}/>
                    <Route path="/ordershistory" element={<OrdersHistory/>}/>
                    <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                </Routes>
            </div>
            <SideBar/>
        </div>
        <Footer/>
    </div>
}


export default App;
