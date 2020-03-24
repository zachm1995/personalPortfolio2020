import React, { useState, useEffect } from "react";
import { useMousePosition } from "../custom_hooks/useMousePosition";

export default function Cursor(props) {
	const mousePosition = useMousePosition();

	return (
		<div
			id="cursor" className={props.cursorHover ? 'cursor-hover' : ''}
			style={{
				top: mousePosition["y"] - 10 + "px",
				left: mousePosition["x"] - 10 + "px"
			}}
		>
			<div id="inner-cursor"></div>
		</div>
	);
}