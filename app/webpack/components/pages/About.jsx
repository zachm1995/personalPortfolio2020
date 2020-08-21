import React from "react";
import { useEffect } from "react";
import Arrow from "images/arrow.svg";
import UnitedStatesTravelMap from "images/travel_map.svg";
import Guitar from "images/guitar.png";
import Microphone from "images/microphone.png";
import EagleBadge from "images/eagle_badge.png";
import Latte from "images/latte.png";
import EMT from "images/emt.png";
import PADI from "images/padi.png";
import Code from "images/code.svg";

export default function About(props) {
	return (
		<div className="page-container ele-page" data-animate>
			<div className="ele-section">
				<div className="ele-title center">Zach Mumbauer</div>
				<div className="ele-subtitle center">The concise version</div>
			</div>

			<div className="ele-section" data-animate>
				<div className="ele-blurb">
					My life’s aspiration is to leverage technology and socially
					conscientious business practices to create a lasting,
					positive impact for as many people as possible.
				</div>
			</div>

			<div className="ele-section" data-animate>
				<div className="ele-subtitle center">Scroll</div>
				<img
					src={Arrow}
					className="about-arrow center"
					alt="an arrow pointing down"
				/>
			</div>
			<div className="spacer"></div>
			<div className="ele-section">
				<div className="flex flex-2">
					<div data-animate>
						<img
							src={UnitedStatesTravelMap}
							className="about-image animate"
							alt="a map of the United States showing only Hawaii as the only untraveled state"
						/>
						<div className="ele-title center">I've been around</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							49 states and 23 countries so far
						</div>
					</div>

					<div>
						<img
							src={EagleBadge}
							className="about-image"
							alt="an Eagle Scout patch"
						/>
						<div className="ele-title center">
							I'm an Eagle Scout
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							with 79 merit badges
						</div>
					</div>

					<div>
						<img
							src={Guitar}
							className="about-image"
							alt="an acoustic guitar"
						/>
						<div className="ele-title center">
							I like to play music
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							piano, guitar, percussion, and vocals
						</div>
					</div>

					<div>
						<img
							src={Microphone}
							className="about-image"
							alt="a microphone"
						/>
						<div className="ele-title center">
							I won an award for vocals
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							and sang with a vocal group in Carnegie Hall
						</div>
					</div>

					<div>
						<img
							src={Latte}
							className="about-image"
							alt="a picture of a latte"
						/>
						<div className="ele-title center">
							I take my coffee black
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							but I'm good at pouring milk
						</div>
					</div>

					<div>
						<img
							src={EMT}
							className="about-image"
							alt="an EMT symbol"
						/>
						<div className="ele-title center">
							I took EMT training
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							and luckily never had to use it
						</div>
					</div>

					<div>
						<img
							src={Code}
							className="about-image"
							alt="a symbol for coding"
						/>
						<div className="ele-title center">
							I like disruption
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px",
							}}
						>
							I've worked at four start-ups
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
