import React, { useEffect, useState } from "react";

export const ContactUs = () => {
    const handleLetsChatClick = () => {
        const subject = "I've just seen your website, and...";
        const emailLink = `mailto:matt@hard-stuff.com?subject=${encodeURIComponent(subject)}`;
        window.open(emailLink, "_blank");
    };
    
    return (
        <section className="section">
            <div className="content">
                <h2>The Time to Act is Now</h2>
                <p>
                    Let's join forces and build a brighter future. Together, we can shape the world we want to live in.
                    Are you ready to make a real impact?
                </p>{" "}
                <button onClick={handleLetsChatClick} style={{ fontSize: "1em" }}>
                    Let's chat about fixing the <span className="hardstuff">Hard Stuff</span>
                </button>
            </div>
        </section>
    );
};
