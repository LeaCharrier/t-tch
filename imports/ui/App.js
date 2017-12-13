import React, { Component } from 'react';

export default class App extends Component
{
	render()
	{
		return(
			<div>
				<section>{ this.props.main }</section>
			</div>
		);
	}
}