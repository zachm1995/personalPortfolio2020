import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function Background(props) {
	const [backgroundColor, setBackgroundColor] = useState("purple-gradient");
	const location = useLocation();
	let pathname = location.pathname

	useEffect(() => {
		renderSwitch(pathname);
	}, [pathname]);

	function renderSwitch(pathname) {
		switch (pathname) {
			case "/":
				return setBackgroundColor("purple-gradient");
			case "/about":
				return setBackgroundColor("slate-gradient");
			default:
				return setBackgroundColor("purple-gradient");
		}
	}

	return (
		<div className={"site-background-container " + backgroundColor}></div>
	);
}
