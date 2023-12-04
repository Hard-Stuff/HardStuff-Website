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
                    We work with entrepreneurs, hardware startups and young companies to validate the problems
                    they're solving and their solution, through in-field testing and bootstrapped prototyping.
                    <br />
                    <br />
                    <button>
                        <a href="https://calendly.com/matt-hard-stuff/20min_hello">Book a call</a>
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
                    We want to work with you to show your entrepreneurs and startups that a hardware
                    proof of concept prototype can be as quick and easy as software.
                    <br />
                    <br />
                    <button

                    // style={{
                    //     fontSize: "0.75em",
                    //     padding: ".35em",
                    // }}
                    >
                        <a href="https://calendly.com/matt-hard-stuff/20min_hello">Book a call</a>
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
                    <button

                    // style={{
                    //     fontSize: "0.75em",
                    //     padding: ".35em",
                    // }}
                    >
                        <a href="https://calendly.com/matt-hard-stuff/20min_hello">Book a call</a>
                    </button>
                    <br />
                    Let's see what we can create together.
                </p>
            ),
        }/*        {
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
        }, */
    ];

    return (
        <div className="section">
            <div className="content">
                <span>
                    The Time to Act is Now!
                    <br />
                    <br />
                    We work with ambitious hardware startups that are changing the World!
                    <br />
                    And we're partnering with their key stakeholders - such as suppliers and investors - to unlock a safe, clean, sustainable planet.
                </span>
                <h3 style={{ margin: "50px" }}>I am a...</h3>
                <FlexBox defaultValue={0} elements={elements} />
                <br />
            </div>
        </div>
    );
};

export default ContactUs;