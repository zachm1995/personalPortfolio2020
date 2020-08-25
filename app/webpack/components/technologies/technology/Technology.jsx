import React from 'react';

export default function Technology(props) {
	return(
		<div className="technology">
			<img src={props.image} alt={props.name} className="technology__image" />
			<div className="technology__name">{props.name}</div>
		</div>
	);
}