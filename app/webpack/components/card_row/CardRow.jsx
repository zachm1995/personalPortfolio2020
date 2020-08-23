import React, { useState, useEffect } from "react";
import Card from "./card/Card";

export default function CardRow(props) {
	const [cardData, setCardData] = useState(props.data);

	useEffect(() => {
		setCardData(props.data);
	}, [props])

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
