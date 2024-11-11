import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <center>
    <Card path = "apple.jpeg"name ="apple" fancyname="APPLE" bio = "doctor away"/>
    <Card  path = "mango.jpeg" name ="mango"  fancyname="MANGO" bio= "king"/>
    <Card path = "orange.jpeg" name ="orange" fancyname="ORANGE" bio= "citric" />
  </center>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

