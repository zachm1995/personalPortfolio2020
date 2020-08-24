import React from "react";
import NavBarItem from "./nav_bar_item/NavBarItem";

export default function NavBar(props) {
	const renderNavBarItems = props.navBarItems.map((item, index) => {
		return (
			<NavBarItem
				key={index}
				title={item.title}
				link={item.link}
				animationDelay={index * 0.2}
				active={props.active}
				navItemHover={props.itemHover}
				handleItemHover={props.handleItemHover}
			/>
		);
	});

	return <div className="nav-bar">{renderNavBarItems}</div>;
}
