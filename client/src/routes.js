import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import DevicePage from "./pages/DevicePage";
import {Navigate} from "react-router-dom";

export const authRoutes = [
    {path: ADMIN_ROUTE, element: <Admin/>, exact: true},
    {path: BASKET_ROUTE, element: <Basket/>, exact: true},
    {path: "*", element: <Navigate to="/shop" replace />, exact: true},
]

export const publicRoutes = [
    {path: SHOP_ROUTE, element: <Shop/>, exact: true},
    {path: LOGIN_ROUTE, element: <Login/>, exact: true},
    {path: REGISTRATION_ROUTE, element: <Login/>, exact: true},
    {path: DEVICE_ROUTE + '/:id' , element: <DevicePage/>, exact: true},
    {path: "*", element: <Navigate to="/shop" replace />, exact: true},
]