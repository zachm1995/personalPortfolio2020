import React, { useState, useEffect } from "react";

export default function Landing(props) {
	const [height, setHeight] = useState(
		window.innerHeight - props.headerHeight - props.footerHeight
	);

	useEffect(() => {
		const handleResize = () =>
			setHeight(
				window.innerHeight - props.headerHeight - props.footerHeight
			);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="landing-page-container" style={{ height: height }}>
			<div className="landing-page-centered">
				<div>Zach Mumbauer</div>
				<div>design, development, orchestration</div>
			</div>
		</div>
	);
}
