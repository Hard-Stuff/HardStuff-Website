
import { Link } from "react-router-dom";
import React from "react";
import "./NavBarHeaderFooter.css"

function NavBar(props) {
    const { pages } = props;
    return (
        <nav style={{ backgroundColor: "white" }}>

            <header className="lock-header">
                <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Let's build the Hard Stuff!" width="60px" />
                {/* {!isMobile && <EmailUsButton style={{ position: "absolute", top: "5px", right: "50px" }} />} */}
                <ul style={{ right: "0px" }} >
                    {pages.map((each) => (
                        <Link to={each.endpoint} activeStyle>
                            {each.title}
                        </Link>
                    ))}
                </ul>
            </header>
        </nav>)
}
export default NavBar;