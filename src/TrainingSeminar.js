import React from 'react';

function TrainingSeminar({match})
{
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Pagsasanay sa SNAP Hydroponics</h1>
          <p className="lead">Pagsasanay sa produksiyon ng gulay gamit ang hydroponics na may diin sa SNAP Hydroponics.
          </p>
      </header>

      <p>Ang Institute of Plant Breeding (<abbr title="Institute of Plant Breeding">IPB</abbr>) ay may maiksing kursong pagsasanay na may
        pamagat na <i lang="en">“Training on Hydroponics Vegetable Production with Emphasis on <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics.”</i>{' '}
        Ang mga kalahok na nakatapos ng making kursong pagsasanay na ito
        ay ginagawaran ng sertipiko ng pagkumpleto.</p>

      <h2 id="deskripsyon">Deskripsyon</h2>

      <p>Mga teoretikal at praktikal na aspeto ng <i lang="en">hydroponics</i> diin sa
        pag-<i lang="en">setup</i> at pagpapatakbo ng sistemang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">
          hydroponics</i>; pagkilala sa iba’t-ibang sintomas ng <i lang="en">nutrient
          deficiency</i> at <i lang="en">nutrient toxicity</i>; mga batayang konsepto sa
        panghalamang kalusugan na may kaugnayan sa produksiyon ng gulay gamit ang{' '}
      <i lang="en">hydroponics</i>; may kasamang <i lang="en">starter kit</i> -{' '}
      <i lang="en">nutrient solution</i>, buhay na mga binhi, at <i lang="en">styrofoam</i>{' '}
      na kahon at baso.</p>

    <h2 id="iskedyul">Iskedyul</h2>

    <p>Ang maiksing kursong pagsasanay sa <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i> ay regular
      na isinasagawa tuwing pangalawa at pang-apat na Martes ng bawat buwan. Subalit
      maaring mabago ang iskedyul depende kung makakarating ang <i lang="en">resource
        speaker</i>. Tumatagal ng isang araw ang  pagsasanay at tipikal na nagsisimula
      ng 9:00AM at nagtatapos ng 5:00PM. Ang pagsasanay ay ginagawa sa <abbr title="Institute of Plant Breeding">IPB</abbr>.</p>

    <h2 id="bayad-sa-kurso">Bayad sa Kurso</h2>

    <p>Ang kurso ay may bayad na nagkakahalaga ng ₱2,000. Kasama na ang mga materyales
      sa pagsasanay at mga miryenda.</p>

    <h2 id="pagpapalista">Pagpapalista</h2>

    <p>Upang magpalista piliin ang “Hydroponics Vegetable Production with Emphasis on
      <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics” sa <i lang="en">online registration form</i>.</p>

    <p><a className="btn btn-primary btn-block" href="https://docs.google.com/forms/d/e/1FAIpQLSdHg6eiugsj3zhh2XYykY_NywBSVKCY5McfVb6__IXqHxncGQ/viewform">
        Magpalista Para sa <i lang="en"><abbr title="Institute of Plant Breeding">IPB</abbr> Short Training Course</i></a></p>

    <h2 id="authorized-resellers">Authorized Resellers</h2>

    <p>Ang pagiging <i lang="en">authorized reseller</i> ay nangangailangan ng mga
      sumusunod:</p>

    <ul>
      <li>
        <p>Sertipiko ng Pagkumpleto - katunayan ng paglahok at pagtapos ng maikling kursong
          pagsasanay sa <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">hydroponics</i>.</p>
      </li>
      <li>
        <p>Mga Pananim na nasa <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i> - katunayan na kayang 
          gamitin ang mga natutunan sa maikling kursong pagsasanay.</p>
      </li>
      </ul>

      <p>Ang mga <i lang="en">authorized resellers</i> ay pinapahintulutang bumili ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i> sa <abbr title="Institute of Plant Breeding">IPB</abbr> ng bultuhan at
        may diskwentong halaga.</p>


    </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">SNAP Hydroponics Training</h1>
          <p className="lead">Training on hydroponics vegetable production with emphasis on SNAP Hydroponics.
          </p>
      </header>

      <p>The Institute of Plant Breeding (IPB) offers a short training course titled
        “Training on Hydroponics Vegetable Production with Emphasis on SNAP Hydroponics.”
        Participants who have completed this short training course are awarded a
        certificate of completion.</p>

      <h2 id="description">Description</h2>

      <p>Theoretical and practical aspects of hydroponics with emphasis on setting-up
        and running a SNAP hydroponics system; identification of different nutrient
        deficiency and toxicity symptoms; basic concepts in plant nutrition relevant to
        hydroponics vegetable production; includes starter kit – nutrient solution,
        established seedlings, and styrofoam box and cups.</p>

      <h2 id="schedule">Schedule</h2>
      <p>The short training course on SNAP Hydroponics are conducted regularly every
        second and fourth Tuesday of each month. However, the schedule may change
        depending on the availability of the resource speakers. The training takes
        a whole day and typically starts at 9:00AM and ends at 5:00PM. The training
        is held in IPB.</p>

      <h2 id="course-fee">Course Fee</h2>

      <p>The course fee is ₱2,000. Inclusive of training materials and snacks.</p>

      <h2 id="sign-up">Sign Up</h2>

      <p>To sign up select “Hydroponics Vegetable Production with Emphasis on SNAP
        Hydroponics” on the online registration form.</p>

      <p><a className="btn btn-primary btn-block" href="https://docs.google.com/forms/d/e/1FAIpQLSdHg6eiugsj3zhh2XYykY_NywBSVKCY5McfVb6__IXqHxncGQ/viewform">
          Sign Up for an IPB Short Training Course</a></p>

      <h2 id="authorized-resellers">Authorized Resellers</h2>

      <p>Being an authorized reseller requires the following:</p>

      <ul>
        <li>
          <p>Certificate of Completion – Proof of having completed the short training course on SNAP Hydroponics</p>
        </li>
        <li>
          <p>A SNAP Hydroponics setup – Proof of having applied the knowledge acquired the short training
            course</p>
        </li>
      </ul>

      <p>Being an authorized reseller allows one to buy SNAP Nutrient Solution for
        Hydroponics at IPB in bulk quantities and discounted rate.</p>



    </div>
    );
  }
}

export default TrainingSeminar;
