import React, { Component, useState, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import Header from "./header/Header";
import Landing from "./pages/landing/Landing";
import CardRow from "./card_row/CardRow";
import Footer from "./footer/Footer";
import Background from "./background/Background";
import Cursor from "./cursor/Cursor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";

export default function App(props) {
	// Initialized Scroll and Animation Handling
	useEffect(() => {
		// Handles momentum scrolling
		Scrollbar.init(document.querySelector("#scrollingContainer"), {
			damping: 0.05,
		});

		// Tracks when animated elements enter viewport
		const animationObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					const animationSettings = JSON.parse(
						entry.target.dataset.animate
					);

					const className = `${animationSettings.animationName}-${animationSettings.animationDirection}-in`;

					// When element enters view
					if (
						entry.isIntersecting &&
						animationSettings.animationOn.includes("enter")
					) {
						entry.target.classList.add("animate", className);

						if (animationSettings.animationSpeed !== undefined) {
							entry.target.classList.add(`animate--${animationSettings.animationSpeed}`);
						}
					}

					// When element exits view
					else {
						if (animationSettings.reanimate === true) {
							entry.target.classList.remove("animate", className);
						}
					}
				});
			},
			{
				root: document.getElementById("scrollingContainer"),
				threshold: 0.25,
			}
		);

		document.querySelectorAll("[data-animate]").forEach((element) => {
			animationObserver.observe(element);
		});
	}, []);

	return (
		<div className="app">
			<Background color="purple" gradient="true" />
			<Cursor />
			<Header />
			<div className="app__content-container" id="scrollingContainer">
				<Landing />
				<CardRow title="Some Projects" />
				<Switch>
					<Route exact path="/about" component={About} />

					<Route exact path="/contact" render={() => <Contact />} />
				</Switch>
			</div>
		</div>
	);
}
