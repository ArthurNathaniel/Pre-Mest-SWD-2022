import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainContent from './MainContent';


function Hero(){
  return(
  <div>
      <Header/>
      <MainContent/>

  </div>
  )
}
ReactDOM.render(<Hero />, document.getElementById("root"));