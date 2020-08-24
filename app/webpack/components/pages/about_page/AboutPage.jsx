import React, { useState, useEffect, useRef } from "react";
import { useAnimate } from "../../../custom_hooks/useAnimate";
import Scrollbar from "smooth-scrollbar";
import { useScreenSize } from "../../../custom_hooks/useScreenSize";
import Grid from "../../grid/Grid";4

// Import Icons
import UnitedStatesTravelMap from "images/about_page/travel_map.svg";
import Guitar from "images/about_page/guitar.png";
import Microphone from "images/about_page/microphone.png";
import EagleBadge from "images/about_page/eagle_badge.png";
import Latte from "images/about_page/latte.png";
import EMT from "images/about_page/emt.png";
import CodeIcon from "images/about_page/code_icon.svg";

// Import Images
import Road from "images/about_page/road.jpg";
import Backpack from "images/about_page/backpack.jpg";
import Drums from "images/about_page/drums.jpg";
import Vocals from "images/about_page/vocals.jpg";
import Portafilter from "images/about_page/portafilter.jpg";
import FirstAid from "images/about_page/first_aid.jpg";
import Code from "images/about_page/code.jpg";

export default function AboutPage(props) {
	const [animationElements, setAnimationElements] = useState([]);
	const animation = useAnimate(animationElements);
	const screenSize = useScreenSize();
	const scrollbarRef = useRef();

	const aboutItems = [
		{
			title: "I've been around",
			subtitle: "49 states and 23 countries so far",
			image_url: UnitedStatesTravelMap,
			image_alt:
				"a map of the United States showing only Hawaii as the only untraveled state",
			background_image: Road,
		},
		{
			title: "I'm an Eagle Scout",
			subtitle: "with 79 merit badges",
			image_url: EagleBadge,
			image_alt: "an Eagle Scout patch",
			background_image: Backpack,
		},
		{
			title: "I like to play music",
			subtitle: "piano, guitar, percussion, and vocals",
			image_url: Guitar,
			image_alt: "an acoustic guitar",
			background_image: Drums,
		},
		{
			title: "I won an award for vocals",
			subtitle: "and sang with a vocal group in Carnegie Hall",
			image_url: Microphone,
			image_alt: "a microphone",
			background_image: Vocals,
		},
		{
			title: "I take my coffee black",
			subtitle: "but I'm good at pouring milk",
			image_url: Latte,
			image_alt: "a picture of a latte",
			background_image: Portafilter,
		},
		{
			title: "I took EMT training",
			subtitle: "just for fun",
			image_url: EMT,
			image_alt: "an EMT symbol",
			background_image: FirstAid,
		},
		{
			title: "I like disruption",
			subtitle: "I've worked at four start-ups",
			image_url: CodeIcon,
			image_alt: "a symbol for coding",
			background_image: Code,
		},
	];

	// Sets animation elements for the page
	useEffect(() => {
		if (screenSize.x > 760) {
			Scrollbar.init(scrollbarRef.current, {
				damping: 0.05,
			});
		}

		setAnimationElements(document.querySelectorAll("[data-animate]"));
		aboutItems.forEach((item) => {
			console.log(item.image_url);
		})
	}, []);

	return (
		<div className="about-page">
			<div id="scrollingContainer" ref={scrollbarRef}>
				<div className="about-page__professional-title"></div>
				<div className="about-page__personal-title">On a personal note...</div>
				<Grid data={aboutItems} />
			</div>
		</div>
	);
}
