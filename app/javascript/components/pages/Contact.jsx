import React from "react";
import ContactPattern from "./ContactPattern";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import PublicKeyBox from "../PublicKeyBox";

export default function Contact() {
	return (
		<div className="split-screen-container">
		<div className="spacer"></div>
			<div className="left">
			<div className="flex center">
				<div className="ds-title">Let's get in touch</div>
			</div>
			</div>
			<div className="right">
				<div className="center ds-title">Something Title</div>
			</div>
		</div>
	);
}
