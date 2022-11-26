import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration} from "../http/userAPI";
import {Context} from "../index";
import {useNavigate} from "react-router";

const Registration = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const click = async () => {
        try{
            await registration(email, password)
            user.setUser(user);
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: '25px'}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-0 mx-1 mx-md-4 mt-4 mx-4">Sign up</p>
                                        <p className="d-flex justify-content-center align-items-center mx-4  ">
                                            Already have an account?
                                            <a
                                                href={LOGIN_ROUTE}
                                                className="nav-link p-lg-2"
                                            >Log in</a>
                                        </p>


                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-user fa-lg fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        placeholder={"Your Name"}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-envelope fa-lg  fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                        placeholder={"Your Email"}
                                                        value = {email}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-lock fa-lg  fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="form3Example4c"
                                                        className="form-control"
                                                        placeholder={"Password"}
                                                        value = {password}
                                                        onChange={e => setPassword(e.target.value)}

                                                    />
                                                </div>
                                            </div>

                                            {/*<div className="d-flex flex-row align-items-center mb-3">*/}
                                            {/*    <i className="fas fa-key fa-lg  fa-fw"></i>*/}
                                            {/*    <div className="form-outline flex-fill mb-0">*/}
                                            {/*        <input*/}
                                            {/*            type="password"*/}
                                            {/*            id="form3Example4cd"*/}
                                            {/*            className="form-control"*/}
                                            {/*            placeholder={"Repeat your password"}*/}

                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value=""
                                                       id="form2Example3c"/>
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-grid gap-2" >
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={() => click()}
                                                >
                                                    Register
                                                </button>
                                            </div>

                                        </form>

                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="Registration"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Registration;
