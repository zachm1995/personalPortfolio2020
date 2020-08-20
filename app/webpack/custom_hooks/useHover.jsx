import { useState, useEffect } from "react";

export const useHover = () => {
	const [hover, setHover] = useState(false);

	useEffect(() => {
		const setFromEvent = e => setHover(true);
		window.addEventListener("mousemove", setFromEvent);
		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	return position;
};
