import { Link, useLocation } from "react-router-dom";
import "./NavBarHeaderFooter.css";

function NavBar(props) {
	const { pages } = props;
	const location = useLocation(); // Using useLocation hook

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
				<ul style={{ margin: "20px" }}>
					{pages.map((each) => (
						<Link
							to={each.endpoint}
							key={each.endpoint}
							className="header-link"
							style={{
								borderTop: location.pathname === each.endpoint ? "white solid 1px" : "",
								borderBottom: location.pathname === each.endpoint ? "white solid 1px" : "",
							}}
						>
							{each.title}
						</Link>
					))}
				</ul>
			</header>
		</nav>
	);
}
export default NavBar;
