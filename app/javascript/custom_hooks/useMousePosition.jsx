import { useState, useEffect } from "react";

export const useMousePosition = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const setFromEvent = e => setPosition({ x: e.pageX, y: e.pageY });
		window.addEventListener("mousemove", setFromEvent);
		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	return position;
};
