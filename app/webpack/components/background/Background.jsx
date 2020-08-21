import React, { useState, useEffect } from "react";
import { useScreenSize } from "../../custom_hooks/useScreenSize";

export default function Background(props) {
	const screenSize = useScreenSize();
	const [backgroundSettings, setBackgroundSettings] = useState({
		color: "purple",
		gradient: true,
	});

	return (
		<div
			className={`background background--${backgroundSettings.color}`}
			style={{
				backgroundColor: backgroundSettings.color
			}}
		></div>
	);
}
