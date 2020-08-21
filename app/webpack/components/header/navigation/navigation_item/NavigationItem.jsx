import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
	const [itemActive, setItemActive] = useState(false);

	return (
		<div
			className={
				`navigation-item hoverable`
			}
			onMouseEnter={() => {
				setItemActive(true);
			}}
			onMouseLeave={() => {
				setItemActive(false);
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
