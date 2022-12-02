import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <div>
            <Header title={'This is my APP'}/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
