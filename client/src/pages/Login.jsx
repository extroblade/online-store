import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login} from "../http/userAPI";
import {Context} from "../index";
import {useNavigate} from "react-router";


const Login = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const click = async () => {
        try{
            await login(email, password)
            user.setUser(user);
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
            window.alert("Wrong email or password")
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section style={{height: "95vh"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11 ">
                        <div className="card text-black" style={{borderRadius: '25px'}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-0 mx-1 mx-md-4 mt-4 mx-4">
                                            Log in
                                        </p>

                                        <p className="d-flex justify-content-center align-items-center mx-4 mb-3">
                                            Don't have an account?
                                            <a href={REGISTRATION_ROUTE} className="nav-link p-lg-2">
                                                Sign up
                                            </a>
                                        </p>

                                        <form className="mx-5 mx-md-5 ">
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas"></i>
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

                                            <div className="d-grid gap-2" >
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={() => click()}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://media.istockphoto.com/id/485585797/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D0%BE%D0%BA-%D0%B1%D1%80%D1%8B%D0%B7%D0%B3.jpg?s=1024x1024&w=is&k=20&c=lu_rCaqK0JWxbbW1da_CYha_ShW-67TbYyU_Upp4nuQ="
                                            className="img-fluid"
                                            alt="Login"
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

export default Login;
