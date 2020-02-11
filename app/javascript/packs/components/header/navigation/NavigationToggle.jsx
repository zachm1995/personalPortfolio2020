import React, { useState, useEffect } from "react";

export default function NavigationToggle(props) {
	return (
		<div
			className={
				"navigation-toggle " + (props.navigationActive ? "active" : "")
			}
			onClick={() => props.toggleNavigation()}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
