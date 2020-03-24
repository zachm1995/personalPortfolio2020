import React, { Component, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Background from "./Background";
import Cursor from "./Cursor";
import Landing from "./pages/Landing";
import About from "./pages/About";

export default function Index(props) {
	const [currentPage, setCurrentPage] = useState("landing");
	const [navigationActive, setNavigationActive] = useState(false);
	const [cursorHover, setCursorHover] = useState(false);

	function toggleNavigation() {
		setNavigationActive(!navigationActive);
	}
	const headerHeight = 100;
	const footerHeight = 0;

	function handlePageChange(page) {
		setCurrentPage(page);
		toggleNavigation();
	}

	function handleHoverableElement(hoverable) {
		setCursorHover(hoverable);
	}

	return (
		<div>
			<Background navigationActive={navigationActive} />
			<Cursor cursorHover={cursorHover} />
			<Header
				toggleNavigation={toggleNavigation}
				navigationActive={navigationActive}
				handlePageChange={handlePageChange}
				handleHoverableElement={handleHoverableElement}
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
