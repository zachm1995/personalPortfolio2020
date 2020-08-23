import React, { useState, useEffect, useRef } from "react";
import CardRow from "../../card_row/CardRow";
import Typed from "react-typed";
import { useAnimate } from "../../../custom_hooks/useAnimate";
import Scrollbar from "smooth-scrollbar";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";

export default function Landing(props) {
	const [animationElements, setAnimationElements] = useState([]);
	const animation = useAnimate(animationElements);
	const screenSize = useScreenSize();
	const scrollbarRef = useRef();

	const [projects, setProjects] = useState([
		{
			title: "Wholsum",
			description:
				"A web application that logs comprehensive data on whole foods and visualizes the data.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
		{
			title: "Coronavirus Dashboard",
			description:
				"A react frontend that displays covid-19 data from the CDC api using D3.js data visualization.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
		{
			title: "Title",
			description:
				"This is a description. As such, the amount of text is quite long but I don't think it will get much longer than this.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
	]);

	// Sets animation elements for the page
	useEffect(() => {
		if (screenSize.x > 760) {
			Scrollbar.init(scrollbarRef.current, {
				damping: 0.05
			});
		}
		
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
							typeSpeed={30}
							startDelay={1000}
						/>
					</div>
				</div>
				// Quote Slider
				<CardRow data={projects} />
				<CardRow data={projects} />
				<CardRow data={projects} />
			</div>
		</div>
	);
}
