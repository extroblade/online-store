import React, {useContext, useEffect, useState} from 'react';

import NavbarStore from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        check().then(() => {
            user.setUser(true)
            user.setIsAuth(true)
        })
             .finally( () => setLoading(false))
    }, [])

    if(loading) return <Spinner animation={"border"} />

    return (
        <BrowserRouter>
            <NavbarStore/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;
