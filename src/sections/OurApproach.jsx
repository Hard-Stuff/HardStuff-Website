import React, { useEffect, useState } from "react";

// Import the images we'll use
import cardboard_prototype from "../assets/images/cardboard_prototype.png";
import in_field_testing from "../assets/images/in_field_testing.png";
import printed_prototype from "../assets/images/printed_prototype.png";

export const OurApproach = () => {
    const [selected, setSelected] = useState(null);

    const elements = [
        {
            title: "In-field Testing",
            img: in_field_testing,
            content:
                "The majority of the problems that humanity faces are outside, not at an office desk, so at Hard Stuff we love getting our hands dirty. We run in-field testing alongside startups, understanding the problems at the source and where the impact needs to be made.",
        },
        {
            title: "Hyper-Rapid Prototyping",
            img: cardboard_prototype,
            content:
                "Early prototypes need to be simple, quick to change, and impactful (even if they fall apart!). At Hard Stuff, we're passionate about “cardboard prototyping” to rapidly turn theory into reality.",
        },
        {
            title: "Minimum Viable Product",
            img: printed_prototype,
            content:
                "Once a solution makes sense, both from an impactful and a financial sense, we build the truly Minimum Viable Product needed to prove to customers, investors, and stakeholders that this solution can change the World!",
        },
    ];

    return (
        <>
            <section className="section" style={{ maxHeight: "500px", marginBottom: "0px" }}>
                <div className="content">
                    <h2>Our approach</h2>
                    <div style={{ display: "flex", height: "500px", alignItems: "flex-start" }}>
                        {elements.map((elem, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flex: selected === idx ? 10 : 1,
                                    margin: "5px",
                                    padding: "5px",
                                    transition: "flex 0.5s",
                                    overflow: "hidden",
                                    borderLeft: idx === selected && selected != 0 ? "3px solid #fff4" : "",
                                    borderRight:
                                        idx === selected && selected != elements.length - 1 ? "3px solid #fff4" : "",
                                    height: "100%",
                                }}
                                onMouseEnter={() => setSelected(idx)}
                                onMouseLeave={() => setSelected(null)}
                            >
                                <h3>{elem.title}</h3>
                                <img
                                    src={elem.img}
                                    alt=""
                                    height="300px"
                                    style={
                                        {
                                            // padding: "10%",
                                        }
                                    }
                                />
                                <div style={{ color: idx === selected ? "" : "#fff0", fontSize: ".75em" }}>
                                    {elem.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
