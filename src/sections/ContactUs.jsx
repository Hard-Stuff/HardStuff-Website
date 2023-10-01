import React, { useEffect, useState } from "react";
import { EmailUsButton } from "../components/Buttons";

export const ContactUs = (props) => {
    const [selected, setSelected] = useState(null);
    const { isMobile } = props;

    const elements = [
        {
            title: "High Impact Startup",
            content: (
                <div className="pillar-content">
                    We work with high-impact hardware startups and young companies like yours to validate your impact
                    propositions, through in-field testing and bootstrapped prototyping.
                    <br />
                    <br />
                    <button
                        className="hollowed"
                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shrPaJMAuX4C4WIXg">Get in touch</a>
                    </button>
                    and let's see what change we can make together.
                </div>
            ),
        },
        {
            title: "Investor or Incubator",
            content: (
                <div className="pillar-content">
                    We want to work with you and your hardware startups to validate their value propositions through
                    in-field testing, bootstrapped prototyping, and impact workshops.
                    <br />
                    <br />
                    <button
                        className="hollowed"
                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shri6sPRw6w1H3dS2">Get in touch</a>
                    </button>
                    and let's see what we can create together.
                </div>
            ),
        },
        {
            title: "Fund of Funds",
            content: (
                <div className="pillar-content">
                    We’re building a high-impact-only technical incubator, applying our signature impact proposition
                    approach with game changing hardware-centric funding.
                    <br />
                    <br />
                    <button
                        className="hollowed"
                        style={{
                            fontSize: "0.75em",
                            padding: ".35em",
                        }}
                    >
                        <a href="https://airtable.com/appcWjsD8ARRM9939/shrbZnFcrsSN1yI9l">Express your interest</a>
                    </button>
                    and let's make an amazing World together.
                </div>
            ),
        },
    ];

    return (
        <section className="section">
            <div className="content">
                <h3>
                    The Time to Act is Now!
                    <br />I am a...
                </h3>
                {isMobile ? (
                    <>
                        <div className="flex_box" style={{ height: selected === null ? "300px" : "700px" }}>
                            {elements.map((elem, idx) => (
                                <div
                                    key={idx}
                                    className="flex_box_content"
                                    style={{
                                        flex: selected === idx ? 8 : 1,
                                        borderTop: isMobile && idx !== 0 ? "3px solid #fff4" : "",
                                        borderLeft:
                                            !isMobile && idx === selected && selected !== 0 ? "3px solid #fff4" : "",
                                        borderRight:
                                            !isMobile && idx === selected && selected !== elements.length - 1
                                                ? "3px solid #fff4"
                                                : "",
                                    }}
                                    onMouseEnter={() => setSelected(idx)}
                                    onMouseLeave={() => setSelected(null)}
                                >
                                    <h3>{elem.title}</h3>
                                    <div style={{ color: idx === selected ? "" : "#fff0", fontSize: ".75em" }}>
                                        {elem.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: "inline" }}>
                            {elements.map((elem, idx) => (
                                <button
                                    className="hollowed"
                                    key={idx}
                                    onClick={() => setSelected(idx !== selected ? idx : null)}
                                    style={{
                                        backgroundColor: idx === selected ? "#FF8A00" : "",
                                        color: idx === selected ? "white" : "",
                                    }}
                                >
                                    {elem.title}
                                </button>
                            ))}
                        </div>
                        <div className="content">{elements[selected]?.content}</div>{" "}
                    </>
                )}
                <span style={{ display: "inline", fontSize: ".75em" }}>
                    or you could always
                    <EmailUsButton style={{ padding: "0px" }} />
                </span>
            </div>
        </section>
    );
};
