import React from 'react';
import styroboxArragement from './images/styrobox-arrangement.jpg';

function Styrobox(props) {
  if (props.lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Gabay sa mga Styrofoam Box</h1>
          <p className="lead">Mga impormasyon tunkol sa kahong yari sa styrofoam na ginagamit sa paggawa ng mga grow boxes para sa SNAP Hydroponics.
          </p>
      </header>

      <p>Ang mga kahon na yari sa <i lang="en">styrofoam</i> na ginagamit sa paggawa ng
        mga <i lang="en">grow boxes</i> ay iba’t-iba ang laki. Ang nirerekomendang sukat
        para sa SNAP Hydroponics ay 20” ✕ 16” ✕ 6”. Ang mga <i lang="en">styrobox</i> na
        may ganitong laki ay ginagamit para sa transportasyon ng mga inaangkat na ubas
        galing sa Estados Unidos at sila ay nagmumula sa dalawang maypabrika: Styrotek
        LLC at Aptco. LLC. Mayroon din silang iba’t-ibang desenyo kaya nararapat na
        tandaan na bagamat magkakapareho sila ng sukat, ang kanilang itaas at ibabang
        bahagi ay hindi magkakasya sa ibang desenyo.</p>

      <p>May panahon din ang pagpasok ang mga kahong <i lang="en">styrofoam</i> para sa
        mga ubas na inaangkat. Malimit sila ay karaniwang madaling makita sa mga buwan
        ng Setyembre hanggang Enero dahil sa mga buwang ito inaangkat ng merkado ng
        Pilipnas para sa panahon ng kapaskuhan. Ang nanilang dami ay pinakamataas sa
        mga huling araw ng Disyembre at mga unang araw ng Enero. Sobrang dami ng mga ito,
        na sila ay karaniwang makikitang basurang tinatapon sa ilang lugar. Ito ang
        magandang panahon upang sila ay hanapin at kolektahin. Sa labas ng mga buwan na
        ito tipikal na mas mahirap na ang mga itong makita.</p>

      <p>Ang mga kahong <i lang="en">styrofoam</i> na it ay maaring isaayos para magkasya
        sa kwadradong may sukat na 1m ✕ 1.2m. Ito ang batayang sukat ng <i lang="en">
          transport pallet</i>. Ang pagkakaayos na ito ay maaring magamit upang mapakinabangan
        ng husto ang kapasidad ng <i lang="en">growing area</i></p>

      <figure className="figure">
        <img src={styroboxArragement} width="1280" height="1280" className="figure-img img-fluid" alt="Limang styroboxes na isinaayos upang magkasya sa 1m by 1.2m na area." />

        <figcaption className="figure-caption">Masinsin na pagkakaayos ng styroboxes.</figcaption>

      </figure>
    </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Styrofoam Box Guide</h1>
          <p className="lead">Information about styrofoam boxes used in making grow boxes for SNAP Hydroponics.
          </p>
      </header>

      <p>Styrofoam boxes that are used to make grow boxes comes in different sizes. The
        size recommended for use in SNAP Hydroponics measures 20 ✕ 16 ✕ 6 inches. Styrofoam
        boxes of these sizes are used to transport imported grapes from the United States
        and come from two manufacturers: Styrotek LLC and Aptco. LLC. They also come
        in different designs which means that one has to remember that although their
        sizes are similar their upper and lower halves are does not fit upper and lower
        halves of other designs.</p>

      <p>There is also a seasonal influx of styrofoam boxes for imported grapes. They are
        typically abundant during the months of September to January because these are
        the months that the Philippine market imports them for the holiday season. Their
        availability peaks during late December and early January. So much so that they
        litter the streets in some places. These are the times to try to find and collect
        them. Outside of these months they are typically harder to find.</p>

      <p>These styrofoam boxes can be arranged so that they fit a 1m ✕ 1.2m area. This is
        the size of a standard transport pallet. This arrangement can be utilized to
        maximize the growing capacity of an area.</p>

      <figure className="figure">
        <img src={styroboxArragement} width="1280" height="1280" className="figure-img img-fluid" alt="Five styroboxes arranged so that they fit in a 1m by 1.2m area." />

        <figcaption className="figure-caption">A compact arrangement of styroboxes.</figcaption>

      </figure>
    </div>
    );
  }
}

export default Styrobox;
