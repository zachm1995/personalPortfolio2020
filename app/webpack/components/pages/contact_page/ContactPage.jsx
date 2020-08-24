import React, { useState, useEffect, useRef } from "react";
import { useAnimate } from "../../../custom_hooks/useAnimate";
import Scrollbar from "smooth-scrollbar";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";

export default function Contact(props) {
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
		<div className="contact-page">
			<div id="scrollingContainer" ref={scrollbarRef}></div>
		</div>
	);
}

// <div className="page-container">
// 			<div className="flex center">
// 				<div className="center">
// 					<div className="ds-title">Let's get in touch</div>
// 					<div className="spacer"></div>
// 					<SocialBox />
// 					<div className="spacer"></div>
// 					<PublicKeyBox />
// 				</div>
// 			</div>
// 		</div>
