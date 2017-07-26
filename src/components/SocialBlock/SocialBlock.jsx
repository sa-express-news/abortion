// @flow

import React from 'react';

import Social from '../Social/Social';

import './SocialBlock.css';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/abortion-in-an-altered-texas-landscape/' />
    <Social type='twitter' link='http://www.expressnews.com/abortion-in-an-altered-texas-landscape/' />
    <Social type='reddit' link='http://www.expressnews.com/abortion-in-an-altered-texas-landscape/' />
  </div>
);