import React, { useEffect, useState } from "react";
import "./FlexBox.css"
import { UnmountClosed } from "react-collapse";


const FlexBox = (props) => {
    const { elements, defaultValue } = props;
    const [highlighted, setHighlighted] = useState(null);
    const [selected, setSelected] = useState(defaultValue);

    return (<>
        <div className="flex_box">
            {elements.map((elem, idx) => (
                <div
                    key={idx}
                    className={"flex_box_content " + (idx === selected ? "flip-colours" : "")}
                    style={{
                        flex: selected === idx ? 5 : 1,
                        background: ((idx === highlighted && idx !== selected) ? "#ffffff22" : "")
                    }}
                    onMouseEnter={() => setHighlighted(idx)}
                    onMouseLeave={() => setHighlighted(null)}
                    onClick={() => idx === selected ? (defaultValue === null ? setSelected(null) : null) : setSelected(idx)}
                >
                    <h3>{elem.title}</h3>
                    {elem.img ? <img src={elem.img} /> : ""}
                    <UnmountClosed isOpened={idx === selected}>
                        {elem.content}
                    </UnmountClosed>
                </div>
            ))}
        </div>
    </>
    )
}

export default FlexBox;