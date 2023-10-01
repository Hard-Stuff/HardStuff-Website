import React, { useEffect, useState } from "react";

// Import the images we'll use
import cardboard_prototype from "../assets/images/cardboard_prototype.png";
import in_field_testing from "../assets/images/in_field_testing.png";
import printed_prototype from "../assets/images/printed_prototype.png";

export const OurApproach = (props) => {
    const [selected, setSelected] = useState(0);
    const { isMobile } = props;

    const elements = [
        {
            title: "In-field Testing",
            img: in_field_testing,
            content: (
                <span>
                    The majority of the problems that humanity faces are outside, not at an office desk, so at Hard
                    Stuff we love getting our hands dirty.
                    <br />
                    <br />
                    We run in-field testing alongside startups, understanding the problems at the source and where the
                    impact needs to be made.
                </span>
            ),
        },
        {
            title: "Hyper-Rapid Prototyping",
            img: cardboard_prototype,
            content: (
                <span>
                    Early prototypes need to be simple, modifiable, and impactful <em>(even if they fall apart!)</em>.
                    <br />
                    <br />
                    At Hard Stuff, we're passionate about “cardboard prototyping” to rapidly turn theory into reality.
                </span>
            ),
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
            <section className="section">
                <div className="content">
                    <h2>Our approach</h2>
                    <div className="flex_box">
                        {elements.map((elem, idx) => (
                            <div
                                key={idx}
                                className="flex_box_content"
                                style={{
                                    flex: selected === idx ? 8 : 1,
                                    borderTop: isMobile && idx !== 0 ? "3px solid #fff4" : "",
                                    borderLeft:
                                        !isMobile && idx === selected && selected !== 0 ? "3px solid #fff4" : "",
                                    borderRight:
                                        !isMobile && idx === selected && selected !== elements.length - 1
                                            ? "3px solid #fff4"
                                            : "",
                                }}
                                onMouseEnter={() => setSelected(idx)}
                                onMouseLeave={() => setSelected(null)}
                            >
                                <h3>{elem.title}</h3>
                                <img
                                    src={elem.img}
                                    alt={elem.title}
                                    height="200px"
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
