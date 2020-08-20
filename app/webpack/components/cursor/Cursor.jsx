import React, { useState, useEffect, useRef } from "react";
import { useMousePosition } from "../../custom_hooks/useMousePosition";

export default function Cursor(props) {
	const mousePosition = useMousePosition();
	const [scrollTop, setScrollTop] = useState(window.pageYOffset);
	const cursorRef = useRef();

	useEffect(() => {
		setScrollTop(window.pageYOffset);
	}, [window.pageYOffset]);

	useEffect(() => {
		window.addEventListener("click", () => handleCursorClick());
	}, []);

	function handleCursorClick() {
		cursorRef.current.classList.add("cursor--click");
		setTimeout(() => {
			cursorRef.current.classList.remove("cursor--click");
		}, 900);
	}

	return (
		<div
			ref={cursorRef}
			className={`cursor ${props.cursorHover ? "cursor--hover" : ""}`}
			style={{
				top: mousePosition["y"] - 10 - scrollTop + "px",
				left: mousePosition["x"] - 10 + "px",
			}}
		>
			<div className="cursor__dot"></div>
		</div>
	);
}
