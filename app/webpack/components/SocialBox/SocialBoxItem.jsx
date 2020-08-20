import React from "react";

export default function SocialBoxItem(props) {
	return (
		<a
			href={props.link}
			target="_blank"
			className="social-box-item"
			style={{
				width: 100 / props.numItems + "%",
				height: "100%",
				float: "left",
				display: "inline-block",
				backgroundColor: props.color,
				boxSizing: "border-box",
				padding: 20,
			}}
			onMouseEnter={() => props.handleHoverableElement(true)}
			onMouseLeave={() => props.handleHoverableElement(false)}
		>
			<img
				src={props.icon}
				className="social-icon"
				alt={props.name}
				style={{
					height: "100%",
					width: "100%",
				}}
			/>
		</a>
	);
}
