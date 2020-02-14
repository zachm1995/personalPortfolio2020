import React, {useState} from 'react'

export default function NavigationItem(props) {

	return(
		<div className={'navigation-menu-item ' + (props.navigationActive ? 'animate fadeUp' : '')}>
			<a href="#"><span>{props.title}</span></a>
		</div>
	);
}