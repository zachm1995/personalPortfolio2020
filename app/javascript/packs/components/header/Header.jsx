import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className='header-container'>
				<Navigation />
			</div>
		)
	}

}