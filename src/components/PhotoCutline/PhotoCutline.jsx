// @flow

import React, {Component} from 'react';

import './PhotoCutline.css';

class PhotoCutline extends Component {
	props:{
		text: string
	};

	getCutline() {
		return this.props.text ? `(${this.props.text})` : '';
	}

	render(){
		return(
			<span className='PhotoCutline'>{this.getCutline()}</span> 
		)
	}
}

export default PhotoCutline;