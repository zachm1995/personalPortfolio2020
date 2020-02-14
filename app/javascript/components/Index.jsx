import React, { Component, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Landing from "./Landing";

export default function Index(props) {
	const [navigationActive, setNavigationActive] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
	}

	// TODO: CSS MODULES TO MAKE THIS DYNAMIC; HARD VALUE DEFINED IN SCSS VARIABLES
	const headerHeight = 100;
	const footerHeight = 0;

	return (
		<div>
			<Background />
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				navigationLoaded={navigationLoaded}
			/>
			{!navigationActive && (
				<Landing
					headerHeight={headerHeight}
					footerHeight={footerHeight}
				/>
			)}
			{props.children}
		</div>
	);
}
