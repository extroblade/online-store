import React, {useContext} from 'react';
import {Context} from "../index";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router";
import {logout} from "../http/userAPI";


const Navbar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    // useEffect(() => {
    //
    // }, [user.isAuth])


    const click = () => {
        if (window.confirm("Are you sure?")) {
            logout().then(() => {
                user.setUser(false)
                user.setIsAuth(false)
                navigate(SHOP_ROUTE)
            })
        }
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid px-0">
                <a
                    className="navbar-brand mx-2 px-2"
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
                    <div className="collapse navbar-collapse my-2" id="navbarNav">
                        <div className="navbar-nav" style={{marginLeft: "auto"}}>
                            <a className="btn btn-dark" href={BASKET_ROUTE}>Basket</a>
                            <a className="btn btn-dark" href={ADMIN_ROUTE}>Admin Panel</a>
                            <button
                                className="btn btn-dark"
                                onClick={() => click()}
                            >
                                Log out
                            </button>
                        </div>
                    </div>
                    :
                    <div className="collapse navbar-collapse my-2" id="navbarNav">
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
