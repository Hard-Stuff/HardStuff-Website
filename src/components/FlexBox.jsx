import React, { useEffect, useState } from "react";
import "./FlexBox.css"
import { Collapse } from "react-collapse";


const FlexBox = (props) => {
    const [highlighted, setHighlighted] = useState(null);
    const [selected, setSelected] = useState(null);
    const { elements } = props;

    return (<>
        <div className="flex_box">
            {elements.map((elem, idx) => (
                <div
                    key={idx}
                    className={"flex_box_content " + (idx === selected ? "flip-colours" : "")}
                    style={{
                        flex: selected === idx ? 6 : 1,
                        background: (idx === highlighted && idx !== selected ? "#ffffff22" : "")
                    }}
                    onMouseEnter={() => setHighlighted(idx)}
                    onMouseLeave={() => setHighlighted(null)}
                    onClick={() => idx === selected ? setSelected(null) : setSelected(idx)}
                >
                    <h3>{elem.title}</h3>
                    {elem.img ? <img src={elem.img} /> : ""}
                    <Collapse isOpened={idx === selected}>
                        {elem.content}
                    </Collapse>
                </div>
            ))}
        </div>
    </>
    )
}

export default FlexBox;