// @flow

import React, { Component } from 'react';

class HTMLElement extends Component {
	props: {
		html: string
	};

	render(){
		const markup = {__html: this.props.html};

		return(
			<div dangerouslySetInnerHTML={markup}/>
		)
	}


}

export default HTMLElement;