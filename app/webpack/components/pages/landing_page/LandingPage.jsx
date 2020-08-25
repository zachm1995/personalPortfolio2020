import React, { useState, useEffect, useRef } from "react";
import QuoteSlider from "../../quote_slider/QuoteSlider";
import CardRow from "../../card_row/CardRow";
import Footer from "../../footer/Footer";
import Typed from "react-typed";
import { useAnimate } from "../../../custom_hooks/useAnimate";
import Scrollbar from "smooth-scrollbar";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";
import Technologies from "../../technologies/Technologies";

import SkedgeLogo from "../../../images/landing_page/skedge.svg";
import LinkedIn from "../../../images/landing_page/linkedin.png";
import CodePen from "../../../images/landing_page/codepen.png";

export default function LandingPage(props) {
	const [animationElements, setAnimationElements] = useState([]);
	const animation = useAnimate(animationElements);
	const screenSize = useScreenSize();
	const scrollbarRef = useRef();

	// Sets animation elements for the page
	useEffect(() => {
		if (screenSize.x > 760) {
			Scrollbar.init(scrollbarRef.current, {
				damping: 0.05,
			});
		}

		setAnimationElements(document.querySelectorAll("[data-animate]"));
	}, []);

	return (
		<div className="landing-page">
			<div id="scrollingContainer" ref={scrollbarRef}>
				<div className="landing-page__centered-box">
					<h1
						className={`landing-page__main-title hoverable`}
						data-animate={JSON.stringify({
							animationName: "fade",
							animationDirection: "down",
							animationSpeed: "slow",
							animationOn: ["enter"],
							reanimate: true,
						})}
					>
						Zach Mumbauer
					</h1>
					<div
						className="landing-page__sub-title"
						data-animate={JSON.stringify({
							animationName: "fade",
							animationDirection: "down",
							animationSpeed: "slow",
							animationOn: ["enter"],
							reanimate: true,
						})}
					>
						<Typed
							strings={["Tech-centric pantologist"]}
							typeSpeed={30}
							startDelay={1000}
							showCursor={false}
						/>
					</div>
				</div>
				<QuoteSlider />

				<Technologies />
				<CardRow
					data={[
						{
							title: "CodePen",
							description: "Check out some of my projects",
							image_url: CodePen,
							link: "https://codepen.io/zach_mumbauer",
						},
						{
							title: "Skedge",
							description:
								"A Ruby on Rails application to manage employee shift scheduling.",
							image_url: SkedgeLogo,
							link: "https://github.com/zachm1995/skedge",
						},
						{
							title: "LinkedIn",
							description:
								"Learn about my work experience and educational background",
							image_url: LinkedIn,
							link: "https://www.linkedin.com/in/zachmum/",
						},
					]}
					title="Some of my work"
				/>
				<Footer />
			</div>
		</div>
	);
}
