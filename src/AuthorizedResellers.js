import React from 'react';
import { Link } from 'react-router-dom';

function AuthorizedResellers({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">SNAP Authorized Resellers</h1>
          <p className="lead">Ang mga SNAP Authorized Resellers ang mga opisyal na distributors ng SNAP Nutrient Solution for Hydroponics.
          </p>
        </header>

        <p>Ang SNAP Nutrient Solution for Hydroponics ay dini-<i lang="en">distribute</i>
          ng mga <i lang="en">SNAP Hydroponics Authorized Resellers</i>. Ang mga
          <i lang="en">authorized resellers</i> ay nakilahok at nakumpleto ang 
          <Link to="/training-seminar"><i lang="en">short training course on SNAP Hydroponics</i></Link>.
          Sila ay awtorisadong bumili ng SNAP Hydroponics nutrient solutions mula sa IPB-<abbr title="University of the Philippines Los Baños">UPLB</abbr>
          at muli itong ipagbili. Sila ay nagsanay sa <i lang="en">theoretical</i> at
          praktikal na mga aspeto ng <i lang="en">hydroponics</i> na may pagdiin sa pag-
          <i lang="en">setup</i> at pagpapatakbo ng sistemang SNAP Hydroponics; pagkilala
          sa iba’t-ibang sintomas ng <i lang="en">nutrient deficiency</i> at <i lang="en">
            nutrient toxicity</i>; mga batayang konsepto sa panghalamang kalusugan na may
          kaugnayan sa produksiyon ng gulay gamit ang <i lang="en">hydroponics</i>.</p>

        <p>Ang <i lang="en">SNAP Nutrient Solution for Hydroponics</i> ay sinalisik, ginagawa,
          at mabibili sa Institute of Plant Breeding ng <abbr title="University of the Philippines Los Baños">UPLB</abbr> (IPB-<abbr title="University of the Philippines Los Baños">UPLB</abbr>). Para 
          SNAP Nutrient Solution for Hydroponics is developed, manufactured and sold at
          the Institute of Plant Breeding (IPB).</p>

        <p>Para sa mga katanungan:</p>
        <div className="card">
          <div className="card-body">
            <address>
              Plant Physiology Laboratory-IPB<br />
              Telephone: (049) 576-3189<br />
              Email: pasantos3@up.edu.ph<br />
            </address>
          </div>
      </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">SNAP Authorized Resellers</h1>
          <p className="lead">SNAP Authorized Resellers are the official distributors of SNAP Nutrient Solution for Hydroponics.
          </p>
        </header>

        <p>SNAP Nutrient Solution for Hydroponics is distributed by SNAP Hydroponics
          Authorized Resellers. Authorized resellers have participated and completed
          the <Link to="/en/training-seminar">short training course on SNAP Hydroponics</Link>.
          They are authorized to acquire SNAP Hydroponics nutrient solutions from IPB-<abbr title="University of the Philippines Los Baños">UPLB</abbr>
          for resell purposes. They are trained in the theoretical and practical aspects
          of hydroponics with emphasis on setting-up and running a SNAP Hydroponics system;
          identification of different nutrient deficiency and toxicity symptoms;
          basic concepts in plant nutrition relevant to hydroponics vegetable production.</p>

        <p>SNAP Nutrient Solution for Hydroponics is developed, manufactured and sold at
          the Institute of Plant Breeding (IPB) of <abbr title="University of the Philippines Los Baños">UPLB</abbr>.</p>

        <p>For inquries:</p>
        <div className="card">
          <div className="card-body">
            <address>
              Plant Physiology Laboratory-IPB<br />
              Telephone: (049) 576-3189<br />
              Email: pasantos3@up.edu.ph<br />
            </address>
          </div>
      </div>





      </div>
    );
  }
}

export default AuthorizedResellers
