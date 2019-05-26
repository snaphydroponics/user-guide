import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Footer(props) {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <p className="text-muted">
            <Switch>
              <Route path="/en">
                <strong>SNAP Hydroponics Users’ Guide</strong> by <a href="https://www.facebook.com/groups/snap.hydroponics.growers">SNAP Hydroponics Growers</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </Route>
              <Route path="/">
                <strong>Gabay sa Pagamit ng <i lang="en">SNAP Hydroponics</i></strong> hatid ng <a href="https://www.facebook.com/groups/snap.hydroponics.growers"><i lang="en">SNAP Hydroponics Growers</i></a>. Ang <i lang="en">source code</i> ay may lisensiyang <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Ang mga nilalaman ng <i lang="en">website</i> ay may lisensiyang <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </Route>
            </Switch>
          </p>
        </div>
      </footer>
    );
}

export default Footer;
