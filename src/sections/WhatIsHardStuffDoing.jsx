import React, { useEffect, useState } from "react";

import { IconnedButton } from "../components/Buttons";

// import local icons
import tools_icon from "../assets/icons/tools.png";
import celebration_icon from "../assets/icons/celebration.png";
import incubator_icon from "../assets/icons/incubator.png";

export const WhatIsHardStuffDoing = () => {
    const [showContent, setShowContent] = useState({
        ventureStudio: false,
        venturePartners: false,
        hardStuffChampions: false,
    });
    return (
        <>
            <section className="section pillars-section">
                <div className="content">
                    <h2>Our Three Pillars</h2>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() => setShowContent((prev) => ({ ...prev, ventureStudio: !prev.ventureStudio }))}
                            image_src={tools_icon}
                            style={{ fontSize: "1em" }}
                            content="Venture Studio"
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.ventureStudio && (
                            <div className="pillar-content">
                                <p>
                                    Our Venture Studio serves as a powerhouse of support for hardware startups, guiding
                                    them from the initial idea stage to scalable solutions. We offer rapid development,
                                    engineering expertise, and scaling support, enabling startups to create tangible,
                                    high-impact hardware solutions efficiently.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, venturePartners: !prev.venturePartners }))
                            }
                            image_src={incubator_icon}
                            style={{ fontSize: "1em" }}
                            content="Venture Incubator"
                            alignment="right"
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.venturePartners && (
                            <div className="pillar-content">
                                <p>
                                    Collaboration is essential to achieving our goals. We form strong alliances with
                                    industry players, universities, and investors who share our passion for creating
                                    hardware solutions that deliver "High Value to Society." Hard problems like these
                                    require big and small players, all around the world. By partnering with diverse
                                    stakeholders, we amplify our collective impact and accelerate progress towards a
                                    sustainable future.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <IconnedButton
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, hardStuffChampions: !prev.hardStuffChampions }))
                            }
                            image_src={celebration_icon}
                            style={{ fontSize: "1em" }}
                            content="Hard Stuff Champions"
                        />
                        {/* Conditionally render the content based on the state */}
                        {showContent.hardStuffChampions && (
                            <div className="pillar-content">
                                <p>
                                    Beyond the Venture Studio and Venture Partnerships, we champion the hard stuff and
                                    those doing the great work. We host events and showcase and support hardware
                                    startups that are making a real difference. Our dedicated team of Hard Stuff
                                    Champions works tirelessly to promote and elevate impactful hardware solutions,
                                    celebrating the companies that are actively shaping a better world.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
