import React from "react";
import UnitedStatesTravelMap from "images/travel_map.svg";

export default function About(props) {
	return (
		<div className="ele-page">
			<div className="ele-section">
				<div className="title center">Zach Mumbauer</div>
				<div className="subtitle center">The concise version</div>
			</div>
			<div className="ele-section">
				<div className="ele-blurb">
					My life’s aspiration is to leverage technology and socially
					conscientious business practices to create a lasting,
					positive impact for as many people as possible.
				</div>
			</div>
			<div className="ele-section">
				<div className="flex flex-2">
					<div>
						<div className="title center">Qualitative</div>
						<div className="body">49 states</div>
					</div>
					<div>
						<div className="title center">Quantitative</div>
						<div className="body"></div>
					</div>
				</div>
				<div className="flex flex-2">
					<div>
						<div className="title center">Qualitative</div>
						<div className="body">49 states</div>
					</div>
					<div>
						<div className="title center">Quantitative</div>
						<div className="body"></div>
					</div>
				</div>
			</div>
			<p>here is a map of my travels in the United States:</p>
			<img
				src={UnitedStatesTravelMap}
				className="about-travel-map"
				alt="a map of the United States showing only Hawaii as the only untraveled state"
			/>
			<p>this is a map of my travels internationally:</p>
			<p></p>
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
