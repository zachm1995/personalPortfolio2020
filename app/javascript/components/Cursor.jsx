import React, { useState, useEffect } from "react";
import { useMousePosition } from "../custom_hooks/useMousePosition";

export default function Cursor(props) {
	const mousePosition = useMousePosition();
	const [scrollTop, setScrollTop] = useState(window.pageYOffset);

	useEffect(() => {
		setScrollTop(window.pageYOffset);
	}, [window.pageYOffset]);

	useEffect(() => {
		window.addEventListener('click', () => handleCursorClick());
	}, []);

	function handleCursorClick() {
		document.getElementById("cursor").classList.add("cursor-click");
		setTimeout(() => {
			document.getElementById("cursor").classList.remove("cursor-click");
		}, 900);
	}

	return (
		<div
			id="cursor"
			className={props.cursorHover ? "cursor-hover" : ""}
			style={{
				top: mousePosition["y"] - 10 - scrollTop + "px",
				left: mousePosition["x"] - 10 + "px"
			}}
		>
			<div id="inner-cursor"></div>
		</div>
	);
}
