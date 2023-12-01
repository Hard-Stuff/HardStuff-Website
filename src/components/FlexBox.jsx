import React, { useEffect, useState } from "react";
import "./FlexBox.css"

const FlexBox = (props) => {
    const [selected, setSelected] = useState(null);
    const { elements, isMobile } = props;

    return (isMobile ? (
        <>
            <div className="flex_box" style={{ height: selected === null ? "300px" : "700px" }}>
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
                        <div style={{ color: idx === selected ? "" : "#fff0", fontSize: ".75em" }}>
                            {elem.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    ) : (
        <>
            <div style={{ display: "inline" }}>
                {elements.map((elem, idx) => (
                    <button
                        className="hollowed"
                        key={idx}
                        onClick={() => setSelected(idx !== selected ? idx : null)}
                        style={{
                            backgroundColor: idx === selected ? "#FF8A00" : "",
                            color: idx === selected ? "white" : "",
                        }}
                    >
                        {elem.title}
                    </button>
                ))}
            </div>
            <div className="content">{elements[selected]?.content}</div>{" "}
        </>
    )
    )
}

export default FlexBox;