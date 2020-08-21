import React, { Component, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Cursor from "./cursor/Cursor";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function Index(props) {
	const [navigationActive, setNavigationActive] = useState(false);
	const [background, setBackground] = useState({
		color: "purple",
		type: "gradient",
	});
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
				return setBackground({ color: "purple", type: "gradient" });
			case "/about":
				return setBackground({ color: "ele", type: "gradient" });
			case "/contact":
				return setBackground({ color: "slate", type: "gradient" });
			default:
				return setBackground({ color: "purple", type: "gradient" });
		}
	}

	return (
		<div>
			<Background
				navigationActive={navigationActive}
				background={background}
			/>
			<Cursor background={background} />
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				handleHoverableElement={handleHoverableElement}
				background={background}
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
				{!navigationActive && (
					<Route
						exact
						path="/contact"
						render={() => (
							<Contact
								handleHoverableElement={handleHoverableElement}
							/>
						)}
					/>
				)}
			</Switch>
		</div>
	);
}
