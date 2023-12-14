import React, { useState } from "react";
import "./FlexBox.css";
import { UnmountClosed } from "react-collapse";

const FlexBox = (props) => {
	const { elements, defaultValue } = props;
	const [highlighted, setHighlighted] = useState(null);
	const [selected, setSelected] = useState(defaultValue);

	return (
		<>
			<div className="flex_box">
				{elements.map((elem, idx) => (
					<div
						key={idx}
						className={"flex_box_content " + (idx === selected ? "flip-colours" : "")}
						style={{
							flex: selected === idx ? 5 : 1,
							background: idx === highlighted && idx !== selected ? "#ffffff22" : "",
						}}
						onMouseEnter={() => setHighlighted(idx)}
						onMouseLeave={() => setHighlighted(null)}
						onClick={() => (idx === selected ? setSelected(null) : setSelected(idx))}
					>
						<h3>{elem.title}</h3>
						{elem.img ? <img src={elem.img} alt={elem.title} /> : ""}
						<UnmountClosed isOpened={idx === selected}>{elem.content}</UnmountClosed>
						<span className="mobile-only">
							<br />
							{idx === selected ? "▲" : ". . ."}
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export default FlexBox;
