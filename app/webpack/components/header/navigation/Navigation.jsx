import React, { useState, useEffect } from "react";
import NavigationItem from "./navigation_item/NavigationItem";

export default function Navigation(props) {

	const navigationItems = [
		{
			title: "Home",
			link: "",
		},
		{
			title: "About",
			link: "about",
		},
		{
			title: "Contact",
			link: "contact",
		},
	];

	const renderNavigationItems = (items) => {
		items.map((item, index) => {
			return (
				<NavigationItem
					title={item.title}
					link={item.link}
					key={index}
					handleHoverableElement={props.handleHoverableElement}
					toggleNavigation={props.toggleNavigation}
				/>
			);
		});
	};

	return (
		<nav
			className={`navigation ${
				props.active ? "navigation--active" : ""
			}`}
		>
			{renderNavigationItems(navigationItems)}
		</nav>
	);
}
