import React, { useEffect, useState } from "react";
import "../App.css";

const AboutUs = () => {
    return (
        <>
            <section className="section">
                <div className="content">
                    <p>
                        <span className="hardstuffnocolor">Our mission</span> is to empower hardware startups and
                        entrepreneurs, providing them with the proof, support, resources, and partnerships they need to
                        bring their groundbreaking ideas to life.
                        <br />
                        <br />
                        Together, we'll shape a sustainable future for generations to come.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="content">
                    <p>
                        <span className="hardstuffnocolor">We Envision a World</span> with a stable and safe climate,
                        without plastic in our oceans, with nature thriving, without hunger, and where everyone
                        everywhere is safe. <br />
                        <br />
                        We know how far away from that world we are today, and how all of this stuff, this really really
                        hard stuff, requires hard work and hardware game-changers.
                    </p>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
