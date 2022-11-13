import React from 'react';

import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>


        </div>
    );
};

export default App;

// style={{backgroundColor: "#31333b"}}