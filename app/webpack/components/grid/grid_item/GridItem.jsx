import React from "react";

export default function GridItem(props) {
	return (
		<div
			className="grid-item"
			data-animate={JSON.stringify({
				animationName: "fade",
				animationDirection: "left",
				animationSpeed: "fast",
				animationOn: ["enter"],
				reanimate: false,
			})}
			style={{
				backgroundImage: `url(${props.background_image})`
			}}
		>
		<img src={props.image_url} alt={props.image_alt} className="grid-item__image" />
		<div className="grid-item__title">{props.title}</div>
		<div className="grid-item__subtitle">{props.subtitle}</div>
		</div>
	);
}
				// title={item.title}
				// subtitle={item.subtitle}
				// description={item.description}
				// image={item.image_url}
				// image_alt={item.image_alt}