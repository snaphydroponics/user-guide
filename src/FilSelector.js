import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class FilSelector extends React.Component {
  render() {
    const url = this.props.location.pathname.replace(/^\/en/, '');

    return (
      <LinkContainer exact to={url}><Nav.Link>Filipino</Nav.Link></LinkContainer>
    );
  }
}

export default FilSelector;
