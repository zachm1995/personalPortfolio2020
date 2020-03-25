import { useState, useEffect } from "react";

export const useMouseClick = () => {
	const [click, setClick] = useState(false);

	useEffect(() => {
		const setFromEvent = e => setClick(true);
		window.addEventListener("mouseclick", setFromEvent);
		return () => {
			window.removeEventListener("mouseclick", setFromEvent);
		};
	}, []);

	return click;
};
