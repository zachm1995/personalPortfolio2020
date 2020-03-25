import React, { useState, useEffect } from "react";
import { useMousePosition } from "../custom_hooks/useMousePosition";
import { useMouseClick } from "../custom_hooks/useMouseClick";

export default function Cursor(props) {
	const mousePosition = useMousePosition();
	const mouseClick = useMouseClick();
	const [scrollTop, setScrollTop] = useState(window.pageYOffset);

	useEffect(() => {
		setScrollTop(window.pageYOffset);
	}, [window.pageYOffset]);

	useEffect(() => {
		handleCursorClick();
	}, [mouseClick]);

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
			onPointerDown={handleCursorClick}
		>
			<div id="inner-cursor"></div>
		</div>
	);
}
