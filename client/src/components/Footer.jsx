import React from 'react';
import {observer} from "mobx-react-lite";

import footer from 'react-bootstrap'


const Footer = observer(() => {

    return (

        <footer className="text-center text-lg-start bg-dark text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-0 border-bottom">
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>Company name
                            </h6>
                            <p>
                                Simple online-store
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                            <h6 className="text-uppercase fw-bold mb-4 ">
                                Products
                            </h6>
                            <p>
                                <a href="#" className="text-reset ">React</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#" className="text-reset">Pricing</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4" >Contact</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i> tg: @extroblade</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://github.com/extroblade">extroblade</a>
            </div>
        </footer>
    );
});

export default Footer;