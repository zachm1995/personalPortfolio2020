import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import NavigationToggle from "./navigation/NavigationToggle";

export default function Header(props) {
	return (
		<div className="header-container">
			<NavigationToggle
				toggleNavigation={props.toggleNavigation}
				navigationActive={props.navigationActive}
				navigationLoaded={props.navigationLoaded}
			/>
			<Navigation
				navigationActive={props.navigationActive}
				handlePageChange={props.handlePageChange}
			/>
		</div>
	);
}
