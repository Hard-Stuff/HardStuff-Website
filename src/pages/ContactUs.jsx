import React from "react";

import FlexBox from "../components/FlexBox";

const ContactUs = (props) => {
	const elements = [
		{
			title: "High Impact Startup",
			content: (
				<p className="pillar-content">
					We work with entrepreneurs, hardware startups and young companies to validate the problems they're
					solving and their solution, through in-field testing and bootstrapped prototyping.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
					<br />
					Let's see what we can build together.
				</p>
			),
		},
		{
			title: "Incubator",
			content: (
				<p className="pillar-content">
					We want to work with you to show your entrepreneurs and startups that a hardware proof of concept
					prototype can be as quick and easy as software.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
					<br />
					Let's see what we can create together.
				</p>
			),
		},
		{
			title: "Investor",
			content: (
				<p className="pillar-content">
					We want to work with you and your hardware startups to validate the value propositions through
					in-field testing, bootstrapped prototyping, and impact workshops.
					<br />
					<br />
					<button>
						<a href="https://calendly.com/hello-hard-stuff/20-min-intro">Book a call</a>
					</button>
					<br />
					Let's see what we can create together.
				</p>
			),
		} /*        {
            title: "Fund of Funds",
            content: (
                <p className="pillar-content">
                    We’re building a high-impact-only technical incubator, applying our signature impact proposition
                    approach with game changing hardware-centric funding.
                    <br />
                    <br />
                    <button

                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shrbZnFcrsSN1yI9l">Express your interest</a>
                    </button>
                    and let's make an amazing World together.
                </p>
            ),
        }, */,
	];

	return (
		<>
			<section>
				<div className="content">
					<h1 className="hardstuff-no-colour">Contact us</h1>
					<span>
						We work with ambitious hardware startups that are changing the World!
						<br />
						And we're partnering with their key stakeholders - such as suppliers and investors - to unlock a
						safe, clean, sustainable planet.
					</span>
				</div>
				<div className="content">
					<h3 style={{ margin: "50px" }}>I am a...</h3>
					<FlexBox defaultValue={0} elements={elements} />
					<br />
					<div className="pillar-content">
						Or you can
						<a href="mailto:hello@hard-stuff.com">
							<button style={{ fontWeight: "light" }}>send us an email</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
