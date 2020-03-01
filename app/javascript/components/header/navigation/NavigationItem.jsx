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
			}}
			onMouseLeave={() => {
				props.handleItemHover(false);
				setItemActive(false);
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
