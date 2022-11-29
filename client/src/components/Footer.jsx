import React from 'react';
import {observer} from "mobx-react-lite";

const Footer = observer(() => {

    return (
        <nav className="navbar fixed-bottom navbar-light bg-dark">
            <div className="text-center p-4">
                © 2022 Copyright:
                <a className="text-center navbar-brand" href="https://github.com/extroblade">extroblade</a>
            </div>
        </nav>
    );
});

export default Footer;
