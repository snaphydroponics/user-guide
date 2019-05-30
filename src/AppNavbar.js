import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import FilSelector from './FilSelector';
import EnSelector from './EnSelector';

class AppNavbar extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Switch>
            <Route path="/en" render={() => (
              <LinkContainer to="/en">
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
                    <Route path="/en" render={() => (
                      <NavDropdown title="Additional Guides" id="basic-nav-dropdown">
                        <LinkContainer exact to="/en/authorized-resellers"><NavDropdown.Item>Authorized Resellers</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/coco-peat"><NavDropdown.Item>Coco Peat</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/faq"><NavDropdown.Item>Frequently Asked Questions</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/grow-box"><NavDropdown.Item>Grow Box</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/replenishment"><NavDropdown.Item>Replenishment</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/seedling-production"><NavDropdown.Item>Seedling Production</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/styrobox"><NavDropdown.Item>Styrobox</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/styrofoam-puncher"><NavDropdown.Item>Styrofoam Puncher</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/training-seminar"><NavDropdown.Item>Training Seminar</NavDropdown.Item></LinkContainer>
                        <LinkContainer exact to="/en/working-solution"><NavDropdown.Item>Working Solution</NavDropdown.Item></LinkContainer>
                      </NavDropdown>
                    )} />
                      <Route path="/" render={() => (
                        <NavDropdown title="Mga Karagdagang Gabay" id="basic-nav-dropdown">
                          <LinkContainer exact to="/authorized-resellers"><NavDropdown.Item><i lang="en">Authorized Resellers</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/coco-peat"><NavDropdown.Item><i lang="en">Coco Peat</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/faq"><NavDropdown.Item>Mga Madalas na Tanong</NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/grow-box"><NavDropdown.Item><i lang="en">Grow Box</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/replenishment"><NavDropdown.Item><i lang="en">Replenishment</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/seedling-production"><NavDropdown.Item><i lang="en">Seedling Production</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/styrobox"><NavDropdown.Item><i lang="en">Styrobox</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/styrofoam-puncher"><NavDropdown.Item>Pambutas ng <i lang="en">Styrofoam</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/training-seminar"><NavDropdown.Item><i lang="en">Training Seminar</i></NavDropdown.Item></LinkContainer>
                          <LinkContainer exact to="/working-solution"><NavDropdown.Item><i lang="en">Working Solution</i></NavDropdown.Item></LinkContainer>
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
