import React, { useState, useEffect } from "react";

export default function NavMenuToggle(props) {
	const [currentColor, setCurrentColor] = useState("purple");
	
	return (
		<div
			className={`nav-menu-toggle hoverable ${
				props.navigationActive ? "nav-menu-toggle--active" : ""
			}`}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
