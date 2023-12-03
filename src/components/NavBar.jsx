
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "./NavBarHeaderFooter.css"

function NavBar(props) {
    const { pages } = props;
    let thisLocation = useLocation();

    useEffect(() => {
        console.log(thisLocation.pathname)
    }, [])
    return (
        <nav>
            <div className="padded-header" />
            <header className="lock-header">
                <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Let's build the Hard Stuff!" height="60px" style={{paddingLeft: "20px"}} />
                {/* {!isMobile && <EmailUsButton style={{ position: "absolute", top: "5px", right: "50px" }} />} */}
                <ul style={{ right: "0px" }} >
                    {pages.map((each) => (
                        <Link to={each.endpoint} key={each.endpoint} className="header-link">
                            {each.title}
                        </Link>
                    ))}
                </ul>
            </header>
        </nav>)
}
export default NavBar;