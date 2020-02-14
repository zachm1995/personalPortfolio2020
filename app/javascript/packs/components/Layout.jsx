import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Landing from "./Landing";

export default function Layout(props) {
	// TODO: CSS MODULES TO MAKE THIS DYNAMIC; HARD VALUE DEFINED IN SCSS VARIABLES
	const headerHeight = 100;
	const footerHeight = 0;

	return (
		<div>
			<Background />
			<Header/>
			<Landing headerHeight={headerHeight} footerHeight={footerHeight}/>
			{props.children}
		</div>
	);
}
