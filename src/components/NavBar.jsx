
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
                <a href="/">
                    <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Let's build the Hard Stuff!" height="60px"
                        title="Let's build the Hard Stuff!" style={{ paddingLeft: "20px" }} />
                </a>
                {/* {!isMobile && <EmailUsButton style={{ position: "absolute", top: "5px", right: "50px" }} />} */}
                <ul style={{ margin: "30px" }} >
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