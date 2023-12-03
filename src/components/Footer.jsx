import { Link } from "react-router-dom";
import "./NavBarHeaderFooter.css"

import linkedin_icon from "../assets/icons/linkedin.png";

const Footer = () => {
    return (
        <>
            <footer className="lock-footer" />
            <footer className="footer">
                <div className="content">
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/company/hard-stuff">
                            <img src={linkedin_icon} height="32px" />
                        </a>

                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} <span className="hardstuff">Hard Stuff</span>. All rights
                        reserved.
                        <br />
                        <br />
                        Hard Stuff is the trading name of <em>
                            Hardware is Easy Ltd. #15281302
                        </em>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;