import { useState, useEffect } from "react";

export const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({
		x: window.innerWidth,
		y: window.innerHeight
	});

	useEffect(() => {
		const setFromEvent = e =>
			setScreenSize({ x: window.innerWidth, y: window.innerHeight });
		window.addEventListener("resize", setFromEvent);

		return () => {
			window.removeEventListener("resize", setFromEvent);
		};
	}, []);
	return screenSize;
};
