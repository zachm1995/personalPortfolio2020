import React from 'react';
import Technology from './technology/Technology';
import HtmlLogo from '../../images/technology_logos/html.svg';
import CssLogo from '../../images/technology_logos/css.svg';
import JavascriptLogo from '../../images/technology_logos/javascript.svg';
import ReactLogo from '../../images/technology_logos/react.svg';
import D3Logo from '../../images/technology_logos/d3.svg';
import RubyLogo from '../../images/technology_logos/ruby.svg';
import RailsLogo from '../../images/technology_logos/rails.svg';
import PythonLogo from '../../images/technology_logos/python.svg';

export default function Technologies(props) {
	const techData = [
		{
			name: "HTML",
			image: HtmlLogo,
		},
		{
			name: "CSS",
			image: CssLogo,
		},
		{
			name: "Javascript",
			image: JavascriptLogo,
		},
		{
			name: "ReactJS",
			image: ReactLogo,
		},
		{
			name: "D3",
			image: D3Logo,
		},
		{
			name: "Ruby",
			image: RubyLogo,
		},
		{
			name: "Rails",
			image: RailsLogo,
		},
		{
			name: "Python",
			image: PythonLogo,
		},
	]

	const renderTechnologies = techData.map((technology, index) => {
		return (<Technology 
			key={index}
			image={technology.image}
			name={technology.name}
		/>);
	})

	return(
		<div className="technologies">
			<div className="technologies__title">Tools I've worked with</div>
			<div className="technologies__grid">{renderTechnologies}</div>
		</div>
	);
}