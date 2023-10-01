import React, { useEffect, useState } from "react";

export const MissionAndVision = () => {
    return (
        <>
            <section className="section">
                <div className="content">
                    <h2>Mission Statement</h2>
                    <p>
                        Our mission is to empower hardware startups and entrepreneurs, providing them with the support,
                        resources, and partnerships they need to bring their groundbreaking ideas to life. Together,
                        we'll shape a sustainable future for generations to come.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="content">
                    <h2>Vision Statement</h2>
                    <p>
                        We envision a world with a stable and safe climate, without plastic in our oceans, with nature
                        thriving, without hunger, and where everyone everywhere is safe. We know how far away from that
                        world we are today, and how all this stuff, this really really hard stuff, requires hard work
                        and hardware game-changers.
                    </p>
                </div>
            </section>
        </>
    );
};
