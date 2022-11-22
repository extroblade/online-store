import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";


const Navbar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()


    const logout = () => {
        if (window.confirm("Are you sure?")){
            user.setUser(null)
            user.setIsAuth(false)
            navigate(SHOP_ROUTE)
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a
                    className="navbar-brand mx-2"
                    style={{fontFamily: 'fonts.googleapis.com/css?family=Roboto sans-serif'}}
                    href={SHOP_ROUTE}
                >
                     StormStore
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {user.isAuth
                    ?
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <a className="nav-link" href={BASKET_ROUTE}>Basket</a>
                            <a className="nav-link" href={ADMIN_ROUTE}>Admin Panel</a>
                            <button
                                className="btn btn-dark"
                                onClick={() => logout()}

                            >
                                Log out
                            </button>
                        </div>
                    </div>
                    :

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <a className="nav-link" href={LOGIN_ROUTE}>Log in</a>
                            <a className="nav-link" href={REGISTRATION_ROUTE}>Sign up</a>
                        </div>

                    </div>

                }
            </div>
        </nav>
    );
});

export default Navbar;