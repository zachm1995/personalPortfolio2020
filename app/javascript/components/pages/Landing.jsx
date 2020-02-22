import React, { useState, useEffect } from "react";
import Typed from "react-typed";

export default function Landing(props) {
	const [height, setHeight] = useState(
		window.innerHeight - props.headerHeight - props.footerHeight
	);

	const [loaded, setLoaded] = useState(false);

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

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div className="landing-page-container" style={{ height: height }}>
			<div className="landing-page-centered">
				<div className={loaded ? "animate fadeDown" : ""}>
					Zach Mumbauer
				</div>
				<div>
					<Typed strings={["Tech-centric pantologist"]} typeSpeed={40} startDelay={1200} />
				</div>
			</div>
		</div>
	);
}
