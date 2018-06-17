import React from 'react'
import { Icon } from 'react-bulma-components/full';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome' 

import './icon.scss';

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare);

/**
 * @see https://bulma.io/documentation/elements/icon/#sizes
 * @param {String} size 
 */
const getFASize = (size) => {
  switch(size) {
    case 'small':
      return '';
    case 'medium':
      return '2x';
    case 'large':
      return '3x';
    default:
      return 'lg';
  }
}

export default (props) => (
  <Icon size={props.size}>
    <FontAwesomeIcon {...props} size={getFASize(props.size)} />
  </Icon>
);
