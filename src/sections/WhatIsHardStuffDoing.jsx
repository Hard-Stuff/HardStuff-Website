import React, { useEffect, useState } from "react";

import { IconnedButton } from "../components/Buttons";

// import local icons
import tools_icon from "../assets/icons/tools.png";
import celebration_icon from "../assets/icons/celebration.png";
import incubator_icon from "../assets/icons/incubator.png";

export const WhatIsHardStuffDoing = () => {
    const [showContent, setShowContent] = useState({
        changeMakers: false,
        technicalIncubator: false,
        hardStuffChampions: false,
    });
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
                                    <span className="hardstuffnocolor">Hard Stuff</span> ChangeMakers
                                </div>
                            }
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.changeMakers && (
                            <div className="pillar-content">
                                <p>
                                    Our powerhouse to support hardware startups, guiding you from your earliest idea to
                                    Minimum Viable Product. We offer rapid development, engineering expertise, and
                                    scaling support, enabling startups to create tangible, high-impact hardware
                                    solutions efficiently.
                                </p>
                                <div>Idea → Field-testing ↔ “Cardboard Prototypes” ↔ Functional Prototypes ↔ MVP</div>
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
                                    <span className="hardstuffnocolor">Hard Stuff</span> Technical Incubator
                                </div>
                            }
                            alignment="right"
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.technicalIncubator && (
                            <div className="pillar-content">
                                <p>
                                    We work closely with Investors, Incubators, & Accelerators, and with their startups,
                                    to support in-field testing to truly validate ideas. We build Minimum Viable
                                    Products to unlock the next phase of impact and scale in early-stage hardware
                                    startups. And we teach founders how to deliver true, immediate impact, and we test
                                    prototypes alongside startups to validate impactful solutions.
                                </p>
                                <div>Field-testing ∙ Prototyping ∙ Impact & Build Workshops ∙ Advisory Services</div>
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
                                    <span className="hardstuffnocolor">Hard Stuff</span> Champions
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
                                <div>
                                    Impact awareness ∙ Events ∙ A huge community of change-makers ∙ More coming soon!
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
