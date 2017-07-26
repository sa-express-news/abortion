// @flow

import React, {Component} from 'react';

import './InlinePhotoDesktop.scss';

class InlinePhotoDesktop extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
			<img className='InlinePhotoDesktop' src={this.props.src} width='100%' alt={this.props.alt}/>
		)
	}
}

export default InlinePhotoDesktop;