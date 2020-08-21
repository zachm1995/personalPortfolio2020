import React, { useState } from 'react';
import GridItem from './grid_item/GridItem';

export default function Grid(props) {
	const [gridItems, setGridItems] = useState([
		{
			title: '',
			description: '',
			image_url: ''
		}
	]);

	const renderGrid = 
		gridItems.map((item, index) => {
			return (<GridItem 
				title={item.title}
				description={item.description}
				image_url={item.image_url}
			/>)
		})
	}


	return(
		<div className="grid">
			{renderGrid}
		</div>
	)
}