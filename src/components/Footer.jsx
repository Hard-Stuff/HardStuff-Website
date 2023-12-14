import "./NavBarHeaderFooter.css";

import linkedin_icon from "../assets/icons/linkedin.png";
import email_icon from "../assets/icons/email.png";

const Footer = () => {
	return (
		<>
			<footer className="lock-footer" />
			<footer className="footer">
				<div className="content">
					<div className="footer-links">
						<a href="https://www.linkedin.com/company/hard-stuff">
							<img src={linkedin_icon} className="footer-link-img" alt="linkedin icon" />
						</a>
						<a href="mailto:hello@hard-stuff.com">
							<img src={email_icon} className="footer-link-img" alt="email icon" />
						</a>
					</div>
					<p>
						&copy; {new Date().getFullYear()} <span className="hardstuff">Hard Stuff</span>. All rights
						reserved.
						<br />
						<br />
						Hard Stuff is the trading name of <em>Hardware is Easy Ltd. #15281302</em>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
