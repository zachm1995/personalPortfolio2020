import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Landing from "./pages/landing/Landing";
import Footer from "./footer/Footer";
import Background from "./background/Background";
import Cursor from "./cursor/Cursor";
import AboutPage from "./pages/about_page/AboutPage";
import Contact from "./pages/Contact";

export default function App(props) {
	const scrollingRef = useRef();

	// Handles momentum scrolling
	useEffect(() => {}, []);

	return (
		<div className="app">
			<Background color="purple" gradient="true" />
			<Cursor />
			<Router>
				<Header />
				<div className="app__content-container">
					<Switch>
						<Route exact path="/" component={Landing} />

						<Route exact path="/about" component={AboutPage} />

						<Route exact path="/contact" component={Contact} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}
