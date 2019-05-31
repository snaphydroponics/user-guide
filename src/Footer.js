import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Footer(props) {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <p className="text-muted">
            <Switch>
              <Route path="/en">
                <strong>SNAP Hydroponics Users’ Guide</strong> by <a href="https://snaphydroponics.info">snaphydroponics.info</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
              </Route>
              <Route path="/">
                <strong>Gabay sa Pagamit ng <i lang="en">SNAP Hydroponics</i></strong> hatid ng <a href="https://snaphydroponics.info"><i lang="en">snaphydroponics.info</i></a>. Ang <i lang="en">source code</i> ay may lisensiyang <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Ang mga nilalaman ng <i lang="en">website</i> ay may lisensiyang <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
              </Route>
            </Switch>
          </p>
        </div>
      </footer>
    );
}

export default Footer;
