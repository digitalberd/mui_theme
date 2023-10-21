import React from 'react';
import './App.css';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import MainArea from "./components/MainArea/MainArea";
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
      <>
        <BrowserRouter>
          <header>
            <HeaderComponent />
          </header>
          <MainArea />
          <FooterComponent />
        </BrowserRouter>
      </>
  );
}


export default App;
