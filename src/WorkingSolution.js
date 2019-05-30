import React from 'react';
import workSol from './images/working-solution.jpg';
import measuringCup from './images/measuring-cup.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function WorkingSolution({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
  <h1 id="content">Gabay Kung Paano Gawin ang SNAP Working Solution</h1>
  <p className="lead">Alamin ang tamang paraan ng paggawa ng SNAP Hydroponics working solution sa gabay na ito.
</p>
</header>


<figure className="figure">
  <LazyLoadImage src={workSol} width="1280" height="853" className="figure-img img-fluid" alt="SNAP working solution na nagpapakita ng malabo at medyo madilaw na hitsura." />
  
  <figcaption className="figure-caption">Ang tamang timpla ng SNAP working solution ay may malabo at medyo madilaw na hitsura.</figcaption>
  
</figure>

<p>Ang pinaghalong tubig at <i lang="en">SNAP Hydroponics Nutrient Solution for
Hydroponics A</i> at <i lang="en">SNAP Hydroponics Nutrient Solution for
Hydroponics B</i> ay tinatawag na <i lang="en">working solution</i>. Nasa baba
ang mga hakbang kung paano ito gawin.</p>

<h2 id="maghanda-ng-malinis-na-tubig">Maghanda ng Malinis na Tubig</h2>

<p>Magsimula sa sampung litro (10L) ng malinis na tubig. Ang mga tubig sa mga 
regular na pinagkukunan gaya ng tubig sa gripo balon ay maaring gamitin. Ang
paggamit ng purong tubig ulan o purong <i lang="en">distilled water (reverse osmosis)</i>{' '}
ay hindi nirerekomenda dahil ang purong tubig ulan at ang purong <i lang="en">
distilled water</i> ay may <i lang="en">neutral pH</i> at ang pagtimpla ng 
working solution sa tubig na may <i lang="en">neutral pH</i> ay magreresulta sa{' '}
<i lang="en">solution</i> na may <i lang="en">pH</i> na masyadong mababa para
suportahan ang paglaki ng halaman.</p>

<p><strong>Paunawa: Kung gumagamit ng tubig na galing sa mga regular na napagkukunan hindi
na dapat alalahanin ang <i lang="en">pH</i>.</strong></p>

<h2 id="dagdagan-ng-snap-nutrient-solution">Dagdagan ng <i lang="en">SNAP Nutrient Solution</i></h2>

<p>Dagdagan ng 25mL ng SNAP A at <strong>haluing mabuti</strong>. Dagdagan ng 25mL ng SNAP B at{' '}
<strong>haluing mabuti.</strong> Hindi mahalaga kung alin sa SNAP A o B ang mauuna. Ngunit
mahalagang ihalong mabuti ang SNAP <i lang="en">solution</i> sa tubig bago idagdag ang kasunod. <strong>Huwag</strong>{' '}
paghaluin ang SNAP A at SNAP B bago sila ihalo sa tubig. Kapag pinaghalo ang
SNAP A at SNAP B, mag-re<i lang="en">react</i> sila sa isa’t-isa at mawawalan
ng bisa ang resultang <i lang="en">solution</i>.</p>

<figure className="figure">
  <LazyLoadImage src={measuringCup} width="1280" height="853" className="figure-img img-fluid" alt="Puting 30mL na plastic cup na may nakapatong na palatandaan ng lebel." />
  
  <figcaption className="figure-caption">Punuin ang ganitong klaseng cup sa lebel na may tanda para sa 25mL.</figcaption>
  
</figure>
      </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
  <h1 id="content">Guide on How to Prepare the SNAP Working Solution</h1>
  <p className="lead">How to properly prepare a SNAP Hydroponics working nutrient solution.
</p>
</header>


<figure className="figure">
  <LazyLoadImage src={workSol} width="1280" height="853" className="figure-img img-fluid" alt="SNAP working solution displaying its cloudy and slightly yellow appearance." />
  
  <figcaption className="figure-caption">Properly prepared SNAP working solution has a cloudy and slightly yellow appearance.</figcaption>
  
</figure>

<p>The mixture of water and SNAP Hydroponics Nutrient Solution for Hydroponics A
at SNAP Hydroponics Nutrient Solution for Hydroponics B is called the working
solution. Below are the steps on how to to prepare it.</p>

<h2 id="prepare-clean-water">Prepare Clean Water</h2>

<p>Start with ten liters (10L) of clean water. Water from regular sources like tap
water, well water, etc., works well. The use of pure rain water and pure
distilled (reverse osmosis) water is discouraged because pure rain water and
pure distilled water has a neutral pH. Preparing the working solution from
water with a neutral pH will result in a solution which has a pH that is too
low to properly support plant growth.</p>

<p><strong>Note: If using water from regular water sources, there is no need to monitor
the pH.</strong></p>

<h2 id="add-snap-nutrient-solution">Add SNAP Nutrient Solution</h2>

<p>Add 25mL of SNAP A and <strong>mix well</strong>. Add 25mL of SNAP B <strong>mix well</strong>.
The order by which SNAP A and SNAP B is added does not matter. However, it is
important to mix the solution well before adding the next SNAP solution. <strong>Do not</strong>{' '}
not to mix SNAP A and SNAP B together before adding them to water. Mixing SNAP A
and SNAP B will cause them to react with each other which will render the solution
ineffective.</p>

<figure className="figure">
  <LazyLoadImage src={measuringCup} width="1280" height="853" className="figure-img img-fluid" alt="White 30mL plastic cup with a superimposed level indicator" />
  
  <figcaption className="figure-caption">Filling up this cup to the level indicated is 25mL.</figcaption>
  
</figure>
      </div>
    );
  }
}

export default WorkingSolution;
