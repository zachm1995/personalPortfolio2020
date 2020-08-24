import React, { useState, useEffect } from "react";
import GridItem from "./grid_item/GridItem";

export default function Grid(props) {
	const [gridItems, setGridItems] = useState(props.data);

	// Set state from props
	useEffect(() => {
		setGridItems(props.data);
	}, [props]);

	const renderGrid = gridItems.map((item, index) => {
		return (
			<GridItem
				key={index}
				title={item.title}
				subtitle={item.subtitle}
				description={item.description}
				image_url={item.image_url}
				image_alt={item.image_alt}
				background_image={item.background_image}
			/>
		);
	});

	return <div className="grid">{renderGrid}</div>;
}

// TODO: Allow props to define rows and columns, set default values