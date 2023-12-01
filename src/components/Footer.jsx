import "./NavBarHeaderFooter.css"

const Footer = () => {
    return (
        <>
            <footer className="lock-footer" />
            <footer className="footer">
                <div className="content">
                    <div className="footer-links">
                        {/* <a href="#careers">Careers</a> */}
                        {/* <a href="#contact">Contact</a> */}
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} <span className="hardstuff">Hard Stuff</span>. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;