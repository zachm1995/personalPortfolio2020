import React, { useState, useEffect, useRef } from "react";
import { useMousePosition } from "../../custom_hooks/useMousePosition";

export default function Cursor(props) {
	const mousePosition = useMousePosition();
	const [cursorHover, setCursorHover] = useState(false);
	const [cursorSettings, setCursorSettings] = useState({
		backgroundColor: "",
		borderColor: "grey",
		dotColor: "grey",
		hover: {
			backgroundColor: "",
			borderColor: "grey",
			dotColor: "grey",
		},
	});
	const cursorRef = useRef();

	// Handles Clicks
	useEffect(() => {
		window.addEventListener("click", () => handleCursorClick());
	}, []);

	const handleCursorClick = () => {
		cursorRef.current.classList.add("cursor--click");
		setTimeout(() => {
			cursorRef.current.classList.remove("cursor--click");
		}, 900);
	};

	// Handles Hoverable Elements
	useEffect(() => {
		if (document.querySelectorAll(".hoverable:hover").length > 0) {
			setCursorHover(true);
		} else {
			setCursorHover(false);
		}
	}, [mousePosition]);

	return (
		<div
			ref={cursorRef}
			className={`cursor ${cursorHover ? "cursor--hover" : ""}`}
			style={{
				top: mousePosition["y"] - 10 + "px",
				left: mousePosition["x"] - 10 + "px",
			}}
		>
			<div className="cursor__dot"></div>
		</div>
	);
}
