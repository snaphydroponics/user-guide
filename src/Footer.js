import React from 'react';

function Footer(props) {
  if (props.lang === 'en') {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <p className="text-muted">
            <strong>SNAP Hydroponics Users’ Guide</strong> by <a href="https://www.facebook.com/groups/snap.hydroponics.growers">SNAP Hydroponics Growers</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <p className="text-muted">
            <strong>Gabay sa Pagamit ng <i lang="en">SNAP Hydroponics</i></strong> hatid ng <a href="https://www.facebook.com/groups/snap.hydroponics.growers"><i lang="en">SNAP Hydroponics Growers</i></a>. Ang <i lang="en">source code</i> ay may lisensiyang <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Ang mga nilalaman ng <i lang="en">website</i> ay may lisensiyang <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
