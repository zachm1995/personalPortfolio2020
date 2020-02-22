import React, { useState } from "react";

export default function NavigationItem(props) {
	return (
		<div
			className={
				"navigation-menu-item " +
				(props.navigationActive ? "animate fadeUp" : "")
			}
			onClick={() => {
				props.handlePageChange(props.link);
			}}
		>
				<span>{props.title}</span>
		</div>
	);
}