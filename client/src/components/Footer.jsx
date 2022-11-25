import React from 'react';
import {observer} from "mobx-react-lite";

const Footer = observer(() => {

    return (

        <footer className="text-center text-lg-start bg-dark text-muted p4">
            <div className="text-center p-4">
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://github.com/extroblade">extroblade</a>
            </div>
        </footer>
    );
});

export default Footer;
