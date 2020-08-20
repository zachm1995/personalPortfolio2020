import React, { useState, useEffect } from "react";
import { useScreenSize } from "../custom_hooks/useScreenSize";

export default function Background(props) {
	const screenSize = useScreenSize();
	const [backgroundType, setBackgroundType] = useState(props.background['type']);

	useEffect(() => {
		setBackgroundType(props.background['type']);
	}, [props.background['type']]);

	function renderBackground(size) {
		let background = [];
		for (let i = 1; i <= size; i++) {
			for (let j = 1; j <= size; j++) {

				background.push(
					<div
						className={
							"patch " + "patch-row-" + i + " " + "patch-col-" + j
						}
						key={i + ", " + j}
						style={{
							height: screenSize["y"] / size + "px",
							width: screenSize["x"] / size + "px",
						}}
					></div>
				);
			}
		}
		return background;
	}

	return (
		<div>
			{backgroundType == "gradient" && (
				<div
					id="siteBackground"
					className={
						"site-background-container " + props.background['color']
					}
				></div>
			)}

			{backgroundType == "patchwork" && (
				<div
					id="patchWorkBackground"
					className={"patchwork-background-container "}
				>
					{renderBackground(10)}
				</div>
			)}
		</div>
	);
}
