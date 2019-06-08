import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class EnSelector extends React.Component {

  render() {
    const pathname = this.props.location.pathname;
    const url = pathname.match(/^\/en/) ? pathname : ('/en' + pathname);
    const label = 'English';

    return (
      <LinkContainer exact to={url}><Nav.Link>{label}</Nav.Link></LinkContainer>
    );
  }
}

export default EnSelector;
