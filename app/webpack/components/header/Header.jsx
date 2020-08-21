import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import NavigationToggle from "./navigation_toggle/NavigationToggle";
import { useMousePosition } from "../../custom_hooks/useMousePosition"; 

export default function Header(props) {
	const [headerActive, setHeaderActive] = useState(true);
	const mousePosition = useMousePosition();

	// Temporarily show header on load
	useEffect(() => {
		setTimeout(() => setHeaderActive(false), 3000);
	},[])

	useEffect(() => {
		if (mousePosition.y < 100) {
			setHeaderActive(true);
		} else {
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
