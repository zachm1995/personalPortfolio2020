import React, { useState } from "react";

export default function Card(props) {
	const [active, setActive] = useState(false);

	// TODO: on hover add class flip and expand
	return (
		<div
			className={`card hoverable ${active ? "card--active" : ""}`}
			data-animate={JSON.stringify({
				animationName: "fade",
				animationDirection: "down",
				animationSpeed: "fast",
				animationOn: ["enter"],
				reanimate: false,
			})}
			onClick={() => setActive(!setActive)}
			style={{
				animationDelay: `${props.animationDelay}s`,
			}}
		>
			<div className="card__image-container">
				<img src={props.image_url} alt="" className="card__image" />
			</div>
			<h6 className="card__title">{props.title}</h6>
			<div className="card__description">{props.description}</div>
		</div>
	);
}
