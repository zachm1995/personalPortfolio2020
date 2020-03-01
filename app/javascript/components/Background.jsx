import React, {useState} from 'react'

export default function Background(props) {
	return (
		<div className={
				"site-background-container " +
				(props.navigationActive ? "active" : "")
			}></div>
	);
}