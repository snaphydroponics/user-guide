import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

export default class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    }

    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e) {
    console.log(e);
  }

  render() {
    if (this.props.lang === 'en') {
      return (
      );
    }

    return (
    );
  }
}
