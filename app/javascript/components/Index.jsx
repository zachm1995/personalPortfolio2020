import React, { Component, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Landing from "./pages/Landing";
import About from "./pages/About";

export default function Index(props) {
	const [currentPage, setCurrentPage] = useState("landing");
	const [navigationActive, setNavigationActive] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
	}

	// TODO: CSS MODULES TO MAKE THIS DYNAMIC; HARD VALUE DEFINED IN SCSS VARIABLES
	const headerHeight = 100;
	const footerHeight = 0;

	function handlePageChange(page) {
		setCurrentPage(page);
		toggleNavigation();
	}


	return (
		<div>
			<Background />
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				handlePageChange={handlePageChange}
			/>
			{currentPage == "landing" && !navigationActive && (
				<Landing
					headerHeight={headerHeight}
					footerHeight={footerHeight}
				/>
			)}

			{currentPage == "about" && !navigationActive && (
				<About />
			)}
		</div>
	);
}
