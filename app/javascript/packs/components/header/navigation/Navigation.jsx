import React, { useState, useEffect } from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation(props) {
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

	return (
		<div
			className={
				"navigation-menu-container " +
				(props.navigationActive ? "active" : "")
			}
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