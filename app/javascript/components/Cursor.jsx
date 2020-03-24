import React, { useState, useEffect } from "react";
import { useMousePosition } from "../custom_hooks/useMousePosition";

export default function Cursor(props) {
	const mousePosition = useMousePosition();

	useEffect(() => {
		document.body.addEventListener('mousedown', () => handleCursorClick());
	}, []);

	function handleCursorClick() {
		document.getElementById("cursor").classList.add("cursor-click");

		setTimeout(() => {
			document.getElementById("cursor").classList.remove("cursor-click");
		}, 1100);
	}

	return (
		<div
			id="cursor"
			className={props.cursorHover ? "cursor-hover" : ""}
			style={{
				top: mousePosition["y"] - 10 + "px",
				left: mousePosition["x"] - 10 + "px"
			}}
			onPointerDown={handleCursorClick}
		>
			<div id="inner-cursor"></div>
		</div>
	);
}
