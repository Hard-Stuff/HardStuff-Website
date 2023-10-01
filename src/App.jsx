import React, { useEffect, useState } from "react";
import { IconnedButton } from "./components/Buttons";
import "./App.css";

// import local icons
import tools_icon from "./assets/icons/tools.png";
import celebration_icon from "./assets/icons/celebration.png";
import incubator_icon from "./assets/icons/incubator.png";

const App = () => {
    const [showContent, setShowContent] = useState({
        ventureStudio: false,
        venturePartners: false,
        hardStuffChampions: false,
    });

    const handleLetsChatClick = () => {
        const subject = "I've just seen your website, and...";
        const emailLink = `mailto:matt@hard-stuff.com?subject=${encodeURIComponent(subject)}`;
        window.open(emailLink, "_blank");
    };

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

    return (
        <div className="App">
            <header className="lock-header">
                <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Let's build the Hard Stuff!" width="60px" />
            </header>
            <header className="header">
                <h1>
                    <span className="hardstuff">Hard Stuff </span>
                </h1>
                <p> Accelerating Hardware Solutions for a Sustainable Future</p>
            </header>
            <section className="section">
                <div className="content">
                    <h2>
                        Why <span className="hardstuff">Hard Stuff</span> ?
                    </h2>
                    <p>
                        At <span className="hardstuff">Hard Stuff</span>, we believe the time to act is now!
                        <br />
                        Climate change, deforestation, and other global challenges demand rapid and impactful solutions.
                        Our mission is to create "High Value to Society" hardware that makes a real difference.
                    </p>
                </div>
            </section>
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
                            content="Hards Stuff Champions"
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
            <section className="section">
                <div className="content">
                    <h2>The Time to Act is Now</h2>
                    <p>
                        Let's join forces and build a brighter future. Together, we can shape the world we want to live
                        in. Are you ready to make a real impact?
                    </p>{" "}
                    <button onClick={handleLetsChatClick} style={{ fontSize: "1em" }}>
                        Let's chat about fixing the <span className="hardstuff">Hard Stuff</span>
                    </button>
                </div>
            </section>
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
