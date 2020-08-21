import React, { useState, useEffect } from "react";

export default function NavigationToggle(props) {
	const [currentColor, setCurrentColor] = useState("purple");

	// // Handles the color of the navigation menu icon based on current background color
	// useEffect(() => {
	// 	if (props.navigationActive) {
	// 		return setCurrentColor("red");
	// 	} else {
	// 		switch (props.background['color']) {
	// 			case "purple":
	// 				return setCurrentColor("white");
	// 			case "ele":
	// 				return setCurrentColor("#6E8387");
	// 			default:
	// 				return setCurrentColor("white");
	// 		}
	// 	}
	// }, [props.background['color'], props.navigationActive]);

	return (
		<div
			className={
				`navigation-toggle hoverable ${props.navigationActive ? "navigation-toggle--active" : ""}`
			}
		>
			<span
				style={{
					backgroundColor: currentColor
				}}
			></span>
			<span
				style={{
					backgroundColor: currentColor
				}}
			></span>
			<span
				style={{
					backgroundColor: currentColor
				}}
			></span>
		</div>
	);
}
