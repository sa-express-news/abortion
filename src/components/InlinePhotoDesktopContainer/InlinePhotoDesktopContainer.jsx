// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo/PhotoInfo';
// $FlowFixMe
import './InlinePhotoDesktopContainer.scss';

class InlinePhotoDesktopContainer extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='InlinePhotoDesktopContainer'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default InlinePhotoDesktopContainer;