import React from 'react';

export default function FunFact(props) {
	return (
		<div className='fun-fact-container'>
			<div className="fun-fact-left">
				<div>{props.fact}</div>
			</div>
			<div className="fun-fact-right">
				<img src="{props.image_url}" alt=""/ className='fun-fact-image'>
			</div>
		</div>
	);
}