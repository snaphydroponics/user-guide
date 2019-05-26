import React from 'react';

function CocoPeat({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Gabay sa Coco Peat</h1>
          <p className="lead">Alamin kung saan mabibili ang kung paano gamitin ang coco peat.
          </p>
      </header>

      <p>Ang <i lang="en">coco peat</i> na kilalarin sa tawag na <i lang="en">coco coir dust</i>,
        ay isang natural na mala-isponghang materyal na nagmula sa mga bunot ng niyog.
        Ito ay isang <i lang="en">by-product</i> ng industriya ng niyog. Isa mga marami
        nitong pinaggagamitan ay pakinabang nito nito sa hortikultura kung saan ito ay
        ginagamit bilang pangkondisyon ng lupa o bilang isang <i lang="en">soilless growing
          medium</i>.</p>

      <figure className="figure">
        <img src="/images/coco-peat-brick.jpg" width="1280" height="853" className="figure-img img-fluid" alt="Tuyo at siksik na brick ng coco peat." />

        <figcaption className="figure-caption">Karaniwang tatak ng coco peat na tipikal na makikita sa mga gardening sections ng hardware stores.</figcaption>

      </figure>

      <p>Ang mga ito ay karaniwang mabibili sa mga <i lang="en">gardren</i> o <i lang="en">
          agri-vet centers</i> kung saan sila ay itinitinda bilang tuyong pulbos na nasa
        supot o kaya ay tuyo at siksik na bloke o <i lang="en">bricks</i>. Dahil sila ay
        dumaan sa pagpoproseso ang nakasupot na <i lang="en">coco peat</i> at
      <i lang="en">coco peat blocks</i> o <i lang="en"> coco peat bricks</i> ay karaniwang
      <i lang="en">sterile</i>.</p>

    <figure className="figure">
      <img src="/images/coco-coir-dust.jpg" width="853" height="1280" className="figure-img img-fluid" alt="Nakasupot na coco coir dust." />

      <figcaption className="figure-caption">Pangkaraniwang tatak ng nakasupot na coco coir dust na tipikal na makikita sa gardening section ng hardware stores.</figcaption>

      </figure>

      <p>Ang coco peat ay mabibi din bilang materyales na hindi pa napoproseso na binebenta
        ng bultuhan. Di tulad ng naprosesong <i lang="en">coco peat</i>, ang mga ito ay
        maaring kontaminado ng mikrobyo at dagta na parehong nakasasama sa paglaki ng
        halaman.</p>

      <p>Ang dagta ay nasa sariwang <i lang="en">coco peat</i>. Ang dagta ay mayroong
        mga <i lang="en">plant hormones</i> nagiging sanhi ng di tamang paglaki ng mga
        ugat. Ang dagta ay maaring alisin kung hahayaan itong mabulok. Ang isang mabisang
        paraan upang gawin ito ay ang simpleng pagtambak ng coco peat sa labas kung saan
        ito ay mauulanan at masisikatan ng araw.</p>

      <p>Ang <i lang="en">coco peat</i> na hindi pa napoproseso ay basang-basa kaya sila
        ay maaring panirahan ng mapaminsalang <i lang="en">bacteria</i> at <i lang="en">
          fungi</i>. Ang pag-<i lang="en">sterilize</i> ng di pa napoprosesong <i lang="en">
          coco peat</i> ay nirerekomenda. Ang <i lang="en">coco peat</i> ay maaring ma-<i lang="en">
          sterilize</i> sa pamamagitan ng pagpapakulo nito sa loob ng tatlumpong minuto.</p>




    </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Coco Peat Guide</h1>
          <p className="lead">Learn where to buy and how to use coco peat.
          </p>
      </header>

      <p>Coco peat also known as coco coir dust, is a natural spongy material extracted
        from coconut husks. It is a by-product of the coconut industry. Among its many
        applications is its use in horticulture where it is used as soil a conditioner
        or as a soilless growing medium.</p>

      <figure className="figure">
        <img src="/images/coco-peat-brick.jpg" width="1280" height="853" className="figure-img img-fluid" alt="Compressed and dehydrated bricks of coco peat." />

        <figcaption className="figure-caption">A common brand of coco peat typically found in gardening sections of hardware stores.</figcaption>

      </figure>

      <p>They are generally available in garden or agri-vet centers where there are sold as
        dehydrated dust in bags or as compressed dehydrated blocks or bricks. Because they have
        gone through processing bagged coco peat and coco peat blocks or bricks are
        generally sterile.</p>

      <figure className="figure">
        <img src="/images/coco-coir-dust.jpg" width="853" height="1280" className="figure-img img-fluid" alt="Bagged coco coir dust." />

        <figcaption className="figure-caption">A common brand of bagged coco coir dust typically found in gardening sections of hardware stores.</figcaption>

      </figure>

      <p>Coco peat are also available as unprocessed material that are sold in bulk.
        Unlike processed coco peat these can possibly contain pathogens and sap which
        are both detrimental to plant development.</p>

      <p>Sap is present in fresh coco peat. The sap contains plant hormones that stunt
        root development. Sap can be removed by allowing it to degrade. A cost effective
        way of doing this is by simply leaving a pile of coco peat out in the open where
        it will be exposed in rain and sunshine.</p>

      <p>Unprocessed coco peat also contains a lot of moisture which makes them host to
        harmful bacteria and fungi. Sterilization of unprocessed coco peat is
        recommended. Coco peat can be sterilized by boiling it for at least thirty
        minutes.</p>





    </div>
    );
  }
}

export default CocoPeat;
