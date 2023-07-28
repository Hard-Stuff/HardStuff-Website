import React, { useEffect, useState } from "react";
import "./App.css";

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
                <img src={process.env.PUBLIC_URL + "/logo.svg"} width="60px" />
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
                        We envision a world where impactful hardware solutions thrive, transforming industries, and
                        addressing critical global challenges. With passion, collaboration, and innovation, we'll create
                        a positive impact on society and the environment.
                    </p>
                </div>
            </section>
            <section className="section pillars-section">
                <div className="content">
                    <h2>Our Three Pillars</h2>
                    <div className="pillar">
                        <button
                            onClick={() => setShowContent((prev) => ({ ...prev, ventureStudio: !prev.ventureStudio }))}
                            style={{ fontSize: "1em" }}
                        >
                            Venture Studio
                        </button>
                        {/* Conditionally render the content based on the state */}
                        {showContent.ventureStudio && (
                            <div className="pillar-content">
                                <p>
                                    Our Venture Studio serves as a powerhouse of support for hardware startups, guiding
                                    them from the initial idea stage to scalable solutions. We offer rapid development,
                                    engineering expertise, scaling support, and more, enabling startups to create
                                    tangible, high-impact hardware solutions efficiently.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <button
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, venturePartners: !prev.venturePartners }))
                            }
                            style={{ fontSize: "1em" }}
                        >
                            Venture Partners
                        </button>
                        {/* Conditionally render the content based on the state */}
                        {showContent.venturePartners && (
                            <div className="pillar-content">
                                <p>
                                    Collaboration is essential to achieving our goals. We form strong alliances with
                                    industry players, universities, and investors who share our passion for creating
                                    hardware solutions that deliver "High Value to Society." By partnering with diverse
                                    stakeholders, we amplify our collective impact and accelerate progress towards a
                                    sustainable future.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="pillar">
                        <button
                            onClick={() =>
                                setShowContent((prev) => ({ ...prev, hardStuffChampions: !prev.hardStuffChampions }))
                            }
                            style={{ fontSize: "1em" }}
                        >
                            Hard Stuff Champions
                        </button>
                        {/* Conditionally render the content based on the state */}
                        {showContent.hardStuffChampions && (
                            <div className="pillar-content">
                                <p>
                                    Beyond the Venture Studio and Venture Partnerships, we champion the hard stuff. We
                                    host events, provide co-working spaces, and showcase and support hardware startups
                                    that are making a real difference. Our dedicated team of Hard Stuff Champions works
                                    tirelessly to promote and elevate impactful hardware solutions, celebrating the
                                    companies that are actively shaping a better world.
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
