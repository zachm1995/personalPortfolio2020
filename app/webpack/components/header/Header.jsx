import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import NavigationToggle from "./navigation_toggle/NavigationToggle";
import { useMousePosition } from "../../custom_hooks/useMousePosition"; 
import { useScreenSize } from "../../custom_hooks/useScreenSize";

export default function Header(props) {
	const [headerActive, setHeaderActive] = useState(true);
	const mousePosition = useMousePosition();
	const screenSize = useScreenSize();

	// Temporarily show header on load
	useEffect(() => {
		if (screenSize.x > 800) {
			setTimeout(() => setHeaderActive(false), 3000);
		}
	},[])

	useEffect(() => {
		if (mousePosition.y < 100) {
			setHeaderActive(true);
		} else if (screenSize.x > 800) {
			setHeaderActive(false);
		}
	}, [mousePosition])

	return (
		<div className={`header ${headerActive ? "header--active" : ""}`}>
			<NavigationToggle
				background={props.background}
			/>
			<Navigation
				toggleNavigation={props.toggleNavigation}
				active={headerActive}
			/>
		</div>
	);
}
