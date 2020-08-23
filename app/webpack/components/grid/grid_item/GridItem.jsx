import React from "react";

export default function GridItem(props) {
	return (
		<div
			className="grid-item"
			data-animate={JSON.stringify({
				animationName: "fade",
				animationDirection: "down",
				animationSpeed: "slow",
				animationOn: ["enter"],
				reanimate: false,
			})}
		></div>
	);
}
