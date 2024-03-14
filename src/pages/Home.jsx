import "../App.css";

import { MinimumViableProduct } from "./Home-sections/MinimumViableProduct";
import { WhatIsHardStuffDoing } from "./Home-sections/WhatIsHardStuffDoing";
import BuildTestXRepeat from "../components/BuildTestXRepeat";
import { MakeTestTeach } from "./Home-sections/MakeTestTeach";
import ItsTimeToBuild from "../components/ItsTimeToBuildX";

const Home = (props) => {
	return (
		<div className="App ">
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
						hardware startups in the UK. We build, test, and teach, all to see the world's toughest
						challenges solved through hardware innovations.
					</p>
				</div>
				<div className="content">
					<p>
						<span className="hardstuff-no-colour">Physical World, Physical Problems.</span>
						<br />
						And yet there is a serious lack of support available for hardware startups that aim to address
						these high-impact areas.
					</p>
				</div>
			</section>
			<section>
				<ItsTimeToBuild />
			</section>
			<MakeTestTeach />
			<MinimumViableProduct />
			<WhatIsHardStuffDoing />
		</div>
	);
};

export default Home;
