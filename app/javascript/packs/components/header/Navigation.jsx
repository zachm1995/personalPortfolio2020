import React, { useState } from "react";

export default function Navigation(props) {
	return <div className={"navigation-menu-container " +  (props.navigationActive ? 'active' : '')}></div>;
}