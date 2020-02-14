import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Index from "../components/Index";

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Index />,
		document.body.appendChild(document.createElement("div"))
	);
});
