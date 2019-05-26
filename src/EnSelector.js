import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class EnSelector extends React.Component {

  render() {
    const pathname = this.props.location.pathname;
    const label = pathname.match(/^\/en/) ? 'English' : 'Ingles';
    const url = (label === 'English') ? pathname : ('/en' + pathname);

    return (
      <LinkContainer exact to={url}><Nav.Link>{label}</Nav.Link></LinkContainer>
    );
  }
}

export default EnSelector;
