import React from "react";
import "./styles/Footer.css"

class Footer extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div className="footer">
                    <p>TechLove 2020 Todos los derechos reservados</p>
                    <p>Designed by Nico</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer