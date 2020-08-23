import React, { useState, useEffect, useRef } from "react";
import CardRow from "../../card_row/CardRow";
import Typed from "react-typed";
import { useAnimate } from "../../../custom_hooks/useAnimate";
import Scrollbar from "smooth-scrollbar";

export default function Landing(props) {
	const [animationElements, setAnimationElements] = useState([]);
	const animation = useAnimate(animationElements);
	const scrollbarRef = useRef();

	// Sets animation elements for the page
	useEffect(() => {
		Scrollbar.init(scrollbarRef.current);

		setAnimationElements(document.querySelectorAll("[data-animate]"));
	}, []);

	return (
		<div className="landing">
			<div id="scrollingContainer" ref={scrollbarRef}>
				<div className="landing__centered-box">
					<div
						className={`hoverable`}
						data-animate={JSON.stringify({
							animationName: "fade",
							animationDirection: "down",
							animationSpeed: "slow",
							animationOn: ["enter"],
							reanimate: true,
						})}
					>
						Zach Mumbauer
					</div>
					<div>
						<Typed
							strings={["Tech-centric pantologist"]}
							typeSpeed={40}
							startDelay={1200}
						/>
					</div>
				</div>
				<CardRow />
			</div>
		</div>
	);
}
