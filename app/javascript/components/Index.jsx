import React, { Component, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Cursor from "./Cursor";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function Index(props) {
	const [navigationActive, setNavigationActive] = useState(false);
	const [cursorHover, setCursorHover] = useState(false);
	const [backgroundColor, setBackgroundColor] = useState("purple-gradient");
	const [browserType, setBrowserType] = useState("");

	const location = useLocation();
	let pathname = location.pathname;

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
	}
	const headerHeight = 100;
	const footerHeight = 0;

	function handleHoverableElement(state) {
		setCursorHover(state);
	}

	useEffect(() => {
		renderSwitch(pathname);
	}, [pathname]);

	function renderSwitch(pathname) {
		switch (pathname) {
			case "/":
				return setBackgroundColor("gradient-purple");
			case "/about":
				return setBackgroundColor("ele");
			default:
				return setBackgroundColor("gradient-purple");
		}
	}

	return (
		<div>
			<Background
				navigationActive={navigationActive}
				backgroundColor={backgroundColor}
			/>
			<Cursor
				cursorHover={cursorHover}
				backgroundColor={backgroundColor}
			/>
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				handleHoverableElement={handleHoverableElement}
				backgroundColor={backgroundColor}
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
