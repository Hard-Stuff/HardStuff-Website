import React, { useEffect, useState } from "react";
import "./App.css";

import { TopSection } from "./sections/TopSection";
import { MissionAndVision } from "./sections/MissionAndVision";
import { OurApproach } from "./sections/OurApproach";
import { WhatIsHardStuffDoing } from "./sections/WhatIsHardStuffDoing";
import { ContactUs } from "./sections/ContactUs";

const App = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const fadeInOptions = {
            threshold: 0.2,
        };

        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    entry.target.classList.remove("fade-out"); // Remove fade-out class
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove("fade-in");
                    entry.target.classList.add("fade-out"); // Add fade-out class
                }
            });
        }, fadeInOptions);

        sections.forEach((section) => {
            fadeInObserver.observe(section);
        });
    }, []);

    const handleLetsChatClick = () => {
        const subject = "I've just seen your website, and...";
        const emailLink = `mailto:matt@hard-stuff.com?subject=${encodeURIComponent(subject)}`;
        window.open(emailLink, "_blank");
    };
    return (
        <div className="App">
            <header className="lock-header">
                <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Let's build the Hard Stuff!" width="60px" />

                <button
                    className="hollowed"
                    onClick={handleLetsChatClick}
                    style={{ position: "absolute", top: "5px", right: "50px", padding: ".5em", border: "none" }}
                >
                    <span className="hardstuffnocolor">Email Us</span>
                </button>
            </header>
            <header className="header">
                <h1>
                    <span className="hardstuff">Hard Stuff </span>
                </h1>
                <p> Accelerating Hardware Solutions for a Sustainable Future</p>
            </header>
            <TopSection />
            <OurApproach />
            <MissionAndVision />
            <WhatIsHardStuffDoing />
            <ContactUs />
            <footer className="lock-footer" />
            <footer className="footer">
                <div className="content">
                    <div className="footer-links">
                        {/* <a href="#careers">Careers</a> */}
                        {/* <a href="#contact">Contact</a> */}
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} <span className="hardstuff">Hard Stuff</span>. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
