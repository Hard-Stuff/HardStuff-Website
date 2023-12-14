import "../App.css";

import { OurApproach } from "../sections/OurApproach";
import { WhatIsHardStuffDoing } from "../sections/WhatIsHardStuffDoing";
import BuildTestXRepeat from "../components/BuildTestXRepeat";

const Home = (props) => {
	const { isMobile } = props;

	return (
		<div className="App">
			<header
				style={{
					alignItems: "center",
					padding: "calc(25vh - 140px) 0 15% 0",
				}}
			>
				<h1>
					<span className="hardstuff">Hard Stuff </span>
				</h1>
				<BuildTestXRepeat />
			</header>
			<div className="section">
				<div className="content">
					<h2>
						<span className="hardstuff">Hard Stuff</span> builds hardware to fix hard problems.
					</h2>
					<p>
						Climate change, deforestation, food scarcities, natural disasters, and other global challenges
						demand rapid and impactful solutions, so we work with High Value to Society hardware startups
						that make a real difference.
					</p>
					<p>
						We do this through helping innovators to validate their problem/solution via effective in-field
						testing, and through building early prototypes to prove that the product works, all this by
						building and iterating incredibly fast thanks to our minimalist approach.
					</p>
					<p>
						This gives super-fast insights, confidence, and technical progress which readies them for their
						next stage of product development, investment, scale, and impact.
					</p>
				</div>
			</div>
			<OurApproach isMobile={isMobile} />
			<WhatIsHardStuffDoing isMobile={isMobile} />
			{/* <ContactUs isMobile={isMobile} /> */}
		</div>
	);
};

export default Home;
