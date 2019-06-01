import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import FilSelector from './FilSelector';
import EnSelector from './EnSelector';
import DropdownTitle from './DropdownTitle';
import Pages from './Pages';

class AppNavbar extends React.Component {
  render() {
    const filPages = Pages.filter((page) => page.lang === 'fil').map((page) => {
      if (page.sep) {
        return (
          <React.Fragment key="divider">
            <NavDropdown.Divider />
            <LinkContainer key={page.url} exact to={page.url}><NavDropdown.Item dangerouslySetInnerHTML={{__html: page.title}} /></LinkContainer>
          </React.Fragment>
        );
      }
      return (
          <LinkContainer key={page.url} exact to={page.url}><NavDropdown.Item dangerouslySetInnerHTML={{__html: page.title}} /></LinkContainer>
      );
    });

    const enPages = Pages.filter((page) => page.lang === 'en').map((page) => {
      if (page.sep) {
        return (
          <React.Fragment key="divider">
            <NavDropdown.Divider />
            <LinkContainer key={page.url} exact to={page.url}><NavDropdown.Item dangerouslySetInnerHTML={{__html: page.title}} /></LinkContainer>
          </React.Fragment>
        );
      }
      return (
          <LinkContainer key={page.url} exact to={page.url}><NavDropdown.Item dangerouslySetInnerHTML={{__html: page.title}} /></LinkContainer>
      );
    });

    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Switch>
            <Route path="/en/" render={() => (
              <LinkContainer to="/en/">
                <Navbar.Brand>
                  <img src={logo} width="100" alt="Logo: SNAP Hydroponics" />
                </Navbar.Brand>
              </LinkContainer>
            )} />
              <Route path="/" render={() => (
                <LinkContainer to="/">
                  <Navbar.Brand>
                    <img src={logo} width="100" alt="Logo: SNAP Hydroponics" />
                  </Navbar.Brand>
                </LinkContainer>
              )} />
              </Switch>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Route component={FilSelector} />
                  <Route component={EnSelector} />
                  <Switch>
                    <Route path="/en/" render={(props) => (
                      <NavDropdown title={<DropdownTitle {...props} />} id="basic-nav-dropdown">
                        {enPages}
                      </NavDropdown>
                    )} />
                      <Route path="/" render={(props) => (
                        <NavDropdown title={<DropdownTitle {...props} />} id="basic-nav-dropdown">
                          {filPages}
                        </NavDropdown>
                      )} />
                      </Switch>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </header>
    );
  }
}

export default AppNavbar;
