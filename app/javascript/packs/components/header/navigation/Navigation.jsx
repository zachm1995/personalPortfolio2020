import React, { useState } from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation(props) {
	return (
		<div
			className={
				"navigation-menu-container " +
				(props.navigationActive ? "active" : "")
			}
		>
			<div className="navigation-items-container">
				<NavigationItem title="home" />
				<NavigationItem title="home" />
				<NavigationItem title="home" />
				<NavigationItem title="home" />
				<NavigationItem title="home" />
				<NavigationItem title="home" />
				<NavigationItem title="home " />
			</div>
		</div>
	);
}
