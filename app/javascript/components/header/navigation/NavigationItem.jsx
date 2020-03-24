import React, { useState } from "react";

export default function NavigationItem(props) {
	const [itemActive, setItemActive] = useState(false);

	return (
		<div
			className={
				"navigation-menu-item " +
				(props.navigationActive ? "animate fadeUp" : "")
			}
			onClick={() => {
				props.handlePageChange(props.link);
			}}
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
		>
			<span
				className={
					(itemActive ? "nav-item-active " : "")
				}
			>
				{props.title}
			</span>
		</div>
	);
}
