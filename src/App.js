import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AppNavbar from './AppNavbar';
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
import ScrollToTop from './ScrollToTop';

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

        <ScrollToTop>

          <AppNavbar />

          <main role="main" className="flex-shrink-0">

            <Switch>
              <Route exact path="/:lang(en)?" component={Manual} />

              <Route exact path="/:lang(en)?/authorized-resellers" component={AuthorizedResellers} />

              <Route exact path="/:lang(en)?/coco-peat" component={CocoPeat} />

              <Route exact path="/:lang(en)?/faq" component={Faq} />

              <Route exact path="/:lang(en)?/grow-box" component={GrowBox} />

              <Route exact path="/:lang(en)?/replenishment" component={Replenishment} />

              <Route exact path="/:lang(en)?/seedling-production" component={SeedlingProduction} />

              <Route exact path="/:lang(en)?/styrobox" component={Styrobox} />

              <Route exact path="/:lang(en)?/styrofoam-puncher" component={StyrofoamPuncher} />

              <Route exact path="/:lang(en)?/training-seminar" component={TrainingSeminar} />

              <Route exact path="/:lang(en)?/working-solution" component={WorkingSolution} />

            </Switch>

          </main>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
