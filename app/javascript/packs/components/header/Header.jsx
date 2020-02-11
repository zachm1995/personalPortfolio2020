import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import NavigationToggle from "./navigation/NavigationToggle";

export default function Header() {
	const [navigationActive, setNavigationActive] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
		console.log(navigationActive);
	}

	return (
		<div className="header-container">
			<NavigationToggle toggleNavigation={toggleNavigation} navigationActive={navigationActive} />
			<Navigation navigationActive={navigationActive} />
		</div>
	);
}