import React, { useEffect, useState } from "react";

// Import the images we'll use
import cardboard_prototype from "../assets/images/cardboard_prototype.png";
import in_field_testing from "../assets/images/in_field_testing.png";
import printed_prototype from "../assets/images/printed_prototype.png";
import FlexBox from "../components/FlexBox";

export const OurApproach = () => {
    return (
        <>
            <div className="section">
                <div className="content">
                    <h2>Our approach</h2>
                    <FlexBox elements={[
                        {
                            title: "Minimum",
                            img: cardboard_prototype,
                            content: (
                                <span>
                                    Early prototypes need to be simple, modifiable, and impactful<br />
                                    <em>(even if they fall apart!)</em>.
                                    <br />
                                    <br />
                                    At Hard Stuff, we build the prototypes you need to demonstrate viablity, engage with customers,
                                    and unlock investment.
                                    <br />
                                    <br />
                                    <em>An MVP is only <span className="hardstuff-no-colour">minimum</span> when you can't
                                        have possibly made it cheaper or faster!</em>
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
                                    We run in-field testing with YOU to understand the problems at source and where the
                                    solution is needed.
                                    <br />
                                    <br />
                                    <em>An MVP is only <span className="hardstuff-no-colour">viable</span> when you've tested
                                        it in the field to prove that it solves the problem in real-world conditions!</em>
                                </span>
                            ),
                        },
                        {
                            title: "Product",
                            img: printed_prototype,
                            content:
                                (
                                    <span>
                                        We work with startups to ensure that they can build their hardware at the scale and
                                        price-point that unlocks meaningful potential.
                                        <br />
                                        <br />
                                        On top of that, we help validate if your solution is productisable, so that you
                                        can go on to make continuous impact.
                                        <br />
                                        <br />
                                        <em>An MVP is only a <span className="hardstuff-no-colour">product</span> when someone
                                            actually pays for it!</em>
                                    </span>
                                ),
                        },
                    ]} />
                </div>
            </div>
        </>
    );
};
