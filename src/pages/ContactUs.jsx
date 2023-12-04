import React, { } from "react";
import { Widget } from '@typeform/embed-react'


import FlexBox from "../components/FlexBox";

const ContactUs = (props) => {
    const { isMobile } = props;

    const elements = [
        {
            title: "High Impact Startup",
            content: (
                <p className="pillar-content">
                    We work with high-impact hardware startups and young companies like yours to validate your impact
                    propositions, through in-field testing and bootstrapped prototyping.
                    <br />
                    <br />
                    <button

                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shrPaJMAuX4C4WIXg">Get in touch</a>
                    </button>
                    and let's see what change we can make together.
                </p>
            ),
        },
        {
            title: "Investor or Incubator",
            content: (
                <p className="pillar-content">
                    We want to work with you and your hardware startups to validate their value propositions through
                    in-field testing, bootstrapped prototyping, and impact workshops.
                    <br />
                    <br />
                    <button

                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shri6sPRw6w1H3dS2">Get in touch</a>
                    </button>
                    and let's see what we can create together.
                </p>
            ),
        },
        {
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
        },
    ];

    return (
        <div className="section">
            <div className="content">
                <span>
                    The Time to Act is Now! We're partnering with the most ambitious sustainable hardware startups that will change the World!
                    <br />
                    And we're partnering with their key stakeholders - such as suppliers and investors - to truly unlock a safe, clean, sustainable planet.
                </span>
                <h3 style={{ margin: "50px" }}>I am a...</h3>
                <FlexBox defaultValue={0} elements={elements} />
                <br />
            </div>
        </div>
    );
};

export default ContactUs;