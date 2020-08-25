import React, { Component } from "react";
import SocialBox from '../social_box/SocialBox';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<div className="footer__copyright">Copyright 2020</div>
				<div className="footer__contact-title">Get in touch</div>
				<SocialBox />
				<div className="footer__email hoverable"><a href="mailto:me@zach19.com">me @ zach19.com</a></div>
			</div>
		);
	}
}
