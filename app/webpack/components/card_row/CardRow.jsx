import React, { useState } from "react";
import Card from "./card/Card";

export default function CardRow(props) {
	const [cardData, setCardData] = useState([
		{
			title: "Wholsum",
			description:
				"A web application that logs comprehensive data on whole foods and visualizes the data.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
		{
			title: "Coronavirus Dashboard",
			description:
				"A react frontend that displays covid-19 data from the CDC api using D3.js data visualization.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
		{
			title: "Title",
			description:
				"This is a description. As such, the amount of text is quite long but I don't think it will get much longer than this.",
			image_url:
				"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
		},
	]);

	const renderCards = cardData.map((card, index) => {
		return (
			<Card
				key={index}
				title={card.title}
				description={card.description}
				image_url={card.image_url}
				animationDelay={index * 0.2}
			/>
		);
	});

	return (
		<div className="card-row">
			<h1 className="card-row__title">{props.title}</h1>
			<div className="card-row__cards-container">{renderCards}</div>
		</div>
	);
}
