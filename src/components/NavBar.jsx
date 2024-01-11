import { Link } from "react-router-dom";
import "./NavBarHeaderFooter.css";

function NavBar(props) {
	const { pages } = props;

	return (
		<nav>
			<div className="padded-header" />
			<header className="lock-header">
				<a href="/">
					<img
						src={process.env.PUBLIC_URL + "/logo.svg"}
						alt="Let's build the Hard Stuff!"
						height="60px"
						title="Let's build the Hard Stuff!"
						style={{ paddingLeft: "20px" }}
					/>
				</a>
				<ul style={{ margin: "30px" }}>
					{pages.map((each) => (
						<Link to={each.endpoint} key={each.endpoint} className="header-link">
							{each.title}
						</Link>
					))}
				</ul>
			</header>
		</nav>
	);
}
export default NavBar;
