import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const Navbar = observer(() => {
    const {user} = useContext(Context)
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand " style={{fontFamily: 'fonts.googleapis.com/css?family=Roboto sans-serif'}} href={SHOP_ROUTE}>
                     Store
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {user.isAuth
                    ?
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <a className="nav-link" href={ADMIN_ROUTE}>Admin Panel</a>
                            <a className="nav-link" href={"#"} onClick={() => user.setIsAuth(false)}>Log out</a>
                        </div>
                    </div>
                    :

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <a className="nav-link" href={REGISTRATION_ROUTE}>Sign up</a>
                            <a className="nav-link" href={"#"} onClick={() => user.setIsAuth(true)}>Log in</a>
                        </div>
                    </div>

                }
            </div>
        </nav>

    );
});

export default Navbar;