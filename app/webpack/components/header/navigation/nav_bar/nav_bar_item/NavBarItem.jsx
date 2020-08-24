import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export default function NavBarItem(props) {
	const [itemActive, setItemActive] = useState(false);
	const pathname = useLocation().pathname;

	useEffect(() => {
		if (pathname == props.link) {
			setItemActive(true);
		} else {
			setItemActive(false);
		}
	}, [pathname])

	return (
			<Link
				className={
					`nav-bar-item ${itemActive ? "nav-bar-item--active " : "hoverable"} ${props.active ? 'animate fade-down-in' : 'animate fade-up-out'} ${props.navItemHover ? 'nav-bar-item--grey' : ''}`
				}
				style={{
					animationDelay: `${props.animationDelay}s`
				}}
				to={props.link}
				onMouseEnter={() => itemActive ? "" : props.handleItemHover(true)}
				onMouseLeave={() => props.handleItemHover(false)}
			>
				{props.title}
			</Link>
	);
}
