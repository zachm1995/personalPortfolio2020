import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export default function NavigationItem(props) {
	const [itemActive, setItemActive] = useState(false);
	const pathname = useLocation().pathname;

	useEffect(() => {
		console.log(pathname)
		if (pathname == props.link) {
			setItemActive(true);
		} else {
			setItemActive(false);
		}
	}, [pathname])

	return (
			<Link
				className={
					`navigation-item ${itemActive ? "navigation-item--active " : "hoverable"} ${props.active ? 'animate fade-down-in' : 'animate fade-up-out'}`
				}
				style={{
					animationDelay: `${props.animationDelay}s`
				}}
				to={props.link}
			>
				{props.title}
			</Link>
	);
}
