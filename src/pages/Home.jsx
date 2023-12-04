import React, { useEffect, useState } from "react";
import "../App.css";

import { OurApproach } from "../sections/OurApproach";
import { WhatIsHardStuffDoing } from "../sections/WhatIsHardStuffDoing";
import { EmailUsButton } from "../components/Buttons";
import BuildTestXRepeat from "../components/BuildTestXRepeat";

const Home = (props) => {
    const { isMobile } = props;

    return (
        <div className="App">
            <header style={{
                alignItems: "center",
                padding: "calc(25vh - 140px) 0 15% 0"
            }}>
                <h1>
                    <span className="hardstuff">Hard Stuff </span>
                </h1>
                <BuildTestXRepeat />
            </header>
            <div className="section">
                <div className="content">
                    <h2>
                        <span className="hardstuff">Hard Stuff</span> builds hardware to fix hard problems.
                    </h2>
                    <p>
                        Climate change, deforestation, food scarcities, natural disasters, and other global challenges demand rapid and impactful solutions,
                        <br />
                        so we work with "High Value to Society" hardware startups that<br />
                        make a real difference.
                    </p>
                </div>
            </div>
            <OurApproach isMobile={isMobile} />
            <WhatIsHardStuffDoing isMobile={isMobile} />
            {/* <ContactUs isMobile={isMobile} /> */}
        </div>
    );
};

export default Home;
