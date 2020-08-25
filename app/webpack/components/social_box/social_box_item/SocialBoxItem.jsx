import React from "react";

export default function SocialBoxItem(props) {
	return (
		<a
			href={props.link}
			target="_blank"
			className="social-box-item hoverable"
		>
			<img
				src={props.icon}
				className="social-box-item__icon"
			></img>
		</a>
	);
}
