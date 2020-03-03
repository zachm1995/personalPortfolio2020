import React, { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";
import { useMousePosition } from "../../../custom_hooks/useMousePosition";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";

export default function Navigation(props) {
	const mousePosition = useMousePosition();
	const screenSize = useScreenSize();
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

	useEffect(() => {
		console.log(screenSize["x"]);
	}, [screenSize]);

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
			className={"navigation-menu-container "}
			onMouseMove={handleMouseMove}
		>
		
<div className="navigation-background-container">
					<div
						className={
							"navigation-background-section " +
							(props.navigationActive ? "active" : "")
						}
						style={{ height: screenSize["y"] / 5 + "px" }}
					></div>
					<div
						className={
							"navigation-background-section " +
							(props.navigationActive ? "active" : "")
						}
						style={{ height: screenSize["y"] / 5 + "px" }}
					></div>
					<div
						className={
							"navigation-background-section " +
							(props.navigationActive ? "active" : "")
						}
						style={{ height: screenSize["y"] / 5 + "px" }}
					></div>
					<div
						className={
							"navigation-background-section " +
							(props.navigationActive ? "active" : "")
						}
						style={{ height: screenSize["y"] / 5 + "px" }}
					></div>
					<div
						className={
							"navigation-background-section " +
							(props.navigationActive ? "active" : "")
						}
						style={{ height: screenSize["y"] / 5 + "px" }}
					></div>
				</div>
			<div
				className={
					"navigation-menu-left " +
					(props.navigationActive ? "active" : "")
				}
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
			</div>
			<div
				className={
					"navigation-menu-right " +
					(props.navigationActive ? "active" : "")
				}
			>
				<div className={"navigation-items-container " +
					(props.navigationActive ? "active" : "")}>
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
