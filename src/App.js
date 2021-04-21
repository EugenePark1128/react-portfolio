import React, { Component, useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

function App () {

    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
      </div>
    );
}

export default App;
