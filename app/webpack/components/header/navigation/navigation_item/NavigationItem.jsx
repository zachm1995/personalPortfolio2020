import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
	const [itemActive, setItemActive] = useState(false);

	return (
			<Link
				className={
					`navigation-item hoverable ${itemActive ? "navigation-item--active " : ""} ${props.active ? 'animate fadeDown' : 'animate fadeOutUp'}`
				}
				style={{
					animationDelay: `${props.animationDelay}s`
				}}
				to={'/' + props.link}
			>
				{props.title}
			</Link>
	);
}
