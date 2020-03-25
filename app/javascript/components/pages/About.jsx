import React from "react";
import { useEffect } from 'react';
import UnitedStatesTravelMap from "images/travel_map.svg";

export default function About(props) {

	useEffect(() => {
		console.log('about render');
	})
	return (
		<div className="about-container">
			<h1>this is me</h1>
			<h2>a Zach of all trades</h2>
			<p>here is a map of my travels in the United States:</p>
			<img
				src={UnitedStatesTravelMap}
				className="about-travel-map"
				alt="a map of the United States showing only Hawaii as the only untraveled state"
			/>
			<p>this is a map of my travels internationally:</p>
			<p>
				My life’s aspiration is to leverage technology and socially
				conscientious business practices to create a lasting, positive
				impact for as many people as possible.
			</p>
			<h1>Fun facts...</h1>
			<p>I have visited all 50 states</p>
			<p>I am an Eagle Scout</p>
			<p>I play guitar, piano, and percussion</p>
			<p>I sang with a vocal group in Carnegie Hall</p>
			<p>I have worked with four different start-ups</p>
			<p>I can pour a swan in your latte</p>
			<p>I completed an EMT-B course</p>
			<p>I have a motorcycle license</p>
		</div>
	);
}
