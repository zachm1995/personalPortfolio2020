import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import NavigationToggle from "./navigation_toggle/NavigationToggle";

export default function Header(props) {
	const [headerActive, setHeaderActive] = useState(false);

	return (
		<div className={`header ${headerActive ? "header--active" : ""}`}>
			<NavigationToggle
				navigationLoaded={props.navigationLoaded}
				handleHoverableElement={props.handleHoverableElement}
				background={props.background}
			/>
			<Navigation
				handleHoverableElement={props.handleHoverableElement}
				toggleNavigation={props.toggleNavigation}
				active={headerActive}
			/>
		</div>
	);
}
