import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Main from "../layout/Main";
import PrivateRouter from "./PrivateRouter";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile /> </PrivateRouter>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/wallet',
                element: <PrivateRouter><Wallet /></PrivateRouter>
            },
        ]
    }
])