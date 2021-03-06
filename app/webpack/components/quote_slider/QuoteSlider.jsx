import React, { useState } from "react";
import quoteData from "./quotes.json";

export default function QuoteSlider({ quotes = quoteData, size = 20 }) {
	const [currentQuote, setCurrentQuote] = useState(
		quotes[Math.floor(Math.random() * (quotes.length - 1))]
	);

	return (
		<div className="quote-slider">
			<div className="quote-slider__quote-text">
				{currentQuote.quote.split(" ").map((word, index) => {
					return (
						<span
							key={index}
							data-animate={JSON.stringify({
								animationName: "fade",
								animationDirection: "up",
								animationOn: ["enter"],
								reanimate: false,
							})}
							style={{
								display: 'inline-block',
								marginRight: '15px',
								animationDelay: `${.2 * index}s`
							}}
						>{`${word} `}</span>
					);
				})}
			</div>
			<div
				className="quote-slider__author"
				data-animate={JSON.stringify({
					animationName: "fade",
					animationDirection: "up",
					animationSpeed: "slow",
					animationOn: ["enter"],
					reanimate: false,
				})}
				style={{
					animationDelay: `${(currentQuote.quote.split(" ").length - 2)* .2}s`
				}}
				>{currentQuote.author}</div>
		</div>
	);
}
