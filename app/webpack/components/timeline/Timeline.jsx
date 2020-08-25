import React, { useEffect } from 'react';

export default function Timeline (props) {
	// Create Event data
	const data = [
		{
			title: "Born",
			date: '10-19-1995',
			
		}
	];

	useEffect(() => {
		console.log(data)
	}, []);

	return(
		<div className="timeline">
		</div>
	);
}