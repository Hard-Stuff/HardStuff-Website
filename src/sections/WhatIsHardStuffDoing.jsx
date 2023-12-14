import FlexBox from "../components/FlexBox";

// import local icons

export const WhatIsHardStuffDoing = (props) => {
	const elements = [
		{
			title: "Our work with hardware startups",
			content: (
				<p className="pillar-content">
					<span className="hardstuff-no-colour">Hard Stuff Changemakers</span> is our powerhouse to support
					hardware startups, guiding you from your earliest idea to Minimum Viable Product.
					<br />
					<br />
					We offer in-field testing support, rapid prototyping design and building, engineering expertise, and
					scaling support; enabling startups to create tangible, high-impact hardware solutions efficiently.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
				</p>
			),
		},
		{
			title: "Our work with incubators and investors",
			content: (
				<p className="pillar-content">
					We work closely with{" "}
					<span className="hardstuff-no-colour">Investors, Incubators, & Accelerators</span>
					, and with their startups, to support in-field testing to truly validate ideas. And we teach
					founders how to deliver true, immediate impact; proving prototypes as impactful solutions.
					<br />
					<br />
					This unlocks the next generation of hardware innovations that will solve massive global issues,
					which in turn unlocks new funding and growth cycles that will fuel building the future.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
				</p>
			),
		},
		{
			title: "Our championing of amazing hardware",
			content: (
				<p className="pillar-content">
					We make high-impact hardware companies great.
					<br />
					<br />
					We celebrate the amazing progress we've already made together (watch this space!).
					<br />
					<br />
					And through events, workshops, and public speaking we hope to inspire the next generation of
					entrepreneurs to build a World that they're excited by.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
				</p>
			),
		},
	];

	return (
		<>
			<div className="section">
				<div className="content">
					<h2 style={{ margin: "50px" }}>
						How does <span className="hardstuff">Hard Stuff</span> fit in with your World?
					</h2>
					<FlexBox defaultValue={0} elements={elements} />
					<br />
				</div>
			</div>
		</>
	);
};
