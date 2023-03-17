import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "../src/home/home";
import Header from "../src/Header/Header";
import Swiper from './Product/Product';
import Post from "./Allproductsimg/Allproducts";
import Offer from './Offers/Offer';
import NewProject from './newProjext/NewProject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <Header/>
    <Swiper/>
    <Post/>
    <Offer/>
    <NewProject/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
