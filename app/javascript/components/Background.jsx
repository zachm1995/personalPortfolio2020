import React, { useState, useEffect } from "react";

export default function Background(props) {
	
	return (
		<div id='siteBackground' className={"site-background-container " + props.backgroundColor}></div>
	);
}
