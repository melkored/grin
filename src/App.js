import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Works from "./components/works";
import Images from "./components/images";
import Video from "./components/video";
import Community from "./components/community";
import Grin from "./components/grin";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <div className="grid-container">
                <Navbar/>
                <Header/>
                <Works/>
                <Images/>
                <Video/>
                <Community/>
                <Grin/>
                <Footer/>
            </div>
        );
    }
}

export default App;
