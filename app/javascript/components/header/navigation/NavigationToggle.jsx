import React, { useState, useEffect } from "react";

export default function NavigationToggle(props) {
	const [currentColor, setCurrentColor] = useState("purple");

	useEffect(() => {
		if (props.navigationActive) {
			return setCurrentColor("red");
		} else {
			switch (props.backgroundColor) {
				case "gradient-purple":
					return setCurrentColor("white");
				case "ele":
					return setCurrentColor("#6E8387");
				default:
					return setCurrentColor("white");
			}
		}
	}, [props.backgroundColor, props.navigationActive]);

	return (
		<div
			className={
				"navigation-toggle " + (props.navigationActive ? "active" : "")
			}
			onClick={() => props.toggleNavigation()}
			onPointerEnter={() => props.handleHoverableElement(true)}
			onPointerLeave={() => props.handleHoverableElement(false)}
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
