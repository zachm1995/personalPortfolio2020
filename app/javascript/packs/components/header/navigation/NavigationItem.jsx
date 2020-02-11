import React, {useState} from 'react'

export default function NavigationItem(props) {
	const [active, setActive] = useState(false);

	return(
		<div className='navigation-menu-item'>
			<a href="#"><span>{props.title}</span></a>
		</div>
	);
}