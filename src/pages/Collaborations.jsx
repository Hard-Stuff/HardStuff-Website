import React from "react";

const Collaborations = (props) => {
	const elements = [
		{
			title: "the Impact Accelerator by ASquared",
			content: (
				<p className="pillar-content">
					ASquared's six-month remote-first Impact Accelerator is back for round two, supporting 20+ pre-seed
					UK startups with genuine positive impact goals aligned with the UN SDGs.
					<br />
					<br />
					The program offers bespoke mentorship, networking, and a unique chance to pitch for investment from
					ASquared at the Funding Show. Mentors include industry veterans like Dave Allison, VP Engineering at
					OVO, and Kristina Pereckaite, Managing Director of South East Angels.
					<br />
					<br />
					Startups already in the Impact Accelerator cohort benefit from a unique discount with Hard Stuff
					saving up to 20% on the milestone rates for building hardware prototypes and conducting effective
					testing. And if you've worked with Hard Stuff already to build out your first demonstrable prototype
					then get a £1,000 discount on the Impact Accelerator's regular membership fees if accepted into
					their Cohort 2.
					<br />
					<br />
					<a href="https://ia.asquared.uk/" style={{ fontFamily: "inherit" }}>
						<button>Find out more about the Impact Accelerator</button>
					</a>
				</p>
			),
			logo: "https://assets-global.website-files.com/653259e749830c70453b3221/65538b711d8c2c8b076473a6_Master%20IA%20logo%20purp%20blue-close-p-500.png",
		},
		{
			title: "hardware.london",
			content: (
				<p className="pillar-content">
					Hardware.London is a community of hardware innovators, small businesses, and advocaters for making
					things that solve real problems. We're based in London where we run events, and team up with
					sponsors and speakers to shake up and champion the industry!
					<br />
					<br />
					Let's build!
					<a href="https://hardware.london/" style={{ fontFamily: "inherit" }}>
						<button>Find out more about hardware.london</button>
					</a>
				</p>
			),
		},
	];

	return (
		<>
			<section>
				<div className="content">
					<h1 className="hardstuff-no-colour">Collaborations</h1>
					We've found that true innovation and impact comes from multiple great teams striving for a common
					goal. And so we've partnered up with the fantastic businesses below to provide joint commitments to
					give impactful start-ups the best chances to achieve the amazing.
				</div>
			</section>
			{elements.map((elem, idx) => (
				<section className={`${idx % 2 ? "" : "flip-colours"}`}>
					{/* <h3 style={{ margin: "50px" }}>Learn more about our collaborators here</h3> */}
					<div key={idx} className="content">
						<span>
							{elem.logo ? (
								<img src={elem.logo} style={{ height: "1.5em" }} alt={`logo of ${elem.title}`} />
							) : (
								""
							)}
							<h2>{elem.title}</h2>
						</span>
						{elem.content}
					</div>
				</section>
			))}
		</>
	);
};

export default Collaborations;
