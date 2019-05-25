import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.svg';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import TrainingSeminar from './TrainingSeminar';
import AuthorizedResellers from './AuthorizedResellers';
import CocoPeat from './CocoPeat';
import Faq from './Faq';
import GrowBox from './GrowBox';
import Replenishment from './Replenishment';
import SeedlingProduction from './SeedlingProduction';
import Styrobox from './Styrobox';
import StyrofoamPuncher from './StyrofoamPuncher';
import WorkingSolution from './WorkingSolution';
import Manual from './Manual';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'fil'
    };
    this.changeLangToFil = this.changeLangToFil.bind(this);
    this.changeLangToEn = this.changeLangToEn.bind(this);
  }

  changeLangToFil() {
    this.setState({lang: "fil"});
  }

  changeLangToEn() {
    this.setState({lang: "en"});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/" >
              <img src={logo} width="100" alt="Logo: SNAP - Simple Nutrient Addition Program" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link active={this.state.lang === "fil"} onClick={this.changeLangToFil}>Filipino</Nav.Link>
                <Nav.Link active={this.state.lang === "en"} onClick={this.changeLangToEn}>{ this.state.lang === 'en' ? "English" : "Ingles" }</Nav.Link>
              </Nav>
              <NavDropdown title="More Guides" id="more-guides">
                <NavLink className="dropdown-item" to="/authorized-resellers">Authorized Resellers</NavLink>
                <NavLink className="dropdown-item" to="/coco-peat">Coco Peat</NavLink>
                <NavLink className="dropdown-item" to="/faq">Frequently Asked Questions</NavLink>
                <NavLink className="dropdown-item" to="/grow-box">Grow Box</NavLink>
                <NavLink className="dropdown-item" to="/replenishment">Replenishment</NavLink>
                <NavLink className="dropdown-item" to="/seedling-production">Seedling Production</NavLink>
                <NavLink className="dropdown-item" to="/styrobox">Styrobox</NavLink>
                <NavLink className="dropdown-item" to="/styrofoam-puncher">Styrofoam Puncher</NavLink>
                <NavLink className="dropdown-item" to="/training-seminar">Training Seminar</NavLink>
                <NavLink className="dropdown-item" to="/working-solution">Working Solution</NavLink>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar>

          <main role="main" className="flex-shrink-0">

            <Route exact path="/:lang?/authorized-resellers" component={AuthorizedResellers} />

            <Route exact path="/:lang?/coco-peat" component={CocoPeat} />

            <Route exact path="/:lang?/faq" component={Faq} />

            <Route exact path="/:lang?/grow-box" component={GrowBox} />

            <Route exact path="/:lang?/replenishment" component={Replenishment} />

            <Route exact path="/:lang?/seedling-production" component={SeedlingProduction} />

            <Route exact path="/:lang?/styrobox" component={Styrobox} />

            <Route exact path="/:lang?/styrofoam-puncher" component={StyrofoamPuncher} />

            <Route exact path="/:lang?/training-seminar" component={TrainingSeminar} />

            <Route exact path="/:lang?/working-solution" component={WorkingSolution} />

            <Route exact path="/:lang?" component={Manual} />

          </main>
            <Footer lang={this.state.lang} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
