import React from 'react';
import Pages from './Pages';

export default class DropdownTitle extends React.Component {
  render() {
    const pathname = this.props.location.pathname;
    const page = Pages.find((page) => page.url === pathname);

    return (page ?
      <span dangerouslySetInnerHTML={{__html: page.title}}></span> :
      'Menu'
    );
  }
}
