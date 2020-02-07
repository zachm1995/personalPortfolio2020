import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Layout from "./components/Layout";

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Layout />,
		document.body.appendChild(document.createElement("div"))
	);
});
