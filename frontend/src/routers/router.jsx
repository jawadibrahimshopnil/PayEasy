import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from './../Pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>
        // children: [
        //     {
        //         path: '/',
        //         element: <
        //     }
        // ]
    },
]);