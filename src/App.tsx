import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {SideBlock} from "./components/SideBlock/SideBlock";
import {Footer} from "./components/Footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import {Basket} from "./components/Basket/Basket";
import {Delivery} from "./components/Delivery/Delivery";
import {OrdersHistory} from "./components/OrdersHistory/OrdersHistory";

function App() {
    return <>
        <Header/>
        <div>
            <Routes>
                <Route path="/" element={<MainBlock />}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/ordershistory" element={<OrdersHistory/>}/>
                <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
        <SideBlock/>
        <Footer/>
    </>
}

export default App;