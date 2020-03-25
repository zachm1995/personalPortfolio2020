import React, { Component, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Cursor from "./Cursor";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";

export default function Index(props) {
	const [navigationActive, setNavigationActive] = useState(false);
	const [cursorHover, setCursorHover] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
	}
	const headerHeight = 100;
	const footerHeight = 0;

	function handleHoverableElement(state) {
		setCursorHover(state);
	}

	return (
		<div>
			<Background
				navigationActive={navigationActive}
			/>
			<Cursor cursorHover={cursorHover} />
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				handleHoverableElement={handleHoverableElement}
			/>
			<Switch>
				{!navigationActive && (
					<Route
						exact
						path="/"
						render={() => (
							<Landing
								headerHeight={headerHeight}
								footerHeight={footerHeight}
							/>
						)}
					/>
				)}
				{!navigationActive && (
					<Route exact path="/about" component={About} />
				)}
			</Switch>
		</div>
	);
}
