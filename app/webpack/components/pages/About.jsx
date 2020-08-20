import React from "react";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
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
	useEffect(() => {
		ScrollOut();
	}, []);

	return (
		<div className="page-container ele-page">
			<div className="ele-section">
				<div className="ele-title center" data-scroll>
					Zach Mumbauer
				</div>
				<div className="ele-subtitle center" data-scroll>
					The concise version
				</div>
			</div>

			<div className="ele-section">
				<div className="ele-blurb" data-scroll>
					My life’s aspiration is to leverage technology and socially
					conscientious business practices to create a lasting,
					positive impact for as many people as possible.
				</div>
			</div>

			<div className="ele-section">
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
					<div>
						<img
							src={UnitedStatesTravelMap}
							className="about-image"
							alt="a map of the United States showing only Hawaii as the only untraveled state"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I've been around
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							49 states and 23 countries so far
						</div>
					</div>

					<div>
						<img
							src={EagleBadge}
							className="about-image"
							alt="an Eagle Scout patch"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I'm an Eagle Scout
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							with 78 merit badges
						</div>
					</div>

					<div>
						<img
							src={Guitar}
							className="about-image"
							alt="an acoustic guitar"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I like to play music
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							piano, guitar, percussion, and vocals
						</div>
					</div>

					<div>
						<img
							src={Microphone}
							className="about-image"
							alt="a microphone"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I won an award for vocals
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							and sang with a vocal group in Carnegie Hall
						</div>
					</div>

					<div>
						<img
							src={Latte}
							className="about-image"
							alt="a picture of a latte"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I take my coffee black
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							but I'm good at pouring milk into cups
						</div>
					</div>

					<div>
						<img
							src={EMT}
							className="about-image"
							alt="an EMT symbol"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I took EMT training
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							and luckily never had to use it
						</div>
					</div>

					<div>
						<img
							src={Code}
							className="about-image"
							alt="a symbol for coding"
							data-scroll
						/>
						<div className="ele-title center" data-scroll>
							I like disruption
						</div>
						<div
							className="ele-body center"
							style={{
								marginTop: "-40px"
							}}
							data-scroll
						>
							I've worked at four start-ups
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
