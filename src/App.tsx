import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {SideBlock} from "./components/SideBlock/SideBlock";
import {Footer} from "./components/Footer/Footer";

function App() {
    return <>
        <Header/>
        <MainBlock/>
        <SideBlock/>
        <Footer/>
    </>
}

export default App;