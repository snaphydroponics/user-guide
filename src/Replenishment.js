import React from 'react';
import replenish1 from './images/replenishment-1.png';
import replenish2 from './images/replenishment-2.png';
import replenish3 from './images/replenishment-3.png';
import replenish4 from './images/replenishment-4.png';
import replenish5 from './images/replenishment-5.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Replenishment({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Gabay sa Replenishment ng SNAP Working Solution.</h1>
          <p className="lead">Alamin ang mga tamang hakbang sa pag-replenish ng working solution ng SNAP grow boxes.
          </p>
      </header>

      <p>Ang pag-<i lang="en">replenish</i> ng SNAP working solution sa loob ng <i lang="en">grow box</i>{' '}
        ay mahalagang bahagi ng pagpapanatili ng sistemang SNAP <i lang="en">hydroponics</i>.
        Ang dami ng <i lang="en">working solution</i> sa loob ng <i lang="en">grow box</i>{' '}
        ay bababa sa paglipas ng oras dahil ang <i lang="en">solution</i> ay mababawasan
        sa pamamagitan ng <i lang="en">evaporation</i> at <i lang="en">transpiration</i>.
        Dagdag pa dito, ang konsentrasyon ng sustansiya sa <i lang="en">solution</i> ay
        bababa dahil ito ay ginagamit ng halaman upang suportahan ang kanilang paglaki.</p>

      <p>Sa inisyal na <i lang="en">set up</i>, ang ibabang mahagi ng <i lang="en">
          seedling plugs</i> ay nakatubog sa <i lang="en">working solution</i> sa lalim
        isa hanggang dalawang sentimentro (1-2cm). The <i lang="en">working solution</i>{' '}
        ay tatagos sa mga hiwa at papasok sa baso at babasain ng lubos ang <i lang="en">
          growing medium</i>. Dahil dito, ang mga binhi ay lalaki ng nakababad sa tubig.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish1} width="1280" height="720" className="figure-img img-fluid" alt="Ilustrasyon: ang mga ibabang bahagi ng seedling plugs ay nakatubog sa working solution. Wala pang ugat na nalabas." />

        <figcaption className="figure-caption">Sa simula, ang ibabang bahagi ng seeling plugs ay nakatubog sa working solution na may lalim na 1-2cm.</figcaption>

      </figure>

      <p>Upang mabuhay habang nakababad sa tubig, ang mga halaman ay magpapatubo ng{' '}
      <i lang="en">aerial roots</i>. Ang mga ugat na ito ay hindi buong na kalubog
      sa tubig at nakalantad sa basang hangin na nasa loob ng <i lang="en">grow box</i>.</p>

    <figure className="figure">
      <LazyLoadImage src={replenish2} width="1280" height="720" className="figure-img img-fluid" alt="Ilustrasyon: tumubo na palabas ng seedling plugs ang mga ugat at bumaba na ang lebel ng working solution." />

      <figcaption className="figure-caption">Tumubo na ang mga aerial roots at bumaba na ang lebel ng working solution.</figcaption>

      </figure>

      <p>Habang lumalaki ang halaman, mas maraming mga ugat ang tutubo at pupunta sa{' '}
      <i lang="en">working solution</i>. Dahil sa <i lang="en">evaporation</i> at{' '}
      <i lang="en">transpiration</i>, bababa ang lebel ng <i lang="en">working solution</i>{' '}
      hanggang sa hindi na nito abot ang ibabang habagi ng mga baso. Sa puntong ito,
      kung ang lahat ay maayos, ang <i lang="en">medium</i> ay hindi na naaabot ng
      working solution pero ang mga halaman ay kaya pa ring abutin ang <i lang="en">
        working solution</i> dahil tumubo at lumaki na ang mga ugat, dumaan sa mga hiwa
      palabas ng mga baso at papunta sa working solution. Lalong bibilis ang pagka-ubos
      ng <i lang="en">working solution</i> habang lalong lumalaki ang mga halaman.</p>

    <figure className="figure">
      <LazyLoadImage src={replenish3} width="1280" height="720" className="figure-img img-fluid" alt="Ilustrasyon: mas marami pang mga ugat ang tumubo papalabas ng seedling plug at papunta sa working solution." />

      <figcaption className="figure-caption">Mas marami pang mga ugat ang tumubo at kapansin-pansin ang paglaki ng mga halaman.</figcaption>

      </figure>

      <p>Habang tuluyan pang lumalaki ang mga halaman, mas marami pang <i lang="en">solution
          </i> ang magagamit. Importante na regular na sinisilip ang lebel ng <i lang="en">
          working solution</i> at <strong>huwag itong hayaang tuluyang maubos</strong>.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish4} width="1280" height="720" className="figure-img img-fluid" alt="Ilustrasyon: mas marami pang ugat ang tubugo papalabas ng seeling plug at ang lebel ng working solution ay napakababa na ngayon." />

        <figcaption className="figure-caption">Ang lebel nag working solution ay mababa na at kailangan nang dagdagan.</figcaption>

      </figure>

      <p>Para i-<i lang="en">replenish</i> ang working solution, dagdagan ito ng bagong{' '}
      <i lang="en">working solution</i> o malinis na tubig (nasa baba ang mga detalye)
      upang itaas ang lebel ng <i lang="en">working solution</i> hanggang ito ay halos
      umabot na sa ibabang bahagi ng mga <i lang="en">seedling plugs</i>. <strong>Huwag</strong>{' '}
      ibalik ang lebel ng <i lang="en">working solution</i> sa inisyal na lebel dahil
      malamang na ilulubog nito ang malaking bahagi ng mga <i lang="en">aerial roots</i>{' '}
      na magiging sanhi ng pagkalanta ng mga halaman at sa kinalaunan ay ikakamatay ng
      mga ito.</p>

    <figure className="figure">
      <LazyLoadImage src={replenish5} width="1280" height="720" className="figure-img img-fluid" alt="Ilustrasyon: naitas na ang lebel ng working solution pero hindi nito narating ang ibabang bahagi ng mga baso at hindi inilubog ang lahat ng mga ugat." />

      <figcaption className="figure-caption">Nadagdagan na ang lebel ng working solution  at ito ay nasa ibaba lamang ng ibabang bahagi ng mga seedling plugs.</figcaption>

      </figure>

      <p>Kalimitang nararating ng mga madadahong mga gulay ang laking maari na silang
        anihin sa loob ng tatlo hanggang apat na linggo matapos silang i-<i lang="en">
          transplant</i> at karaniwang hindi na kailangan ang pag-<i lang="en">replenish</i>.
        Sa mga pagkakataon na kailangan silang alagaan ng lampas sa isang buwan o di
        kaya ay masyadong mabilis naubos ang <i lang="en">nutrient solution</i> kumpara
        sa inaasahan (lalo na sa mga buwan ng tag-init) at ang <i lang="en">working
          solution</i> ay dapat nang ma-<i lang="en">replenish</i>, dapat ito ay dagdagan
        ng malinis na tubig. Ito ay dahil ang <i lang="en">working solution</i> ay may
        sapat pang sustansiya upang suprotahan ang paglaki ng mga halaman.</p>

      <p>Para sa mga halaman na nangagailangan ng mas mahabang panahon para sa paglaki, ang
        pagdagdag ng <i lang="en">working solution</i> ay dapat gawin kada buwan. 
        Kalimitan, bumababa ang lebel ng <i lang="en">working solution</i> ng mas maaga
        sa isang buwan, lalong-lalo na sa mga malalaking halaman. Sa mga ganitong
        pagkakataon, i-<i lang="en">replenish</i> ang <i lang="en">working solution</i>{' '}
        gamit ang malinis na tubig.</p>



    </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Guide to Replenishing the SNAP Working Solution</h1>
          <p className="lead">How to properly replenish the working solution of SNAP grow boxes.
          </p>
      </header>

      <p>Replenishment of the SNAP working solution inside the grow box is an important
        part of maintaining the SNAP Hydroponics system. The amount of working solution
        inside the grow box will decrease overtime as the solution gets depleted through
        evaporation and transpiration. In addition, the concentration of nutrients in
        the solution will decrease as the plants consume them to power their growth.</p>

      <p>When initially set up, the bottom of the seedling plugs are immersed in the
        working solution by about 1–2cm. The working solution enters the cup through
        the slits and saturates the growing medium. Because of this, the seedlings
        grow in water logged condition.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish1} width="1280" height="720" className="figure-img img-fluid" alt="An illustration: the bottom of the seedling plugs is immersed in the working solution. Roots are yet to come out." />

        <figcaption className="figure-caption">Initially, the bottom of the seedling plugs is immersed in the working solution by about 1–2 cm.</figcaption>

      </figure>

      <p>To survive being water logged, the plants grow aerial roots. These are roots
        that are not totally submerged in water and are exposed to the moist air within
        the grow box.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish2} width="1280" height="720" className="figure-img img-fluid" alt="An illustration: roots have grown out of the seedling plugs and the working solution level has gone down." />

        <figcaption className="figure-caption">Aerial roots has grown and the working solution level has gone down.</figcaption>

      </figure>

      <p>As the plant grows, more roots will develop and make their way into the working
        solution. Evaporation and transpiration will reduce the working solution level
        until it is no longer in contact with the bottom of the cups. At this point, if
        everything is going well, the medium is no longer in contact with the working
        solution but the plants still have access to the working solution because roots
        have grown out of the cup through the slits and into the working solution.
        The rate at which the working solution level decreases will increase as the plants grow larger.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish3} width="1280" height="720" className="figure-img img-fluid" alt="An illustration: more roots have grown out of the seedling plug and into the working solution." />

        <figcaption className="figure-caption">More roots have developed and the plants have grown significantly.</figcaption>

      </figure>

      <p>As the plants develop further, more of the solution will be consumed. It is
        important to regularly check the working solution level and <strong>never let it dry up</strong>.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish4} width="1280" height="720" className="figure-img img-fluid" alt="An illustration: more roots have grown out of the seedling plug and the working solution level is now very low." />

        <figcaption className="figure-caption">The working level is low and needs replenishment.</figcaption>

      </figure>

      <p>To replenish the working solution add fresh working solution or plain water
        (details below) to increase the working solution level so that it is just below
        the bottoms of the seedling plugs. <strong>DO NOT</strong> return the working solution level to
        its initial level because this will very likely submerge a majority of the 
        aerial roots and cause the plants to wilt and eventually kill them.</p>

      <figure className="figure">
        <LazyLoadImage src={replenish5} width="1280" height="720" className="figure-img img-fluid" alt="An illustration: the working solution level has been raised but it is not reaching the bottom of the cup submersing all of the roots." />

        <figcaption className="figure-caption">Working solution level replenished and is sitting just below the bottoms of the seedling plugs.</figcaption>

      </figure>

      <p>Leafy vegetables generally reaches marketable size by around three to four weeks
        after transplant and normally doesn’t require replenishment. In cases that they
        must be kept beyond a month or if the working solution level has gone down faster
        than normal (specially in the summer months) and the working solution level must
        be replenished, they should be replenished with plain water. This is because the
        working solution still has enough nutrients to fuel the plant’s growth.</p>

      <p>For vegetables that require a longer growing period, replenishment with fresh
        working solution is required every month. In most cases, the working solution
        level will go down sooner than a month especially for large plants that transpire
        water faster. In this case, replenish the working solution level with plain water.</p>


    </div>
    );
  }
}

export default Replenishment;
