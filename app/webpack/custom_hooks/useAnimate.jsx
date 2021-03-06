import React, { useEffect } from "react";

export const useAnimate = (animationElements) => {

	useEffect(() => {
		animationElements.forEach((element) => {
			animationObserver.observe(element);
		});
		return () => {
			animationElements.forEach((element) => {
			animationObserver.unobserve(element);
		});
		}
	}, [animationElements]);

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
						entry.target.classList.add(
							`animate--${animationSettings.animationSpeed}`
						);
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
			threshold: 0.25,
		}
	);
};


// TODO: Add default values for animation settings