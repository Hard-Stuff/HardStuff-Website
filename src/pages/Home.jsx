import "../App.css";

import { MinimumViableProduct } from "./Home-sections/MinimumViableProduct";
import { WhatIsHardStuffDoing } from "./Home-sections/WhatIsHardStuffDoing";
import BuildTestXRepeat from "../components/BuildTestXRepeat";
import { MakeTestTeach } from "./Home-sections/MakeTestTeach";

const Home = (props) => {
	return (
		<div className="App">
			<section>
				<h1 className="big-h1">
					<span className="hardstuff">Hard Stuff </span>
				</h1>
				<BuildTestXRepeat />
			</section>
			<section>
				<div className="content">
					<h2>
						<span className="hardstuff">Hard Stuff</span> works with hardware startups fixing hard problems.
					</h2>
				</div>

				<div className="content">
					<p>
						Hard Stuff is the prototyping and testing partner for sustainability and impact-focussed
						hardware startups. We're based in the UK, acting as the hands-on technical de-risking partner to
						see the world's toughest challenges solved through hardware innovations.
					</p>
				</div>
				<div className="content">
					<p>
						We do this because we believe that the majority of the signifcant challenges we face today are
						in the physical space: Climate change, deforestation, food & water scarcities, natural
						disasters, plastic in our oceans, the list goes on. Yet there is a serious lack of support
						available for hardware startups that aim to address these high-impact areas.
					</p>
				</div>
			</section>
			<MakeTestTeach />
			<MinimumViableProduct />
			<WhatIsHardStuffDoing />
		</div>
	);
};

export default Home;
