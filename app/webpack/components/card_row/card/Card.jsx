import React, { useState } from "react";

export default function Card(props) {
	// TODO: on hover add class flip and expand
	return (
		<a
			href={props.link}
			target="_blank"
			className={`card hoverable `}
			data-animate={JSON.stringify({
				animationName: "fade",
				animationDirection: "down",
				animationOn: ["enter"],
				reanimate: false,
			})}
			style={{
				animationDelay: `${props.animationDelay}s`,
			}}
		>
			<div className="card__image-container">
				<img src={props.image_url} alt="" className="card__image" />
			</div>
			<div className="card__title">{props.title}</div>
			<div className="card__description">{props.description}</div>
		</a>
	);
}
