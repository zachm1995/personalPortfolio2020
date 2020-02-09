import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import NavigationToggle from "./NavigationToggle";

export default function Header() {
	const [navigationActive, setNavigationActive] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
		console.log(navigationActive);
	}

	return (
		<div className="header-container">
			<NavigationToggle toggleNavigation={toggleNavigation} />
			<Navigation navigationActive={navigationActive} />
		</div>
	);
}