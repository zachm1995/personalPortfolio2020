import React, { useState, useEffect } from "react";

export default function NavigationToggle(props) {
	const [currentColor, setCurrentColor] = useState("purple");
	useEffect(() => {
		switch (props.backgroundColor) {
			case 'purple-gradient':
				return setCurrentColor("white");
			case 'ele-gradient':
				return setCurrentColor("#6E8387");
			default:
				return setCurrentColor("white");
		}
	}, [props.backgroundColor]);

	return (
		<div
			className={
				"navigation-toggle " + (props.navigationActive ? "active" : "")
			}
			onClick={() => props.toggleNavigation()}
			onPointerEnter={() => props.handleHoverableElement(true)}
			onPointerLeave={() => props.handleHoverableElement(false)}
		>
			<span style={{
				backgroundColor: currentColor,
			}}></span>
			<span style={{
				backgroundColor: currentColor,
			}}></span>
			<span style={{
				backgroundColor: currentColor,
			}}></span>
		</div>
	);
}
