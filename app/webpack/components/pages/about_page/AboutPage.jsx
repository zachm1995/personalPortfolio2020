import React from "react";
import UnitedStatesTravelMap from "images/travel_map.svg";
import Guitar from "images/guitar.png";
import Microphone from "images/microphone.png";
import EagleBadge from "images/eagle_badge.png";
import Latte from "images/latte.png";
import EMT from "images/emt.png";
import PADI from "images/padi.png";
import Code from "images/code.svg";
import Grid from "../../grid/Grid";

export default function AboutPage(props) {

	const aboutItems = [
		{
			title: "I've been around",
			subtitle: "49 states and 23 countries so far",
			image: {UnitedStatesTravelMap},
			image_alt: "a map of the United States showing only Hawaii as the only untraveled state"
		},
		{
			title: "I'm an Eagle Scout",
			subtitle: "with 79 merit badges",
			image: {EagleBadge},
			image_alt: "an Eagle Scout patch"
		},
		{
			title: "I like to play music",
			subtitle: "piano, guitar, percussion, and vocals",
			image: {Guitar},
			image_alt: "an acoustic guitar"
		},
		{
			title: "I won an award for vocals",
			subtitle: "and sang with a vocal group in Carnegie Hall",
			image: {Microphone},
			image_alt: "a microphone"
		},
		{
			title: "I take my coffee black",
			subtitle: "but I'm good at pouring milk",
			image: {Latte},
			image_alt: "a picture of a latte"
		},
		{
			title: "I took EMT training",
			subtitle: "just for fun",
			image: {EMT},
			image_alt: "an EMT symbol"
		},
		{
			title: "I like disruption",
			subtitle: "I've worked at four start-ups",
			image: {Code},
			image_alt: "a symbol for coding"
		},
	];

	return (
		<div className="about-page">
			<h1 className="about-page__title">About Me</h1>
			<div className="about-page__grid">
				<Grid data={aboutItems} />
			</div>
		</div>
	);
}
