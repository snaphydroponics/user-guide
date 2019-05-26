import React from 'react';
import { Link } from 'react-router-dom';
import growBox from './images/grow-box.jpg';
import plasticBag from './images/pe-plastic-bag-20-by-30.jpg';
import styrofoamPunchers from './images/styrofoam-punchers.jpg';
import packingTape from './images/packing-tape.jpg';
import guideLines from './images/guide-lines.jpg';
import upperGrowBox from './images/upper-grow-box-with-holes.jpg';
import upperGrowBoxSealed from './images/upper-grow-box-sealed-with-packing-tape.jpg';
import linerOverGrowBox from './images/plastic-liner-over-lower-grow-box.jpg';
import linerEndsFolded from './images/plastic-liner-with-ends-folded.jpg';
import linerSidesFolded from './images/plastic-liner-with-sides-folded.jpg';
import linerSidesTaped from './images/plastic-liner-with-sides-taped.jpg';
import linerCornerTaped from './images/plastic-liner-with-corner-taped.jpg';
import linerAllCornersTaped from './images/plastic-liner-with-all-corners-taped.jpg';
import linerEndPositioned from './images/plastic-liner-end-positioned.jpg';
import linedGrowBox from './images/lined-grow-box-lower-half.jpg';
import lockingTabs from './images/locking-tabs.jpg';

function GrowBox({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Gabay sa Pagawa ng Grow Box</h1>
          <p className="lead">Alamin kung paano bumuo ng SNAP grow box mula sa komprehensibong gabay na ito.
          </p>
      </header>


      <figure className="figure">
        <img src={growBox} width="1280" height="853" className="figure-img img-fluid" alt="Isang 20 by 16 by 6 na styrofoam box na may walong butas sa ibabaw at plastic liner sa ilalim. Ang ventilation holes ay tinakpang ng packing tape." />

        <figcaption className="figure-caption">Isang SNAP Hydroponics grow box.</figcaption>

      </figure>

      <p>Ang mga <i lang="en">grow boxes</i> o <i lang="en">growing boxes</i> mahalagang
        bahagi ng sistema ng SNAP <i lang="en">Hydroponics</i>. Ang <i lang="en">grow box</i>
        ay nagsisilbing lalagyan para sa SNAP
      <Link to="/working-solution"><i lang="en">working solution</i></Link>.
      Ang <i lang="en">grow box</i> din ang nagbibigay suporta sa mga <i lang="en">seedling plugs</i>.
      Ito ay isang madaling sundang gabay kung paano bumuo ng mga <i lang="en">grow box</i>
      mula sa mga nagamit nang <i lang="en">styrofoam boxes</i>.</p>

    <h2 id="mga-kailangang-materyales">Mga Kailangang Materyales</h2>

    <h3 id="styrobox"><i lang="en">Styrobox</i></h3>

    <p>Mga kahong yari sa <i lang="en">expanded polystyrene (EPS)</i> na kilala rin sa
      tawag na <i lang="en">“styrofoam box”</i> o <i lang="en">“styrobox”</i> ay
      magandang materyales para sa <i lang="en">grow box</i>. Ang laki na nirerekomenda
      para sa SNAP <i lang="en">Hydroponics</i> ay 20”×16”×6”. Ang mga kahon na ito
      ay kayang maglaman ng sampung litro (10L) hanggang labingdawalang litro (12L) ng
      <i lang="en">nutrient solution</i> at may sapat na espasyo upang magpalaki ng 
      hanggang walang (8) madahong gulay at hanggang (5) namumungang gulay. Ang mga
      ganitong uri ng <i lang="en">styrobox</i> ay ginagamit bilang sisidlan ng mga
      ubas na inangkat mula sa Estados Unidos at malimit makikita sa mga buwan ng 
      Setyembre hanggang Enero. Para sa karagdagang impormasyon sumanguni sa <Link to="/styrobox">gabay
        sa styrobox</Link>.</p>

    <h3 id="lining-material"><i lang="en">Lining Material</i></h3>

    <p>Ang mga <i lang="en">styrofoam</i> boxes ay may mga <i lang="en">ventilation holes</i>
      sa gilid. Upang kapapaglaman ng <i lang="en">nutrient solution</i> ang ibabang
      bahagi ng kahon, kailangan itong sapinan ng matibay na <i lang="en">waterproofing
        sheet</i>. Sa gabay na ito <i lang="en">20 ✕ 30 inch polyethylene (<abbr title="Polyethylene">PE</abbr>) plastic bags</i>
      ang gagamitin.</p>

    <figure className="figure">
      <img src={plasticBag} width="1280" height="427" className="figure-img img-fluid" alt="Isang bag ng polyethylene plastic (PE) bag kung saan ang sukat at bilang ng laman ay nakatala." />

      <figcaption className="figure-caption">Isang pangkariwang tatak ng 20 ✕ 30 pulgadang <abbr title="Polyethylene">PE</abbr> plastic bags.</figcaption>

      </figure>

      <h3 id="pambutas-ng-styrofoam">Pambutas ng <i lang="en">Styrofoam</i></h3>

      <p>Ang styrofoam puncher ay kailangan upang makagawa ng butas sa itaas na bahagi
        ng <i lang="en">grow box</i> para sa mga <i lang="en">seedling plugs</i>. Ang
        lata na may tamang sukat para sa mga <i lang="en">seedling plugs</i> ay maaring
        gawing ganitong kasangkapan. Para sa detalye mangyaring sumangguni sa <Link to="/styrofoam-puncher">gabay
          sa paggawa ng pambutas ng styrofoam</Link>.</p>

      <figure className="figure">
        <img src={styrofoamPunchers} width="1280" height="427" className="figure-img img-fluid" alt="Pares ng pambutas ng styrofoam na gawa sa lata at kawayang patpat." />

        <figcaption className="figure-caption">Pares ng buong sariling gawang pambutas ng styrofoam.</figcaption>

      </figure>

      <h3 id="packaging-tape"><i lang="en">Packaging Tape</i></h3>

      <p>Ito ay gagamitin upang idikit sa lugar ang <i lang="en">lining material</i> at
        opsyonal na takpan ang mga <i lang="en">ventilation holes</i>.</p>

      <figure className="figure">
        <img src={packingTape} width="1280" height="1280" className="figure-img img-fluid" alt="Rolyo ng kulay brown na packing tape na may lapad na dalawang pulgada." />

        <figcaption className="figure-caption">Tipikal na rolyo ng dawalang pulgadang lapad na packing tape.</figcaption>

      </figure>

      <h3 id="patpat-na-kawayan">Patpat na Kawayan</h3>

      <p>Patpat na kawayan o katulad na kagamitan. Ito ay gagamitin upang gumuhit ng mga
        linyang gabay sa <i lang="en">styrofoam</i>. Ito rin ay gagamitin upang maingat
        na alisin ang piraso ng <i lang="en">styrofoam</i> mula sa pambutas ng
      <i lang="en">styrofoam</i> matapos ang pagbutas.</p>

    <h2 id="ihanda-ang-styrobox">Ihanda ang <i lang="en">Styrobox</i></h2>

    <p>Bagamat ang mga <i lang="en">styrofoam</i> na kahon ng ubas ay magkakasingsukat
      ang paraan kung paano nagkakabit ang kaninlang ibaba at itaas na bahagi ay
      magkakaiba depende sa gumagawa at pagmamarka ng gumagawa. Nangangahulugang hindi
      magtutugma ang itaas at ibabang bahagi ng styrobox kung hindi sila magkaparehong
      uri.</p>

    <p>Ang <i lang="en">styrobox</i> ay may <i lang="en">locking tabs</i> upang ito ay
      manatiling nakasara. Para buksan ang kahon diinan ang ibabang bahagi sa bandang
      gitna ng mas maikling panig ng kahon upang alisin ang <i lang="en">lock</i> at
      hilahin ang itaas na bahagi papataas.</p>

    <p>Nirerekomenda na punasan ang <i lang="en">styrobox</i> ng malinis na basahan
      upang alisin ang alikabo, grasa o basa, dahil maaring maging dahilan ito ng
      pagpalya ng <i lang="en">tape</i> na gagamitin upang ikabit ang <i lang="en">
        plastic liner</i></p>

    <h2 id="gawin-ang-itaas-na-bahagi-ng-grow-box">Gawin ang Itaas na Bahagi ng <i lang="en">Grow Box</i></h2>

    <p>Baliktarin ang itaas na bahagi ng <i lang="en">styrobox</i> at ilagay ito sa pantay
      na patungan. Nirerekomenda nag maglagay ng <i lang="en">plywood</i> o karton sa
      pagitan ng patungan at ng <i lang="en">styrofoam</i>. Ito ay upang maiwasang
      magkasira ang patungan habang nagbubutas ng <i lang="en">styrofoam</i> gamit ang
      pambutas.</p>

    <p>Gumuhit ng linyang gabay na nagdudugsong sa mga <i lang="en">ventilation holes</i>
      sa magkatapat na gilid ng kahon kaya na pinapakita sa baba. Gagawa ng butas kung
      saan nagkukrus ang mga linya.</p>

    <figure className="figure">
      <img src={guideLines} width="1280" height="853" className="figure-img img-fluid" alt="Itaas na hati ng grow box na pinapakita ang mga ginuhit na linyang gabay." />

      <figcaption className="figure-caption">Mga linyang pinagdudugsong ang mga ventilation holes sa mga magkasalungat na panig. Gagawa ng butas kung saan sila nagtatagpo.</figcaption>

      </figure>

      <p>Para gumawa ng butas, ipatong ang matalas na dulo ng pambutas sa <i lang="en">styrofoam</i>
        at idiin ito upang markahan ang ibabaw nito. Hawakan ang pambutas sa hawakan at
        ipihit ito ng pakanan at pakaliwa habang dinidiinan ito upang tuluyan itong bumaon
        sa <i lang="en">foam</i>. Ituloy ang prosesong ito hanggang tuluyan itong tumagos
        sa <i lang="en">foam</i></p>

      <p>Marahang hilahin ang pambutas ng <i lang="en">styrofoam</i>. May maiiwang bilog
        na piraso ng styrofoam sa dulo ng pambutas. Gamitin ang kawayang patpat upang
        itulak ang isang gilid nito papasok sa pambutas. Ito ay mag-iikot sa pirasong
        ito at ang kabilang gilid ay lalabas ng pambutas at maari na itong maingat na
        alisin.</p>

      <p>Ulitin ang prosesong ito upang gawin ang natitira pang mga butas.</p>

      <figure className="figure">
        <img src={upperGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Itaas na bahagi ng grow box na may mga butas na tama ang pagkakalinya." />

        <figcaption className="figure-caption">Itaas na bahagi ng grow box.</figcaption>

      </figure>

      <p>Mariing minumungkahi na gamitin ang <i lang="en">packing tape</i> upang takpan
        ang mga <i lang="en">ventilation holes</i> sa bahaging ito ng grow box kung ang
        lugar na paglalagyan nito ay walang protkesiyon sa mga lamok. Mapipigilan nitong
        makapasok ang mga lamok sa <i lang="en">grow box</i> at makapagngitlog sa
      <i lang="en">working solution</i>.</p>

    <figure className="figure">
      <img src={upperGrowBoxSealed} width="1280" height="853" className="figure-img img-fluid" alt="Grow box kung saan ang pang-itaas na ventilation holes ay tinakpan ng packing tape." />

      <figcaption className="figure-caption">Proteksiyon sa mga lamok.</figcaption>

      </figure>

      <h2 id="gawin-ang-ibabang-bahagi-ng-grow-box">Gawin ang Ibabang Bahagi ng <i lang="en">Grow Box</i></h2>

      <p>Masimula sa paghahanda ng mga piraso ng <i lang="en">tape</i> na mga tatlong
        pulgada ang haba. Iposisyon ang <i lang="en">20 ✕ 30 plastic liner</i> gaya ng
        pinapakita sa baba. Dahil ang box ay may sukat na 20” ✕ 16”, ang <i lang="en">
          plastic liner</i> ay lalampas sa haba ng kahon ng limang pulgada sa tigkabilang
        dulo at lalampas sa lapad ng kahon ng apat na pugada sa tigkabilang panig. Ang
        mga sukat na ito ang pagpapadali ng pagposisyon ng <i lang="en">plastic liner</i>
        sa gitna ng ibabang bahagi ng <i lang="en">grow box</i>.</p>

      <figure className="figure">
        <img src={linerOverGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner na nakalatag sa ibabang bahagi ng grow box." />

        <figcaption className="figure-caption">Tamang pagkaposisyon ng plastic liner sa ibabaw ng ibabang bahagi ng grow box.</figcaption>

      </figure>

      <p>Itiklop ang tigkabilang dulo ng plastic liner gaya ng pinakikita sa baba.</p>

      <figure className="figure">
        <img src={linerEndsFolded} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner na nakalatag sa ibabaw ng ibabang bahagi ng growbox na nakatiklop ang tigkabilang dulo." />

        <figcaption className="figure-caption">Plastic liner na tama ang pagkakatiklop ng mga dulo.</figcaption>

      </figure>

      <p>Itiklop ang tigkabilang tabi ng <i lang="en">plastic liner</i> at hayaan itong
        magkasya at “mahulog sa loob.”</p>

      <figure className="figure">
        <img src={linerSidesFolded} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner kung saan ang mga dulo at mga gilid ay nakatiklop at nagkakasya sa ibabang bahagi ng grow box." />

        <figcaption className="figure-caption">Plastic liner na nagkasya sa ibabang bahagi ng grow box.</figcaption>

      </figure>

      <p>Sa puntong ito ang gilid ng plastic liner ay dapat pantay sa gilid ng grow box
        sa pahabang parte nito. Idikit ang mga ito sa gitna ng haba ng grow box gaya ng
        pinapakita sa baba.</p>

      <figure className="figure">
        <img src={linerSidesTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner na nakatape sa gitna nag haba ng grow box." />

        <figcaption className="figure-caption">Tabi ng plastic liner na idinikit ng tape sa gitna.</figcaption>

      </figure>

      <p>Lagyan ng tape ang parehong tabi ng grow box pero sa malapit sa kanto gaya ng
        pinapakita sa baba. Pansinin na ang tape ay dinidikit lang ang gilid ng plastic
        liner na nakatapat sa tabi ng kahon at hindi ang nakatiklop na parte ng katabing
        gilid.</p>

      <figure className="figure">
        <img src={linerCornerTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner na may tape sa may kanto." />

        <figcaption className="figure-caption">Tamang paglagay ng tape sa kanto.</figcaption>

      </figure>

      <p>Ulitin para na natitirang mga kanto.</p>

      <figure className="figure">
        <img src={linerAllCornersTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner na nakalatag sa ibabaw ng ibabang bahagi ng grow box na naka-tape lahat ng mga kanto." />

        <figcaption className="figure-caption">Nakatape ng ng maayos ang mga kanto ng plastic liner.</figcaption>

      </figure>

      <p>Ngayong naka-<i lang="en">tape</i> na sa posisyon ang <i lang="en">plastic liner</i>,
        hawakan ang tigkabilang dulo ng plastic liner at hilahin ito papunta sa gilid ng
      <i lang="en">grow box</i>. Ang <i lang="en">plastic liner</i> ay gagawa ng hugis
      tatsulok na tiklop sa mga kanto.</p>

    <figure className="figure">
      <img src={linerEndPositioned} width="1280" height="853" className="figure-img img-fluid" alt="Ang mga nakatiklop na dulo ng plastic liner ay nakaposisyon sa tabi ng grow box." />

      <figcaption className="figure-caption">Kung tama ang pagkakagawa, ang mga kanto ay titiklop ng maayos sa pwesto.</figcaption>

      </figure>

      <p>Sa mamamagitan ng kaagapay o kamit ang sipit upang hawakan ang plastik sa posisyon,
        lagyan ng tape ang mga kanto at ang gitna. Pansinin na ang plastik ay lampas sa
        taas ng tabi ng <i lang="en">grow box</i> sa lapad nito at ang plastic ay lalampas
        sa gilid ng <i lang="en">styrobox</i> kapag ito ay nilagyan ng <i lang="tape">tape</i>.
        Ulitin ang prosesong ito sa kabilang panig.</p>

      <figure className="figure">
        <img src={linedGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Ibabang bahagi ng styrofoam box na sinapinan ng PE plastic sheet." />

        <figcaption className="figure-caption">Ibabang bahagi ng styrofoam box na sinapinan ng <abbr title="Polyethylene">PE</abbr> plastic sheet.</figcaption>

      </figure>

      <p>Buo na ang <i lang="en">grow box</i>.</p>

      <h2 id="remove-the-locking-tabs-optional">Remove the Locking Tabs (Optional)</h2>

      <h2 id="alisin-ang-mga-locking-tabs-opsyonal">Alisin ang mga <i lang="en">Locking Tabs</i> (Opsyonal)</h2>

      <p>Ang itaas na bahagi ng <i lang="en">styrobox</i> ay may mga pangkalso na nagkakabit
        nito sa ibabaw ng ibabang bahagi. Kapag ang mga <i lang="en">grow boxes</i> ay
        nagsisikan, ang kalsong ito ay nagiging sagabal sa pagbukas ng <i lang="en">grow box</i>
        upang siyasatin ang loob. Maari 
        The upper half of the styrobox has tabs that locks it in place on top of the
        lower half. When the grow boxes are packed close together this locking mechanism
        can make it difficult for you to open the grow box to examine what’s inside.
        Maari silang opsyonal na alisin sa pagputol sa kanila gamit ang <i lang="en">box cutter</i>.</p>

      <figure className="figure">
        <img src={lockingTabs} width="1280" height="853" className="figure-img img-fluid" alt="Locking tabs ng styrobox na matatagpuan sa gilid ng styrobox" />

        <figcaption className="figure-caption">Locking tabs ng styrobox na maaring alisin.</figcaption>

      </figure>
    </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Grow Box Construction Guide</h1>
          <p className="lead">Learn how to build a SNAP grow box with this comprehensive step-by-step guide.
          </p>
      </header>


      <figure className="figure">
        <img src={growBox} width="1280" height="853" className="figure-img img-fluid" alt="A 20 by 16 by 6 styrofoam box with 8 holes on top and a plastic liner at the bottom. The ventilation holes are covered with packing tape." />

        <figcaption className="figure-caption">A SNAP Hydroponics grow box.</figcaption>

      </figure>

      <p>Grow boxes or growing boxes are an essential part of the SNAP Hydroponics
        system. The grow box acts as a reservoir for the SNAP
      <Link to="/en/working-solution">working solution</Link>. The grow box also holds
      the seedling plugs in place. This is an easy to follow step-by-step guide
      on how to properly construct grow boxes from used styrofoam boxes (styrobox).</p>

    <h2 id="required-materials">Required Materials</h2>

    <h3 id="styrobox">Styrobox</h3>

    <p>Boxes made of expanded polystyrene (EPS) known commonly as “styrofoam box” or
      simply “styrobox” make excellent materials for grow box. The size recommended
      for use with SNAP Hydroponics is 20”×16”×6”. These boxes can hold 10 (ten)
      to twelve (12) liters of nutrient solution and has enough room to grow up to
      eight (8) leafy vegetables and up to five (5) fruiting vegetables. Styroboxes
      of this size are used to transport US-imported grapes and are typically common
      during the months of September to January. For details please see
      <Link to="/en/styrobox">the styrobox guide</Link>.</p>

    <h3 id="lining-material">Lining Material</h3>

    <p>Styrofoam boxes has ventilation holes running along the edges. In order for the
      bottom half of the box to hold the nutrient solution it must be lined with a
      sturdy waterproofing sheet. In this guide we’ll use 20 ✕ 30 inch polyethylene
      (<abbr title="Polyethylene">PE</abbr>) plastic bags.</p>

    <figure className="figure">
      <img src={plasticBag} width="1280" height="427" className="figure-img img-fluid" alt="A bag of polyethylene (PE) plastic bag with dimensions and number of contents indicated." />

      <figcaption className="figure-caption">A typical brand of 20 ✕ 30 inch <abbr title="Polyethylene">PE</abbr> plastic bags.</figcaption>

      </figure>

      <h3 id="styrofoam-puncher">Styrofoam Puncher</h3>

      <p>A styrofoam puncher is required to make holes on the upper half of the grow box
        for the&nbsp;seedling plugs. A tin can of the appropriate diameter for the seedling
        plug can be made into such a tool. For details please see this
      <Link to="/en/styrofoam-puncher">guide on making DIY styrofoam puncher</Link>.</p>

    <figure className="figure">
      <img src={styrofoamPunchers} width="1280" height="427" className="figure-img img-fluid" alt="A couple of styrofoam punchers made of tin can and bamboo sticks." />

      <figcaption className="figure-caption">A couple of completed DIY styrofoam punchers.</figcaption>

      </figure>

      <h3 id="packaging-tape">Packaging Tape</h3>

      <p>This will be used to hold the lining material in place and optionally cover the
        ventilation holes.</p>

      <figure className="figure">
        <img src={packingTape} width="1280" height="1280" className="figure-img img-fluid" alt="A roll of brown 2in wide packing tape." />

        <figcaption className="figure-caption">A typical roll of 2in wide packing tape.</figcaption>

      </figure>

      <h3 id="bamboo-stick">Bamboo Stick</h3>

      <p>A bamboo stick or similar implement is used to draw guidelines on the styrofoam.
        It is also used to safely remove the styrofoam piece from the styrofoam puncher
        after each cut.</p>

      <h2 id="prepare-the-styrobox">Prepare the Styrobox</h2>

      <p>Although styrofoam grape boxes are of the same size, the way their upper and
        lower halves are designed to fit together are different depending on the
        manufacturer and the manufacturer’s type designation. This means the upper and
        lower halves of the styrobox won’t fit properly if they are not of the same type.</p>

      <p>The styrobox has a locking tabs to keep it shut. To open the box press on the
        lower half at the middle of one of the shorter side to release the lock then
        pull the upper half away.</p>

      <p>It is recommended to wipe down the styrobox with a clean rag to remove dust,
        grease and/or moisture, because these can cause tape, which we will be using
        to hold the plastic liner in place, to fail.</p>

      <h2 id="work-on-the-upper-half-of-the-grow-box">Work on the Upper Half of the Grow Box</h2>

      <p>Turn the upperhalf of the styrobox over and place it on a flat surface. It is 
        recommended to put a piece of plywood or cardboard in between the surface and
        the styrofoam. This is to prevent the surface from being damaged by the
        styrofoam puncher as it cuts through the styrofoam.</p>

      <p>Draw guide lines connecting the ventilation holes from opposite sides of the
        box as illustrated below. A hole should be made where the lines cross.</p>

      <figure className="figure">
        <img src={guideLines} width="1280" height="853" className="figure-img img-fluid" alt="Upper half of the grow box showing how the guidelines are drawn." />

        <figcaption className="figure-caption">Lines connecting ventilation holes in opposite sides. A hole is made where they intersect.</figcaption>

      </figure>

      <p>To make holes, put the sharp end of the styrofoam puncher on the styrofoam and
        apply pressure to score the surface. Hold the tool by the handles and apply
        pressure while moving the tool in a clockwise and counter-clockwise direction 
        making tool cut deeper through the foam. Continue this process until the tool
        cuts through the foam.</p>

      <p>Gently pull out the styrofoam puncher. A circular piece of foam will be left
        at the cutting end of the tool. Use the stick to safely push one side of the
        piece into the tool. This will cause the piece to rotate and the other side be
        pushed out of the tool allowing it to be safely extracted.</p>

      <p>Repeat this process to create the rest of the holes.</p>

      <figure className="figure">
        <img src={upperGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Upper half of grow box with holes properly aligned." />

        <figcaption className="figure-caption">Upper half of grow box.</figcaption>

      </figure>

      <p>It is strongly recommended to use packing tape to cover the ventilation holes
        on this half of the grow box if the growing area does not have protection from
        mosquitoes. This will deny mosquitoes access to the working solution and stop
        them from breeding in the grow box.</p>

      <figure className="figure">
        <img src={upperGrowBoxSealed} width="1280" height="853" className="figure-img img-fluid" alt="Grow box with upper ventilation holes covered with packing tape." />

        <figcaption className="figure-caption">Protection from mosquitoes.</figcaption>

      </figure>

      <h2 id="work-on-the-lower-half-of-the-grow-box">Work on the Lower Half of the Grow Box</h2>

      <p>Start by preparing pieces of packing tape roughly 3 inches long. Position the
        20 ✕ 30 plastic liner as shown below. Since the box is 20” ✕ 16” in size, the
        plastic liner should exceed the length of the box by 5 inches on both ends and
        exceed the width of the box by 4 inches on both sides. These measurements makes
        it easy to center the plastic liner on the lower half of the grow box.</p>

      <figure className="figure">
        <img src={linerOverGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner laid over the lower half of the grow box." />

        <figcaption className="figure-caption">Proper positioning of the plastic liner over the lower half of the grow box.</figcaption>

      </figure>

      <p>Fold both ends of the plastic liner as shown below.</p>

      <figure className="figure">
        <img src={linerEndsFolded} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner over lower half of grow box with both ends folded." />

        <figcaption className="figure-caption">Plastic liner with both ends properly folded.</figcaption>

      </figure>

      <p>Fold both sides of the plastic liner allowing the plastic liner to fit and “fall
        through.”</p>

      <figure className="figure">
        <img src={linerSidesFolded} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner with ends and sides folded fitting into the lower half of the grow box." />

        <figcaption className="figure-caption">Plastic liner fitting through the lower half of the grow box.</figcaption>

      </figure>

      <p>At this point the edge of the plastic liner should be flush along the length of
        the grow box. Tape them in place at the center of the length of the grow box as
        shown below.</p>

      <figure className="figure">
        <img src={linerSidesTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner taped at the center of the length of the grow box." />

        <figcaption className="figure-caption">Sides of the plastic liner taped in place at the center.</figcaption>

      </figure>

      <p>Add tape on the same sides of the grow box but towards the corner as shown below.
        Note how the tape only holds the side flush edge of the plastic liner and not the
        folded part of the adjacent side.</p>

      <figure className="figure">
        <img src={linerCornerTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner taped at a corner." />

        <figcaption className="figure-caption">Proper way of taping the corner.</figcaption>

      </figure>

      <p>Repeat for the rest of the corners.</p>

      <figure className="figure">
        <img src={linerAllCornersTaped} width="1280" height="853" className="figure-img img-fluid" alt="Plastic liner over lower half of grow box with all corners taped." />

        <figcaption className="figure-caption">Plastic liner with all corners properly taped.</figcaption>

      </figure>

      <p>With the plastic liner fixed into position by tape, grab the folded ends of the
        plastic liner and pull it towards the side of the grow box. The plastic liner
        will make a triangular shaped fold at the corners.</p>

      <figure className="figure">
        <img src={linerEndPositioned} width="1280" height="853" className="figure-img img-fluid" alt="Folded ends of plastic liner positioned on the side of the grow box." />

        <figcaption className="figure-caption">If done correctly, the corners will be folded neatly in place.</figcaption>

      </figure>

      <p>With a helping hand or with the use of clip to hold the plastic in place, tape
        the ends of the plastic liner to the side of the grow box. Tape the corners
        first then tape the center. Note that the plastic exceeds the height of the grow
        box’s wall along its width and the plastic will go over the side of the styrobox
        as you tape it in place. Repeat this process on the opposite side.</p>

      <figure className="figure">
        <img src={linedGrowBox} width="1280" height="853" className="figure-img img-fluid" alt="Lower half of a styrofoam box lined with PE plastic sheet." />

        <figcaption className="figure-caption">Lower half of a styrofoam box lined with <abbr title="Polyethylene">PE</abbr> plastic sheet.</figcaption>

      </figure>

      <p>The grow box is now complete.</p>

      <h2 id="remove-the-locking-tabs-optional">Remove the Locking Tabs (Optional)</h2>

      <p>The upper half of the styrobox has tabs that locks it in place on top of the
        lower half. When the grow boxes are packed close together this locking mechanism
        can make it difficult for you to open the grow box to examine what’s inside.
        They can optionally be removed by cutting them off with a box cutter.</p>

      <figure className="figure">
        <img src={lockingTabs} width="1280" height="853" className="figure-img img-fluid" alt="Styrobox locking tabs found along the width of the styrobox." />

        <figcaption className="figure-caption">Styrobox locking tabs that can be optionally removed.</figcaption>

      </figure>
    </div>
    );
  }
}

export default GrowBox;
