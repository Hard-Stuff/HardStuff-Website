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
            title: "Minimum",
            img: cardboard_prototype,
            content: (
                <span>
                    Early prototypes need to be simple, modifiable, and impactful<br /><em>(even if they fall apart!)</em>.
                    <br />
                    <br />
                    At Hard Stuff, we build the prototypes you need to demonstrate viablity, engage with customers, and unlock investment.<br />
                    Prototypes range from “cardboard prototyping” up to full-scale solutions: whatever is the minimal way to unlock your next stage!
                </span>
            ),
        },
        {
            title: "Viable",
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
            title: "Product",
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
                                    style={{maxHeight: "20vh"}}
                                />
                                <div style={{ color: idx === selected ? "" : "#fff0", fontSize: "2.5vh" }}>
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
