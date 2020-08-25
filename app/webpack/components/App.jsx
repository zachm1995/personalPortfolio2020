import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Background from "./background/Background";
import Header from "./header/Header";
import LandingPage from "./pages/landing_page/LandingPage";
import Cursor from "./cursor/Cursor";
import AboutPage from "./pages/about_page/AboutPage";
import ContactPage from "./pages/contact_page/ContactPage";

export default function App(props) {
	return (
		<div className="app">
			<Background color="black" gradient="true" />
			<Cursor />
			<Router>
				<Header />
				<div className="app__content-container">
					<Switch>
						<Route exact path="/" component={LandingPage} />

						<Route exact path="/about" component={AboutPage} />

						<Route exact path="/contact" component={ContactPage} />

						<Route path="/" component={Page404} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

const Page404 = () => {
	return(
		<div className="not-found">
			<img src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif" alt="John Travolta looking confused" />
			Nope. Thats not here.<br />(404)
		</div>
	);
}