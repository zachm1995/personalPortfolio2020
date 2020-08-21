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

	const renderNavigationItems = navigationItems.map((item, index) => {
		return (
			<NavigationItem
				key={index}
				title={item.title}
				link={item.link}
				animationDelay={index * 0.2}
				active={props.active}
			/>
		);
	});

	return <nav className={`navigation`}>{renderNavigationItems}</nav>;
}
