import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
	const [itemActive, setItemActive] = useState(false);

	return (
		<div
			className={
				"navigation-menu-item " +
				(props.navigationActive ? "animate fadeUp" : "")
			}
			onMouseEnter={() => {
				props.handleItemHover(true);
				setItemActive(true);
				props.handleHoverableElement(true);
			}}
			onMouseLeave={() => {
				props.handleItemHover(false);
				setItemActive(false);
				props.handleHoverableElement(false);
			}}
			onClick={() => {
				props.toggleNavigation();
			}}
		>
			<Link
				className={
					(itemActive ? "nav-item-active " : "")
				} to={'/' + props.link}
			>
				{props.title}
			</Link>
		</div>
	);
}
