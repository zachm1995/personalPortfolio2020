import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Background />
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
