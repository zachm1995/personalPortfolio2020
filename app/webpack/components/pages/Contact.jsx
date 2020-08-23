import React from "react";
import SocialBox from "../SocialBox/SocialBox";
import PublicKeyBox from "../PublicKeyBox";

export default function Contact(props) {
	return (
		<div className="page-container">
			<div className="flex center">
				<div className="center">
					<div className="ds-title">Let's get in touch</div>
					<div className="spacer"></div>
					<SocialBox />
					<div className="spacer"></div>
					<PublicKeyBox />
				</div>
			</div>
		</div>
	);
}
