// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './SubscribeFooter.css';

class SubscribeFooter extends Component {
	render(){
		return(
			<div className='SubscribeFooter'>
			<div>
				<h4>Real Journalism | Real Insight</h4>
				<p>he Express-News brings you authoritative local stories. Subscribe today.</p>
				<Button link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=890&z=00000' text='Subscribe'/>
			</div>
			</div>
		)
	}
}

export default SubscribeFooter;