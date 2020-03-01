import React, { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";
import { useMousePosition } from "../../../custom_hooks/useMousePosition";

export default function Navigation(props) {
	const mousePosition = useMousePosition();
	const [backgroundPosition, setBackgroundPosition] = useState({});
	const [itemHover, setItemHover] = useState(false);

	const navigationItems = [
		{
			title: "Home",
			link: "landing"
		},
		{
			title: "About",
			link: "about"
		},
		{
			title: "Projects",
			link: "portfolio"
		},
		{
			title: "Contact",
			link: "contact"
		}
	];

	useEffect(() => {}, []);

	function handleMouseMove() {
		let mouseX = mousePosition["x"];
		let mouseY = mousePosition["y"];
		let backgroundX = (mouseX / window.innerWidth) * 0.1 * 1000;
		let backgroundY = (mouseY / window.innerHeight) * 0.1 * 1000;
		setBackgroundPosition({ x: backgroundX, y: backgroundY });
	}

	function handleItemHover(state) {
		setItemHover(state);
	}

	return (
		<div
			className={
				"navigation-menu-container " +
				(props.navigationActive ? "active" : "")
			}
			onMouseMove={handleMouseMove}
		>
			<div className="navigation-menu-left">
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
			</div>
			<div className="navigation-menu-right">
				<div className="navigation-items-container">
					{navigationItems.map((item, index) => {
						return (
							<NavigationItem
								title={item.title}
								link={item.link}
								navigationActive={props.navigationActive}
								key={index}
								handlePageChange={props.handlePageChange}
								handleItemHover={handleItemHover}
								itemHover={itemHover}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
