import React, { useState, useEffect } from "react";

const options = [
	"climate-tech.",
	"clean agriculture.",
	"a plastic-free ocean.",
	"eco-tech.",
	"green transport.",
	"global food security.",
	"safe cities everywhere.",
	"safe drinking water for everyone.",
	"stable and protected biodiversity.",
	"clean air.",
	"inclusive and sustainable growth.",
	"green-tech.",
	"resilient infrastructure.",
	"sustainable industrialisation.",
	"a safe, connected society.",
	"clean streets.",
	"stuff that matters.",
    "",
    "",
    "",
];

const ItsTimeToBuild = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// Initial delay before starting the interval
		const initialDelay = setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentIndex((currentIndex) => (currentIndex + 1) % options.length);
			}, 2000); // 2 seconds to view and 2 seconds for the bounce effect

			// Clear interval on component unmount
			return () => clearInterval(interval);
		}, 1500); // 2-second initial delay

		// Clear timeout on component unmount
		return () => clearTimeout(initialDelay);
	}, []);

	return (
		<div style={{ alignItems: "left" }}>
			<span className="build">It's time to build</span>
			<span className="scroll-item">{options[currentIndex]}</span>
		</div>
	);
};

export default ItsTimeToBuild;
