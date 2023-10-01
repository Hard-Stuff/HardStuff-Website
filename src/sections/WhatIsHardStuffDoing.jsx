import React, { useEffect, useState } from "react";

import { IconnedButton } from "../components/Buttons";

// import local icons
import tools_icon from "../assets/icons/tools.png";
import celebration_icon from "../assets/icons/celebration.png";
import incubator_icon from "../assets/icons/incubator.png";

export const WhatIsHardStuffDoing = (props) => {
    const [showContent, setShowContent] = useState({
        changeMakers: false,
        technicalIncubator: false,
        hardStuffChampions: false,
    });
    const { isMobile } = props;

    return (
        <>
            <section className="section pillars-section">
                <div className="content">
                    <h2>
                        What is <span className="hardstuff">Hard Stuff</span> doing about this?
                    </h2>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() => setShowContent((prev) => ({ ...prev, changeMakers: !prev.changeMakers }))}
                            image_src={tools_icon}
                            style={{
                                fontSize: "1em",
                                borderColor: showContent.changeMakers ? "#FF8A00" : "",
                            }}
                            content={
                                <div>
                                    <span className="hardstuffnocolor ignore_if_mobile">Hard Stuff</span> ChangeMakers
                                </div>
                            }
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.changeMakers && (
                            <div className="pillar-content">
                                <p>
                                    Our powerhouse to support hardware startups, guiding you from your earliest idea to
                                    Minimum Viable Product. We offer in-field testing support, rapid development,
                                    engineering expertise, and scaling support, enabling startups to create tangible,
                                    high-impact hardware solutions efficiently.
                                </p>
                                {isMobile ? (
                                    <div>
                                        Idea
                                        <br />↓<br />
                                        In-field testing
                                        <br />↕<br />
                                        “Cardboard Prototypes”
                                        <br />↕<br />
                                        Functional Prototypes
                                        <br />↕<br />
                                        MVP
                                        <br />↓<br />
                                        Life-long support to deliver impact
                                    </div>
                                ) : (
                                    <div style={{ fontSize: ".75em" }}>
                                        Idea → Field-testing ↔ “Cardboard Prototypes” ↔ Functional Prototypes ↔ MVP →
                                        Life-long support to deliver impact
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, technicalIncubator: !prev.technicalIncubator }))
                            }
                            image_src={incubator_icon}
                            style={{ fontSize: "1em", borderColor: showContent.technicalIncubator ? "#FF8A00" : "" }}
                            content={
                                <div>
                                    <span className="hardstuffnocolor ignore_if_mobile">Hard Stuff</span> Technical
                                    Incubator
                                </div>
                            }
                            alignment="right"
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.technicalIncubator && (
                            <div className="pillar-content">
                                <p>
                                    We work closely with Investors, Incubators, & Accelerators, and with their startups,
                                    to support in-field testing to truly validate ideas.
                                    <br />
                                    <br />
                                    We build Minimum Viable Products to unlock the next phase of impact and scale in
                                    early-stage hardware startups.
                                    <br />
                                    <br />
                                    And we teach founders how to deliver true, immediate impact, and we test prototypes
                                    alongside startups to validate impactful solutions.
                                </p>
                                {isMobile ? (
                                    <div>
                                        Field-testing
                                        <br />∙<br />
                                        Prototyping
                                        <br />∙<br />
                                        Impact & Build Workshops
                                        <br />∙<br />
                                        Advisory Services
                                    </div>
                                ) : (
                                    <div style={{ fontSize: ".75em" }}>
                                        Field-testing ∙ Prototyping ∙ Impact & Build Workshops ∙ Advisory Services
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, hardStuffChampions: !prev.hardStuffChampions }))
                            }
                            image_src={celebration_icon}
                            style={{ fontSize: "1em", borderColor: showContent.hardStuffChampions ? "#FF8A00" : "" }}
                            content={
                                <div>
                                    <span className="hardstuffnocolor ignore_if_mobile">Hard Stuff</span> Champions
                                </div>
                            }
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.hardStuffChampions && (
                            <div className="pillar-content">
                                <p>
                                    We make high-impact hardware companies great.
                                    <br />
                                    We celebrate the amazing progress we've already made together.
                                    <br />
                                    And we inspire the next generation of entrepreneurs to build a World they're excited
                                    by!
                                </p>
                                {isMobile ? (
                                    <div>
                                        Impact awareness
                                        <br />∙<br />
                                        Events
                                        <br />∙<br />A huge community of change-makers
                                        <br />∙<br />
                                        <em>More coming soon!</em>
                                    </div>
                                ) : (
                                    <div style={{ fontSize: ".75em" }}>
                                        Impact awareness ∙ Events ∙ A huge community of change-makers ∙{" "}
                                        <em>More coming soon!</em>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
