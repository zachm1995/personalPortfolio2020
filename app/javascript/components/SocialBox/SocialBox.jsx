import React, { useState, useEffect } from "react";
import SocialBoxItem from "./SocialBoxItem";
import LinkedIn from "images/social_icons/linkedin.svg";
import Github from "images/social_icons/github.svg";
import StackOverflow from "images/social_icons/stack_overflow.svg";
import Twitter from "images/social_icons/twitter.svg";
import Facebook from "images/social_icons/facebook.svg";

export default function SocialBox(props) {
	const items = [
		{
			name: "LinkedIn",
			color: "#0e76a8",
			link: "https://www.linkedin.com/in/zachmum/",
			icon: LinkedIn,
		},
		{
			name: "Github",
			color: "#7DBBE6",
			link: "https://github.com/zachm1995",
			icon: Github,
		},
		{
			name: "StackOverflow",
			color: "#ef8236",
			link: "https://stackoverflow.com/users/6168785/mumbeezy",
			icon: StackOverflow,
		},
		{
			name: "Twitter",
			color: "#00acee",
			link: "https://twitter.com/zmumbauer",
			icon: Twitter,
		},
		// {
		// 	name: "Facebook",
		// 	color: "#3b5998",
		// 	link: "https://www.facebook.com/mumbeezy",
		// 	icon: Facebook,
		// },
	];
	const [numItems, setNumItems] = useState(items.length);

	return (
		<div className="social-box-container" style={{
			height: '100px',
			width: '400px'
		}}>
			{items.map((item, index) => {
				return (
					<SocialBoxItem
						name={item.name}
						link={item.link}
						color={item.color}
						icon={item.icon}
						numItems={numItems}
						key={index}
						handleHoverableElement={props.handleHoverableElement}
					/>
				);
			})}
		</div>
	);
}
