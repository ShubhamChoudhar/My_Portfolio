import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const AppLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        
   );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body/>
            },

            {
                path: "/about",
                element: <About/>
            },

            {
                path: "/projects",
                element: <Projects/>
            },

            {
                path: "/contact",
                element: <Contact/>
            },

        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router = {appRouter} />);