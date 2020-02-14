import React, { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";
import { useMousePosition } from "../../../../custom_hooks/useMousePosition";

export default function Navigation(props) {
	const mousePosition = useMousePosition();

	const navigationItems = [
		{
			title: "Home"
		},
		{
			title: "about"
		},
		{
			title: "something"
		},
		{
			title: "contact"
		},
		{
			title: "another"
		},
		{
			title: "secondtolast"
		},
		{
			title: "last"
		}
	];

	function handleMouseOver(event) {
		console.log(mousePosition);

	}

	const navigationStyle = {

	};

	return (
		<div
			className={
				"navigation-menu-container " +
				(props.navigationActive ? "active" : "")
			}
			onMouseOver={handleMouseOver}
		>
			<div className="navigation-items-container">
				{navigationItems.map((item, index) => {
					return (
						<NavigationItem
							title={item.title}
							navigationActive={props.navigationActive}
						/>
					);
				})}
			</div>
		</div>
	);
}