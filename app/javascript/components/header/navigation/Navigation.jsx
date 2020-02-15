import React, { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";
import { useMousePosition } from "../../../custom_hooks/useMousePosition";

export default function Navigation(props) {
	const mousePosition = useMousePosition();
	const [backgroundPosition, setBackgroundPosition] = useState({});

	const navigationItems = [
		{
			title: "Home"
		},
		{
			title: "About"
		},
		{
			title: "Projects"
		},
		{
			title: "Contact"
		}
	];

	useEffect(() => {}, []);

	function handleMouseMove() {
		let mouseX = mousePosition["x"];
		let mouseY = mousePosition["y"];
		let backgroundX = (mouseX / window.innerWidth) * 0.2 * 100;
		let backgroundY = (mouseY / window.innerHeight) * 0.2 * 100;
		setBackgroundPosition({ x: backgroundX, y: backgroundY });
	}
	return (
		<div
			className={
				"navigation-menu-container " +
				(props.navigationActive ? "active" : "")
			}
			onMouseMove={handleMouseMove}
		>
			<div
				className="navigation-menu-background-overlay"
				style={{
					backgroundPosition:
						backgroundPosition["x"] +
						"% " +
						backgroundPosition["y"] +
						"%"
				}}
			></div>
			<div className="navigation-items-container">
				{navigationItems.map((item, index) => {
					return (
						<NavigationItem
							title={item.title}
							navigationActive={props.navigationActive}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
