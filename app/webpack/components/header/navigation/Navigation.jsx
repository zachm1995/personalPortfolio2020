import React, { useState, useEffect } from "react";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";
import NavBar from "./nav_bar/NavBar";
import NavMenu from "./nav_menu/NavMenu";
import NavMenuToggle from "./nav_menu_toggle/NavMenuToggle";

export default function Navigation(props) {
	const [itemHover, setItemHover] = useState(false);
	const [navBarItems, setNavBarItems] = useState([]);
	const [navMenuItems, setNavMenuItems] = useState([]);
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const screenSize = useScreenSize();

	const navigationItems = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "About",
			link: "/about",
		},
		// {
		// 	title: "Projects",
		// 	link: "/projects",
		// },
		// {
		// 	title: "Contact",
		// 	link: "/contact",
		// },
	];

	// Puts navigation items into NavBar or NavMenu
	useEffect(() => {
		setNavBarItems(navigationItems);
		setNavMenuItems(navigationItems);
	}, [])

	// Handles when user is hovering on a menu item; greys other items
	const handleItemHover = (state) => {
		setItemHover(state);
	}

	return (
		<nav className={`navigation`}>
			<NavBar
				navBarItems={navBarItems}
				itemHover={itemHover}
				handleItemHover={handleItemHover}
				active={props.active}
			/>
			<NavMenu />
			{
				(screenSize.x < 760) ?
				<NavMenuToggle
					navMenuItems={navMenuItems}
				/> :
				""
			}
			
		</nav>
	);
}
