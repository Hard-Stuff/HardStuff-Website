import "./NavBarHeaderFooter.css";

// import linkedin_icon from "../assets/icons/linkedin.png";
// import email_icon from "../assets/icons/email.png";

const Footer = () => {
	return (
		<>
			<footer className="lock-footer" />
			<footer className="footer">
				<div className="content">
					Find us on <a href="https://www.linkedin.com/company/hard-stuff">LinkedIn</a> or email us at{" "}
					<a href="mailto:hello@hard-stuff.com">hello@hard-stuff.com</a>
					{/* <img src={linkedin_icon} className="footer-link-img" alt="linkedin icon" /> */}
					{/* <img src={email_icon} className="footer-link-img" alt="email icon" /> */}
					<br />
					<br />
					<p>
						&copy; {new Date().getFullYear()} <span className="hardstuff">Hard Stuff</span>. All rights
						reserved.
						<br />
						<br />
						Hard Stuff is the trading name of <em>Hardware is Easy Ltd. #15281302</em><br />
                        Based in London, UK.
					</p>
					<br />
				</div>
			</footer>
		</>
	);
};

export default Footer;
