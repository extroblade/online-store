import React from 'react';

import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";


const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Routes>
                {authRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;