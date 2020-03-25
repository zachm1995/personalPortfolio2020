import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import Index from "../components/Index";

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Router>
			<Route path='/' component={Index} />
		</Router>,
		document.body.appendChild(document.createElement("div"))
	);
});
