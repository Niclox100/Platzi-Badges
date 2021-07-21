import React from "react";
import Footer from "./Footer";

import NavBar from "./Navbar"

function Layout(props)
{
    return (
        <React.Fragment>
            <NavBar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}
export default Layout