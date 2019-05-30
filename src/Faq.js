import React from 'react';
import { Link } from 'react-router-dom';
import snapAandB from './images/snap-a-and-b.jpg';
import IPBAddress from './IPBAddress';

function Faq({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Mga Madalas na Tanong</h1>
          <p className="lead">Sa pahinang matatagpuan ang ilan sa mga pinaka madalas na tanong tungkol sa SNAP Hydroponics
          </p>
      </header>

      <h2 id="ano-ang-hydroponics">Ano ang <i lang="en">hydroponics</i>?</h2>

      <p>Ang <i lang="en">hydroponics</i> ay isang pamamaraan ng pagpapalaki ng halaman
        gamit ang <i lang="en"> mineral nutrient solutions</i> sa tubig at walang lupa.</p>

      <h2 id="ano-ang-snap-hydroponics">Ano ang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics</i>?</h2>

      <p>Ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics ay isang sistemang haydroponiko na gumagamit ng  <abbr title="Simple Nutrient Addition Program">SNAP</abbr>{' '}
        Nutrient Solution for Hydroponics. Ang ibig sabihin ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> ay <i lang="en">
          Simple Nutrient Addition Program</i>. Ito ay isang mababang halaga, at{' '}
      <i lang="en">low-maintenance na hydroponics system na dinesenyo para sa{' '}
      <i lang="en">household</i> at <i lang="en">small-scale</i> na produksiyon ng
      gulay.</i></p>

  <h2 id="ano-ang-snap-nutrient-solution-for-hydroponics">Ano ang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i>?</h2>

  <p>Ang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i> ay isang <i lang="en">
      hydroponic nutrient solution. Ito ay sinaliksik at ginagawa sa Institute of Plant
      Breeding ng UPLB. Ang mga ito ay nasa <i lang="en">set</i> ng 500mL na PET bottles
      na may tatak na <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A at <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B. Ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A ay puti at medyo malabo at ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr>{' '}
      B naman ay malinaw at medyo madilaw.</i></p>

  <figure className="figure">
    <img src={snapAandB} width="1280" height="1280" className="figure-img img-fluid" alt="Pares ng 500mL PET bottles na naglalaman ng SNAP at SNAP B." />

    <figcaption className="figure-caption">Ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A ay puti ang malabo at ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B ay malinaw at may pagkadilaw.</figcaption>

      </figure>

      <h2 id="saan-mabibi-ang-snap-nutrient-solution-for-hydroponics">Saan mabibi ang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i>?</h2>

      <p>Ang mga ito ay mabibili sa Institute of Plant Breding (<abbr title="Institute of Plant Breeding">IPB</abbr>) at sa mga{' '}
      <Link to="/authorized-resellers"><i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized Resellers</i></Link>.
      Dahil ito ay popular, ang ibang hydroponic nutrient solutions ay tinatawag din
      na <abbr title="Simple Nutrient Addition Program">SNAP</abbr>. Upang makatiyak na tunay ang binibiling <abbr title="Simple Nutrient Addition Program">SNAP</abbr> nutrient solution, bilhin
      lamang sila sa mga <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized Resellers</i> o sa <abbr title="Institute of Plant Breeding">IPB</abbr>.</p>

    <h2 id="saan-mabibili-ang-mga-buto-at-coco-peat">Saan mabibili ang mga buto at <i lang="en">coco peat</i>?</h2>

    <p>Ang mga ito ay mabibili sa mga lokal na <i lang="en">garden</i> o <i lang="en">
        agri-vet centers</i>. Mabibili rin sila sa mga <i lang="en">gardening sections</i>{' '}
      ng mga <i lang="en">hardware stores</i>.</p>

    <h2 id="saan-mabibili-ang-mga-styrofoam-boxes">Saan mabibili ang mga styrofoam boxes?</h2>

    <p>Ang mga ito ay mabibili sa mga nagtitinda ng prutas na nagtitinda ng <i lang="en">
        imported</i> na ubas. May mga <Link to="/styrobox">karagdang impormasyon tungkol sa mga{' '}
      <i lang="en">styroboxes</i> dito</Link>.</p>

  <h2 id="ano-ang-maari-kong-gawin-sa-natitirang-solution-matapos-anihin">Ano ang maari kong gawin sa natitirang <i lang="en">solution</i> matapos anihin ang mga pananim?</h2>

  <p>Maari itong gamiting pandilig sa mga regular na nakapasong halaman. Ito may naglalaman
    pa ng kaunting sustansiya na makakapagpataba ng mga halaman.</p>

  <h2 id="ano-ang-nilalaman-ng-snap-nutrient-solution-for-hydroponics-a-at-b">Ano ang nilalaman ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i> A at B?</h2>

  <p>Mangyaring sumanguni sa <a href="/files/combined-msds-for-snap-a-and-b.pdf"><i lang="en">materials safety data sheet</i></a>{' '}
    (<abbr title="Materials Safety Data Sheet">MSDS</abbr>) ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i> A at B.</p>

  <h2 id="ano-ang-ipinahihiwatig-ng-mga-petsa-na-nasa-mga-bote-ng-snap">Ano ang ipinahihiwatig ng mga petsa na nasa mga bote ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr>?</h2>

  <p>Ang mga ito ay ang araw ng pagkakagawa ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> solution</i> o ang <i lang="en">batch date</i>.</p>

    <h2 id="lumilipas-ba-ang-snap-nutrient-solution-for-hydroponics">Lumilipas ba ang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i>?</h2>

    <p>Hanggat ang mga ito ay mahigpit ang pagkakatakip at nakalagay sa malimig at
      tuyong lugar, ang mga ito ay hindi lilipas.</p>

    <p>Para sa iba pang mga katanungan mangyaring makipag-ugnayan sa <abbr title="Institute of Plant Breeding">IPB</abbr>:</p>
    <IPBAddress />
  </div>

    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Frequently Asked Questions</h1>
          <p className="lead">This page lists some of the most common questions about SNAP Hydroponics.
          </p>
      </header>

      <h2 id="what-is-hydroponics">What is hydroponics?</h2>

      <p>Hydroponics is a method of growing plants in mineral nutrient solutions in water
        and without soil.</p>

      <h2 id="what-is-snap-hydroponics">What is <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics?</h2>

      <p><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics is a hydroponics system that uses <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for
        Hydroponics. <abbr title="Simple Nutrient Addition Program">SNAP</abbr> stands for Simple Nutrient Addition Program. It is a low-cost,
        low-maintenance hydroponics system that is designed for household and
        small-scale vegetable production.</p>

      <h2 id="what-is-snap-nutrient-solution-for-hydroponics">What is <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics?</h2>

      <p><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics is a hydroponic nutrient solution. It is
        developed and manufactured in the Institute of Plant Breeding. They come in a
        set of 500 mL PET bottles labeled <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A and <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B. <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A is white and 
        cloudy and <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B is clear and yellowish.</p>

      <figure className="figure">
        <img src={snapAandB} width="1280" height="1280" className="figure-img img-fluid" alt="A pair of 500mL PET bottles containing SNAP A and SNAP B." />

        <figcaption className="figure-caption"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> A is white and cloudy and <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B is clear and yellowish.</figcaption>

      </figure>

      <h2 id="where-can-i-buy-snap-nutrient-solution-for-hydroponics">Where can I buy <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics?</h2>

      <p>They are available in the Institute of Plant Breeding (<abbr title="Institute of Plant Breeding">IPB</abbr>) and <Link to="/en/authorized-resellers"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized
          Resellers</Link>. Due to its popularity other
        hydroponic nutrient solutions are being referred to as <abbr title="Simple Nutrient Addition Program">SNAP</abbr>. To make sure you
        are buying authentic <abbr title="Simple Nutrient Addition Program">SNAP</abbr> nutrient solution, buy them only from <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized
        Resellers or from <abbr title="Institute of Plant Breeding">IPB</abbr>.</p>

      <h2 id="where-can-i-buy-seeds-and-coco-peat">Where can I buy seeds and coco peat?</h2>

      <p>You can buy them from your local garden or agri-vet centers. They are also
        available in the gardening sections of hardware stores.</p>

      <h2 id="where-can-i-buy-styrofoam-boxes">Where can I buy styrofoam boxes?</h2>

      <p>You can buy them from fruit vendors that sell imported grapes. You can
        find <Link to="/en/styrobox">more information about styroboxes here</Link>.</p>

      <h2 id="what-can-i-do-with-the-spent-solution-left-in-the-grow-box-after-i-harvest-my-crops">What can I do with the spent solution left in the grow box after I harvest my crops?</h2>

      <p>You can use them to water your regular potted plants. They still contain trace
        amounts of nutrients that can fertilize your potted plants.</p>

      <h2 id="what-does-snap-nutrient-solution-for-hydroponics-a-and-b-contain">What does <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics A and B contain?</h2>

      <p>Please see the <a href="/files/combined-msds-for-snap-a-and-b.pdf">materials safety data sheet</a> (<abbr title="Materials Safety Data Sheet">MSDS</abbr>) for
      <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics A and B.</p>

    <h2 id="what-do-the-dates-on-the-snap-bottles-indicate">What do the dates on the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> bottles indicate?</h2>

    <p>Those are the date of manufacture of the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> solution or the batch date.</p>

    <h2 id="does-snap-nutrient-solution-for-hydroponics-expire">Does <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics expire?</h2>

    <p>As long as they are tightly capped and stored in a cool and dry place they last
      indefinitely.</p>

    <p>For other questions please contact <abbr title="Institute of Plant Breeding">IPB</abbr>:</p>
      <IPBAddress />
    </div>
    );
  }
}

export default Faq;
