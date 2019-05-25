import React from 'react';
import suitableSNAPLocation from './images/suitable-snap-location.jpg';
import sowingTray from './images/sowing-tray.jpg';
import cocoPeat from './images/coco-peat.jpg';
import seedPacketLabel from './images/seed-packet-label.jpg';
import germinatedSeeds from './images/germinated-seeds.jpg';
import pePlasticBag from './images/pe-plastic-bag-20-by-30.jpg';
import guideLines from './images/guide-lines.jpg';
import growboxTopBottomView from './images/grow-box-top-bottom-view.jpg';
import linedGrowBoxLowerHalf from './images/lined-grow-box-lower-half.jpg';
import styroCup from './images/styro-cup.jpg';
import seedlingPlugBottom from './images/seedling-plug-bottom.jpg';
import hardeningOff from './images/hardening-off.jpg';
import addingWater from './images/adding-water.jpg';
import workingSolution from './images/working-solution.jpg';

function Manual({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">Gabay sa Pagamit ng SNAP Hydroponics</h1>
          <p className="lead">Komprehensibong gabay kung paano magpalaki ng halaman gamit ang SNAP Hydroponics.
          </p>
        </header>

        <h1 id="mahalagang-paalala">Mahalagang Paalala</h1>

        <p>Ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> ay isang mababang halagang sistemang haydroponiko na madaling
          buuhin at madaling mapanatili. Ang pagpapalaki ng mga halaman gamit ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> ay
          isang kasiya-siya at kapakipakinabang na libangan or negosyo. Subalit, bago magsimula,
          mahalagang tandaan na ang tamang lokasyon para sa sistemang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i> ay isa sa pinakamahalagang batayan na dapat isaalang-alang sa pagpapalaki ng mga
          halaman gamit ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i>.</p>

        <p>Upang lumaki, kailangan ng mga halaman ng sapat na ilaw. Dagdag pa dito, kailangan
          ng sistema ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i> ng proteksiyon sa ulan. Ang angkop
          na lokasyon para sa <abbr title="Simple Nutrient Addition Program">SNAP</abbr> <i lang="en">Hydroponics</i> ay may mga sumusunod na
          katangian:</p>

        <ul>
          <li>
            <p>Nakakatangap ng sapat na sinag ng araw at/o artipisyal na ilaw.</p>
          </li>
          <li>
            <p>Protektado sa ulan.</p>
          </li>
        </ul>

        <p>Mga Halimbawa:</p>

        <ul>
          <li>
            <p>saradong <i lang="en">greenhouse</i> sa maaraw na lokasyon (pinaka-angkop)</p>
          </li>
          <li>
            <p>lugar na may bubong na silag at nasa maaraw na lokasyon (angkop)</p>
          </li>
          <li>
            <p>lokasyong nakaharap sa silangan na nakatatanggap ng sinag ng araw sa maagang
              umaga na natatakpan <i lang="en">awning</i> (katanggap-tanggap)</p>
          </li>
        </ul>

        <figure className="figure">
          <img src={suitableSNAPLocation} width="1280" height="427" className="figure-img img-fluid" alt="Mga grow boxes na may lumalaking halaman, nakalagay sa mga patungan, at nasa maaraw na lugar." />

          <figcaption className="figure-caption">Isang angkop na lugar para sa pagpapatubo gamit ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics</figcaption>

        </figure>

        <p>Para sa mga talagang baguhan, madiin na minumungkahi na magsimula sa pagtatanim
          ng letsugas. Ang <i lang="en">loose leaf lettuce</i> ay nirererekomenda sa mga
          buwan ng tag-init. Maari ring magsimula ang mga baguhan sa mga ibang madahong
          gulay gaya ng pechay, mustasa o kangkong.</p>

        <h1 id="magpatubo-ng-binhi">Magpatubo ng Binhi</h1>

        <h2 id="mga-kailangang-materyales">Mga Kailangang Materyales</h2>

        <h3 id="punlaan">Punlaan</h3>

        <p>Mababaw na kahon lalagyan na may mga butas sa ilalim. Maari itong gawin mula sa
          mga <i lang="en">microwavable containers</i>. Siguraduhing mayroong butas sa
          ilalim. Mahalaga na nakakalusot ang tubig sa ilalim ng punlaan. Dahil kung hindi,
          mabababad ang mga buto o supling sa tubig na maaring ikabulok ng mga buto at 
          ikalunod ng mga supling.</p>

        <p>Pinakamainam na itabi ang takip dahil maari itong gamitin para panatilihin ang
          halumigmig at makatulong sa pag-usbong ng mga buto. Kung balak itong gamitin gaya
          ng nabaggit, lagyan din ito ng butas upang hayaang lumabas ang hangin at hayaan
          itong umikot.</p>

        <figure className="figure">
          <img src={sowingTray} width="1280" height="853" className="figure-img img-fluid" alt="Micorwavable na tub na may mga butas sa ilalim." />

          <figcaption className="figure-caption">Punlaan: ginamit ang mababaw na microwavable tub na maraming butas na lugusan na dinagdag sa ilalim.</figcaption>

        </figure>

        <h3 id="growing-media"><i lang="en">Growing Media</i></h3>

        <p>Maraming materyales ang maaring gamiting <i lang="en">growing media</i> para sa
          pagpapalaki ng binhi.  <i lang="en">Coco peat</i> ang gamit sa gabay na ito.</p>

        <p>Maari ring gamitin ang mga ordinaryong <i lang="en">potting mixes</i> lalo na
          yung mga dinesenyo para sa pagpapalaki ng binhi. Hindi mairerekomenda ang paggamit
          ng lupa na binungkal sa paligid dahil maaring ito ay kontaminado ng mga peste at
          mga sanhi ng sakit.</p>

        <figure className="figure">
          <img src={cocoPeat} width="1280" height="853" className="figure-img img-fluid" alt="Isang balde ng pinaalsang coco peat." />

          <figcaption className="figure-caption">Coco peat na nagmula mula sa coco peat bricks.</figcaption>

        </figure>

        <p><a href="/coco-peat" className="btn btn-primary btn-block">Gabay sa <i lang="en">Coco Peat</i></a></p>

        <h3 id="mga-buto">Mga Buto</h3>

        <p>Ang mga ito ay mabibili sa mga lokal na tindahan ng mga gamit na panghardin at
          pang-agrikultura. Para sa mga baguhan, madiing nimumungkahi na magsimula sa mga
          madahong gulay gaya ng letsugas, pechay, mustasa o kangkong.</p>

        <h2 id="mga-hakbang">Mga Hakbang</h2>

        <ol>

          <li>Latagan ang punlaan ng basang <i lang="en">coco peat</i> mga isang pulgada
            ang kapal.</li>

          <li>Dasigin at pantayin ang <i lang="en">coco peat</i>.</li>

          <li>
            <p>Ibudbod ang mga buto ang manipis at patay-pantay sa ibabaw ng <i lang="en">
                coco peat</i>. Bilang batayan, a maliit na kurot ng maliliit na buto (letsugas
              bilang halibawa) ay katumbas ng dalawampu (20) hanggang limampung (50) piraso
              ng buto. Mangyaring isaalang-alang ang <i lang="en">germination rate</i> ng mga
              buto na malimit ay nakasulat sa pakete ng buto.</p>

            <figure className="figure">
              <img src={seedPacketLabel} width="1280" height="853" className="figure-img img-fluid" alt="Micorwavable na tub na may mga butas sa ilalim." />

              <figcaption className="figure-caption">Punlaan: ginamit ang mababaw na microwavable tub na maraming butas na lugusan na dinagdag sa ilalim.</figcaption>

            </figure>

          </li>


          <li>Katamtamang diligan. Kung gaaano katagal ang aabutin para sumibol ang mga
            buto ay malimit nakatala sa pakete ng mga buto. Maraming mga sandhi ang
            makaaapketo sa tagal ng panahon na kailangan upang umusbong ang mga buto at ilan
            sa kanila ang uusbong.
          </li>

          <li>
            <p>Palakihin ang mga binhi ng sampung (10) araw bago ilipat sa
              kanya-kanyang <i lang="en"><a href="#ihanda-ang-mga-seedling-plugs">seedling plugs</a></i>.</p>

            <figure className="figure">
              <img src={germinatedSeeds} width="1280" height="853" className="figure-img img-fluid" alt="Napa-usbong na mga buto ng letsugas na nagpapakita ng kanilang unang totoong dahon." />

              <figcaption className="figure-caption">Mga punla ng lettuce na nagpapakita ng unang totoong mga dahon.</figcaption>

            </figure>

          </li>

        </ol>

        <p><a href="/seedling-production" className="btn btn-primary btn-block">Gabay sa Pagpapatubo ng Binhi</a></p>

        <h1 id="ihanda-ang-mga-grow-boxes">Ihanda ang mga <i lang="en">Grow Boxes</i></h1>

        <h2 id="mga-kailangang-materyales-1">Mga Kailangang Materyales</h2>

        <h3 id="styrobox"><i lang="en">Styrobox</i></h3>

        <p>Ang mga kahong yari sa <i lang="en">Expanded Polystyrene (<abbr title="Expanded Polystyrene">EPS</abbr>)</i> na mas kilala
          sa pangalang <i lang="en">“styrofoam box”</i> o “syrobox” ang angkop na materyales
          para sa <i lang="en">grow box</i> (o <i lang="en">“growing box”</i>). Ang rekomendadong
          laki para sa <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics</i> ay 20”×16”×6”. Ang nga kahong ito
          aya kayang maglaman ng sampu (10) hanggang labingdalawang (12) litro ng <i lang="en">
            nutrient solution</i> at hanggang limang (5) namumungang gulay. Ang mga
          <i lang="en">styroboxes</i> na may ganitong laki ay pangkaraniwang makikita sa mga
          buwan ng Setyembre hanggang Enero.</p>

        <p><a href="/en/styrobox" className="btn btn-primary btn-block">Styrofoam Boxes Guide</a></p>

        <h3 id="lining-material"><i lang="en">Lining Material</i></h3>

        <p>Ang mga <i lang="en" styrofoam="">boxes</i> ay may mga <i lang="en">ventilation holes</i>
          na sa kanilang mga gilid. Upang makapanglaman ng <i lang="en">nutrient solution</i>
          ang ibabang bahagi ng kahon kailangan itong latagan ng matibay na <i lang="en">waterproofing
            sheet</i>. Sa manual na ito, gagamit ng 20 ✕ 30 <i lang="en">inch polyethylene (<abbr title="Polyethylene">PE</abbr>)
            plastic bags</i>.</p>

        <figure className="figure">
          <img src={pePlasticBag} width="1280" height="427" className="figure-img img-fluid" alt="Isang bag ng polyethylene plastic (PE) bag kung saan ang sukat at bilang ng laman ay nakatala." />

          <figcaption className="figure-caption">Isang pangkariwang tatak ng 20 ✕ 30 pulgadang <abbr title="Polyethylene">PE</abbr> plastic bags.</figcaption>

        </figure>

        <h3 id="pambutas-ng-styrofoam">Pambutas ng <i lang="en">Styrofoam</i></h3>

        <p>Kailangang ng pambutas ng <i lang="en">styrofoam</i> upang lagyan ng butas ang
          ibabaw ng <i lang="en">grow box</i> para sa mga <i lang="en"><a href="#ihanda-ang-mga-seedling-plugs">seedling
              plugs</a></i>. Ang lata na may tamang laki ay maaaring gawing
          ganito.</p>

        <p><a href="/styrofoam-puncher" className="btn btn-primary btn-block">Gabay sa Pambutas</a></p>

        <h3 id="packaging-tape"><i lang="en">Packaging Tape</i></h3>

        <p>Gagamitin ito upang idikit ang <i lang="en">lining material</i> at lagyan ng takip
          ang mga <i lang="en">ventilation holes</i>.</p>

        <h3 id="patpat-na-yari-sa-kawayan">Patpat na Yari sa Kawayan</h3>

        <p>Isang patpat na yari sa kawayan o katulad na kagamitan ay gagamitin upang gumuhit
          ng mga linyang gabay sa <i lang="en">styrofoam</i>. Ito rin ay gagamitin upang
          maingat na maalis ang kapirasong <i lang="en">styrofoam</i> mula sa pambutas matapos
          itong gamitin para gumawa ng butas.</p>

        <h2 id="mga-hakbang-1">Mga Hakbang</h2>

        <ol>

          <li>Baliktarin ang itaas na bahagi ng <i lang="en">styrobox</i> at ipatong ito sa
            pantay na patungan. Maglagay ng kapirasong <i lang="en">plywood</i> o karton sa
            pagitan ng patungan at ng <i lang="en">styrofoam</i> upang maiwasan ang pagkasira
            ng patungan sa pagbubutas.</li>

          <li>
            Gumuhit ng mga linyang gabay na pinagdudugsong ang mga <i lang="en">ventilation holes</i>
            mula sa magkasalungat na panig ng kahon gaya nakararawan sa ibaba. Gagawa ng butas
            nakagitna kung saan nagtatagpo ang mga linya.




            <figure className="figure">
              <img src={guideLines} width="1280" height="853" className="figure-img img-fluid" alt="Itaas na hati ng grow box na pinapakita ang mga ginuhit na linyang gabay." />

              <figcaption className="figure-caption">Mga linyang pinagdudugsong ang mga ventilation holes sa mga magkasalungat na panig. Gagawa ng butas kung saan sila nagtatagpo.</figcaption>

            </figure>
          </li>

          <li>Upang gumawa ng mga butas, ipatong ang matalas na dulog ng pambutas ng <i lang="en">styfoam puncher</i>
            sa <i lang="en">styrofoam</i> at idiin ito upang lagyan ng marka ang ibabaw.
            Hawakan ang pambutas sa mga hawakan at idiin ito habang iniiikot ng pakanan at
            pakaliwa. Sa ganitong paraaan, lalong lalalim ang pambutas sa <i lang="en">foam</i>.
            Ipagpatuloy ito hanggang tuluyang mabutas ang <i lang="en">foam</i>.
          </li>


          <li>Maingat na bunutin ang pambutas ng <i lang="en">styrofoam</i>. Isang bilog na 
            piraso ng <i lang="en">foam</i> ang maiiwan sa dulo ng pambutas. Gamitin ang patpat
            upang maingan na itulak ang isang panig nito. Iikot ang pirasong ito at lalabas
            ang kabilang panig palabas ng pambutas at magiging madali ang pag-alis nito sa
            pambutas.
          </li>

          <li>Ulitin ang prosesong ito upang gawin ang nalalabi pang mga butas.




            <figure className="figure">
              <img src={growboxTopBottomView} width="1280" height="853" className="figure-img img-fluid" alt="Itaas na hat ng grow box na pinapakita kung paano nakasentro ang mga butas gamit ang mga linyang gabay bilang gabay." />

              <figcaption className="figure-caption">Ginawa ang butas kung saan nagtatagpo ang mga linyang gabay.</figcaption>

            </figure>
          </li>

          <li>Madiing minumungkahing gamitin ang <i lang="en">packing tape</i> upang takpan
            ang mga <i lang="en">ventilation holes</i> sa bagahing ito ng <i lang="en">styrobox</i>
            kung ang iyong lugar na pagpapatubuan ay walang proteksiyon sa lamok. Sa ganitong
            paraan, mapipigilang maabot ng mga lamok ang <i lang="en">nutrient solution</i>
            at hindi sila makakapangitlog sa loob ng <i lang="en">grow box</i>.
          </li>

          <li>Sapinan ang ibabang bahagi ng <i lang="en">styrobox</i> ng <i lang="en"><abbr title="Polyethylene">PE</abbr> plastic bag</i>.




            <figure className="figure">
              <img src={linedGrowBoxLowerHalf} width="1280" height="853" className="figure-img img-fluid" alt="Ibabang bahagi ng styrofoam box na sinapinan ng PE plastic sheet." />

              <figcaption className="figure-caption">Ibabang bahagi ng styrofoam box na sinapinan ng <abbr title="Polyethylene">PE</abbr> plastic sheet.</figcaption>

            </figure>
          </li>
        </ol>

        <p><a href="/grow-box" className="btn btn-primary btn-block">Gabay sa <i lang="en">Grow Boxes</i></a></p>

        <h1 id="ihanda-ang-mga-seedling-plugs">Ihanda ang mga <i lang="en">Seedling Plugs</i></h1>

        <h2 id="mga-kailangang-materyales-2">Mga Kailangang Materyales</h2>

        <h3 id="mga-styro-cups">Mga <i lang="en">styro cups</i></h3>

        <p>Sa gabay na ito, ang gagamitin ay walong onsang (8oz.) <i lang="en">styro cup</i>
          na nakalarawan sa baba.</p>

        <figure className="figure">
          <img src={styroCup} width="1280" height="853" className="figure-img img-fluid" alt="Styro cups na nakataob at nakatikhaya." />

          <figcaption className="figure-caption">Isang tipikal na 8 oz. na basong yari sa styrofoam.</figcaption>

        </figure>

        <h3 id="maliit-na-laghari-o-katulad-na-gamit">Maliit na Laghari o Katulad na Gamit</h3>

        <p>Gagamitin ito upang gumawa ng mga hiwa sa ilalim ng mga <i lang="en">styro cup</i>.</p>

        <h3 id="panatubong-mga-binhi">Panatubong mga Binhi</h3>

        <p>Magyaring basahin ang <a href="#magpatubo-ng-binhi">seksiyon sa pagpapatubo ng mga binhi</a>.</p>

        <h3 id="growing-media-1"><i lang="en">Growing Media</i></h3>

        <p>Maraming materyales ang maaring gamitin bilang <i lang="en">growing media</i>.
          Sa gabay na ito, <i lang="en">coco peat</i> ang gagamitin.</p>

        <h3 id="plastik-na-katsara-bbq-stick-o-mga-katulad-na-gamit">Plastik na Katsara, <i lang="en">BBQ stick</i> o mga Katulad na Gamit</h3>

        <p>Gagamitin ito upang bungkalin ang mga binhi mula sa sowing tray. Gagamitin rin ito
          na pambungkal kapag naglilipat ng mga binhi sa mga <i lang="en">seedling plug</i>.</p>

        <h3 id="mga-hakbang-2">Mga Hakbang</h3>

        <ol>

          <li>Gamit ang maliit na laghari, gumawa ng lima (5) hanggang walong (8) patayong
            hiwa sa tabi ng baso mula sa ilalim. Ito ay dapat dalawang-katlo (2/3) ng taas
            ng baso ang haba at sa ilalim naman ay isang-katlo (1/3) ng <i lang="en">radius</i>
            ng ilalim ng baso.




            <figure className="figure">
              <img src={seedlingPlugBottom} width="853" height="1280" className="figure-img img-fluid" alt="Ilalim ng seedling plug na nagpapakita ng mga hiwa sa tagiliran at ilalim." />

              <figcaption className="figure-caption">Ilalim ng seedling plug na may mga hiwa sa tagiliran at ilalim.</figcaption>

            </figure>

          </li>

          <li>Lagyan ng coco peat ang mga hinandang <i lang="en">styro cup</i>. Isang-kapat
            (1/4) hanggang isang-katlo (1/3) ng laman ng <i lang="en">styro cup</i>—sapat 
            lamang para suportahang nakatayo ang binhi. Mas konti ang lamang <i lang="en">growing media</i>,
            mas mainam dahil mas mabilis na makakarating ang mga ugat sa <i lang="en">nutrient solution</i>.
          </li>

          <li>Ilipat ang mga binhi mula sa punlaan patungo sa mga baso. Gamitin ang patpat o
            katulad na gamit nito upang maingat na bungkalin ang mga binhi mula sa punlaan.
            “Maghukay” ng butas sa gitna ng <i lang="en">growing media</i> na nasa loob ng 
            baso gamit ang patpat o katulad na gamit. Isang binhi lang ang ilipat kada baso.
            Itayo ng maayos ang nilipat na binhi sa pamamagitan ng paglalagay ng <i lang="en">growing media</i>
            sa paligid ng puno nito gamit ang patpat.
          </li>


          <li>
            <p>Kung nanaisin, ng mga binhi sa nasa <i lang="en">seedling plugs</i> ay maaring
              <em>patibayin</em> bago sila ilipat sa <i lang="en">growing boxes</i>. Hayaang nakatubog
              sa mababaw na matabang na <a href="/working-solution"><i lang="en">working solution</i></a>
              ang mga inihandang <i lang="en">seedling plugs</i> ng mga ilang araw.</p>

            <figure className="figure">
              <img src={hardeningOff} width="1280" height="853" className="figure-img img-fluid" alt="Seedling plugs na nakatubog sa mababaw na matabang na SNAP working solution." />

              <figcaption className="figure-caption">Mga binhing pinapatibay.</figcaption>

            </figure>

          </li>

        </ol>
        <p><a href="/working-solution" className="btn btn-primary btn-block">Gabay sa <i lang="en">Working Solution</i></a></p>

        <h1 id="pag-setup-ng-snap-hydroponics-system">Pag-setup ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics System</i></h1>

        <h2 id="mga-kailangang-materyales-3">Mga Kailangang Materyales</h2>

        <h3 id="snap-nutrient-solution-for-hydroponics"><i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i></h3>

        <p>Ang sistemang <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics</i> ay nangangailangan ng paggamit
          ng <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</i>. Ang mga ito ay
          sinaliksik, ginagawa, at ipinagbibili sa <abbr title="Institute of Plant Breeding-UPLB">IPB-UPLB</abbr>. Ang mga ito rin ay ipinagbibili
          ng mga <i lang="en"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized Resellers</i></p>

        <p><a href="/authorized-resellers" className="btn btn-primary btn-block">Gabay sa <i lang="en">Authorized Resellers</i></a></p>

        <h3 id="seedling-plugs"><i lang="en">Seedling Plugs</i></h3>

        <p>Mangyaring basahin ang <a href="#ihanda-ang-mga-seedling-plugs">seksiyon sa  <i lang="en">seedling plugs</i></a>.</p>

        <h3 id="growing-boxes"><i lang="en">Growing Boxes</i></h3>

        <p>Mangyaring basahin ang <a href="#ihanda-ang-mga-grow-boxes">seksiyon sa  <i lang="en">grow boxes</i></a>.</p>

        <h3 id="malinis-na-tubig">Malinis na Tubig</h3>

        <p>Maaring gamitin ang tubig galing sa balon o gripo. Ang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> ay dinesenyo para
          sa mga tipikal na pinagkukunan ng tubig sa Pilipinas. Ang pagamit ng tubig na 
          dumaan sa <i lang="en">reverse osmosis</i> (<em><i lang="en">distilled water</i></em>)
          ay sumasalungat sa <i lang="en">working parameters</i> ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> at ang resultang
          halo ng sustansiya ay hindi magiging angkop sa pagpapapalaki ng gulay sa
          pamamaraang haydroponiko.</p>

        <h3 id="patungan">Patungan</h3>

        <p>Opsyonal na mga patungan kung saan ilalagay ang mga <i lang="en">grow boxes</i>
          sa ilalim ng silungan.</p>

        <h3 id="silungan">Silungan</h3>

        <p><i lang="en">Green house</i>, <i lang="en">rain shelter</i> o <i lang="en">awning</i>
          ng bubong na nakaharap sa silangan para sa pinakamaaga at pinakamatagal na sikat
          ng araw.</p>

        <h2 id="mga-hakbang-3">Mga Hakbang</h2>

        <ol>

          <li>Isaayos ang mga <i lang="en">grow boxes</i> sa silungan. 
            Arrange the growing boxes in your shelter. Siguraduhing ang bawat isa ay pantay
            at ang bawat isa ay nakakatanggap ng sapat na sikat ng araw upang suportahan ang
            paglaki ng mga halaman.
          </li>

          <li>Lagyan ang bawat isang grow box sampung litrong (10L) tubig.




            <figure className="figure">
              <img src={addingWater} width="1280" height="960" className="figure-img img-fluid" alt="Nagbubuhos ng tubig sa ibabang hati ng grow box." />

              <figcaption className="figure-caption">Nagdadagdag ng sampung litro (10L) ng tubig sa ibabang hati ng grow box.</figcaption>

            </figure>
          </li>

          <li>
            <p>Dagdagan ng 25 mL ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A. Haluing mabuti. Dagdagan ng 25 mL ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B.
              Haluing mabuti. Kahit alin sa <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A o <abbr title="Simple Nutrient Addition Program">SNAP</abbr> ay maaring maunang ihalo sa tubig
              subalit dapat tandaan na dapat <strong>haluing mabuti</strong> ang <i lang="en">mixture</i> sa
              pagitan ng pagdagdag ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A/B <i lang="en">nutrient solution</i>. Ang resultang
              <i lang="en">mixture</i> ay ang <i lang="en">working solution</i>.</p>

            <figure className="figure">
              <img src={workingSolution} width="1280" height="853" className="figure-img img-fluid" alt="SNAP working solution na nagpapakita ng malabo at medyo madilaw na hitsura." />

              <figcaption className="figure-caption">Ang tamang timpla ng <abbr title="Simple Nutrient Addition Program">SNAP</abbr> working solution ay may malabo at medyo madilaw na hitsura.</figcaption>

            </figure>

          </li>

          <li>Pagsamahin ang itaas at ibabang bahagi ng grow box at siguraduhing tama ang
            pagkakalapat nila.</li>

          <li>
            <p>Maglagay ng <i lang="en">seedling plug</i> sa bawat butas sa itaas na bahagi ng
              <i lang="en">grow box</i>. Siguraduhing ang ilalim ng mga baso ay nakalubog sa
              <i lang="en">solution</i> ng hindi bababa sa isang sentimetro (1 cm) ang sukat.
              Kung hindi pa, dagdagan ng <strong>malinis na tubig</strong> hanggang ang maabot tamang taas
              ng <i lang="en">solution</i>.</p>
          </li>

          <li>Suriin ang mga kahon para sa mga butas at ayusin ang dapat ayusin.</li>
        </ol>

        <h1 id="maintenance-ng-sistemang-snap-hydroponics"><i lang="en">Maintenance</i> ng Sistemang <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics</h1>

        <ul>
          <li>
            <p>Bisitahin ang <i lang="en">setup</i> tuwing umaga upang hulihin ang mga
              <i lang="en">larva</i> ng insekto na maaring kumain sa mga halaman. Ang mga
              <i lang="en">larva</i> ay aktibo at madaling makita sa umaga. Pagkalipas noon,
              sila ay nagtatago at mas mahirap makita.</p>
          </li>
          <li>
            <p>Asahan ang mabagal na paglaki ng mga binhi sa unang dalawang linggo pagkatapos
              silang <i lang="en">transplant</i>, lalo na kung ang mga punla ay hindi
              dumaan sa pagpapatibay. Sa unang dalawang linggo, ang halaman ay nagsasanay na
              lumaki ng nakababad sa tubig.</p>
          </li>
          <li>
            <p>Pagkatapos ng unang dalawang linggo, magpapakita ang mga halaman ng mabilis na
              paglaki. Marami sa mga madahong pananim ay may laking maari ng ipagbili sa ikatlong
              linggo.</p>
          </li>
          <li>
            <p>Asahan ang pagbaba ng lebel ng <i lang="en">working solution</i> habang lumalaki
              ang mga halaman. Lalong bibilis ang pagbaba nito sa paglaki ng mga halaman.</p>
          </li>
          <li>
            <p>Dagdagan (<i lang="en">replenish</i>) ang <i lang="en">solution</i> kapag
              masyado ng mababa ang lebel ang <i lang="en">working solution</i>. <strong>Huwag</strong> 
              itong hayaang matuyo ng tuluyan.  Kapag nagdadagdag ng <i lang="en">solution</i>,
              <strong>huwag</strong> itong hayaang maabot ang ilalim ng mga baso at ilubog ang lahat ng mga
              ugat. Ang itaas na bahagi ng mga ugat ng mga halaman ay dapat laging nakalantad
              sa hangin kaya hindi dapat ito nakalubog sa tubig. Palagian itong tandaan kapag
              dinadagdagan ng laman ng <i lang="en">grow box</i>.</p>
          </li>
          <li>
            <p>Ang mga pananim na kailangang ng dagdagan ngunit malapit ng anihin ay dapat
              dagdagan ng malinis na tubig.</p>
          </li>
          <li>
            <p>Ang mga pananim na kailangang palakihin ng lampas sa isang buwan ay dapat
              dagdagan ng bagong <i lang="en">working solution</i></p>
          </li>
        </ul>

        <p><a href="/replenishment" className="btn btn-primary btn-block">Gabay sa <i lang="en">Replenishment</i></a></p>

        <p>Para sa mga karagdagang katanungan mangyaring sumangguni sa <a href="/faq">mga madalas na tanong</a>.</p>





      </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
          <h1 id="content">SNAP Hydroponics Users’ Guide</h1>
          <p className="lead">Comprehensive guide on how to grow plants using SNAP Hydroponics.
          </p>
        </header>

        <h1 id="important-reminder">Important Reminder</h1>

        <p><abbr title="Simple Nutrient Addition Program">SNAP</abbr> is a low-cost hydroponics system that is easy to setup and easy to maintain.
          Growing plants with <abbr title="Simple Nutrient Addition Program">SNAP</abbr> is a fun and rewarding hobby or business. However,
          before starting, it is important to remember that a suitable location for the
          <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics system is one of the most important factor to consider when
          growing plants using <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics.</p>

        <p>In order to grow, plants require sufficient light. In addition, the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics
          system needs protection from rain. A suitable location for the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics
          system has the following characteristics:</p>

        <ul>
          <li>
            <p>receives sufficient sunlight and/or artificial lighting</p>
          </li>
          <li>
            <p>is protected from rain</p>
          </li>
        </ul>

        <p>Examples:</p>

        <ul>
          <li>
            <p>a fully enclosed greenhouse in a sunny location (ideal)</p>
          </li>
          <li>
            <p>an area that is covered by a transparent roof in a sunny location (less than ideal)</p>
          </li>
          <li>
            <p>an east facing area that receives early morning sunlight and is covered by an
              awning (acceptable)</p>
          </li>
        </ul>

        <figure className="figure">
          <img src={suitableSNAPLocation} width="1280" height="427" className="figure-img img-fluid" alt="Grow boxes with plants growing, sitting on benches and located in a sunny area." />

          <figcaption className="figure-caption">A suitable <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics growing location.</figcaption>

        </figure>

        <p>For total beginners, it is strongly recommended to start with lettuce. Loose
          leaf lettuce is recommended during the summer months. Beginners may also start
          with other leafy vegetables like <i lang="fil">pechay</i>,
          <i lang="fil">mustasa</i> or <i lang="fil">kang-kong</i>.</p>

        <h1 id="establish-seedlings">Establish Seedlings</h1>

        <h2 id="required-materials">Required Materials</h2>

        <h3 id="sowing-tray">Sowing Tray</h3>

        <p>Shallow box or basin with holes for drainage at the bottom. This can be
          fashioned out of microwavable containers. Be sure to add drainage holes at the
          bottom. It is important that water is allowed to drain off the container,
          otherwise seeds or seedlings will sit in water which can cause the seeds to rot
          and the seedlings to drown.</p>

        <p>It’s best to keep the lid since it can be used to keep the moisture in and help
          with the seed germination. If the lid is to be used in such a manner, add
          aeration holes on them to allow some air to escape and circulate.</p>

        <figure className="figure">
          <img src={sowingTray} width="1280" height="853" className="figure-img img-fluid" alt="A microwavable tub with holes at the bottom and on the lid." />

          <figcaption className="figure-caption">A microwavable tub fashioned into a sowing tray.</figcaption>

        </figure>

        <h3 id="growing-media">Growing Media</h3>

        <p>There are a number of materials that can be used as growing media for seed raising.
          Coco peat is used as growing media in this manual.</p>

        <p>Regular potting mixes also work, specially the ones designed for seed raising.
          The use of soil that is dug up from the surroundings is not recommended because
          it could be contaminated with pests and pathogens.</p>

        <figure className="figure">
          <img src={cocoPeat} width="1280" height="853" className="figure-img img-fluid" alt="A tub of hydrated coco peat." />

          <figcaption className="figure-caption">Coco peat prepared from coco peat bricks.</figcaption>

        </figure>

        <p><a href="/en/coco-peat" className="btn btn-primary btn-block">Coco Peat Guide</a></p>

        <h3 id="seeds">Seeds</h3>

        <p>These can be bought from local garden or agricultural center. For beginners, it
          is strongly recommended to start with leafy vegetables such as lettuce, <i lang="fil">pechay</i>,
          <i lang="fil">mustasa</i> or <i lang="fil">kangkong</i>.</p>

        <h2 id="procedure">Procedure</h2>

        <ol>
          <li>Fill the sowing tray with a layer of moist coco peat around 2.5cm thick (1 inch)</li>

          <li>Pack and level the coco peat.</li>

          <li>Spread the seeds uniformly and thinly over the coco peat. For reference, a
            pinch of small seeds (lettuce seeds for example) contains around twenty (20) to
            fifty (50) seeds. Be sure to consider the germination rate of the seeds which
            is usually indicated in the seed packets.




            <figure className="figure">
              <img src={seedPacketLabel} width="1280" height="427" className="figure-img img-fluid" alt="Close up of a seed packet label showing details such as purity, germination rate, moisture content, net weight and sow by date." />

              <figcaption className="figure-caption">Seed packet label.</figcaption>

            </figure>
          </li>

          <li>Water liberally. How long the seed will take to germinate is usually indicated
            on the sowing instructions printed on the seed packet. There are a number of
            factors that can affect how long the seeds will take to germinate and the
            germination rate. Depending on the freshness of the seeds first signs of
            germination usually appear within the next twenty-four (24) to seventy-two (72)
            hours with most of the seeds germinating one (1) to two (2) weeks.</li>

          <li>
            <p>Grow the seedlings for ten (10) days before transferring to
              individual <a href="#prepare-seedling-plugs">seedling plugs</a>.</p>

            <figure className="figure">
              <img src={germinatedSeeds} width="1280" height="853" className="figure-img img-fluid" alt="Germinated lettuce seeds showing their first true leaves." />

              <figcaption className="figure-caption">Lettuce seedlings with first true leaves visible.</figcaption>

            </figure>
          </li>
        </ol>

        <p><a href="/en/seedling-production" className="btn btn-primary btn-block">Seedling Production Guide</a></p>

        <h1 id="prepare-grow-boxes">Prepare Grow Boxes</h1>

        <h2 id="required-materials-1">Required Materials</h2>

        <h3 id="styrobox">Styrobox</h3>

        <p>Boxes made of expanded polystyrene (<abbr title="Expanded Polystyrene">EPS</abbr>) known commonly as “styrofoam box” or
          simply “styrobox” make excellent materials for grow box (or growing box). The
          size recommended for use with <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics is 20”×16”×6”. These boxes can
          hold 10 (ten) to twelve (12) liters of nutrient solution and has enough room to
          grow up to eight (8) leafy vegetables and up to five (5) fruiting vegetables.
          Styroboxes of this size are used to transport US imported grapes and are
          typically common during the months of September to January.</p>

        <p><a href="/en/styrobox" className="btn btn-primary btn-block">Styrofoam Boxes Guide</a></p>

        <h3 id="lining-material">Lining Material</h3>

        <p>Styrofoam boxes has ventilation holes running along the edges. In order for the
          bottom half of the box to hold the nutrient solution it must be lined with a
          sturdy waterproofing sheet. This manual uses 20 ✕ 30 inch polyethylene (<abbr title="Polyethylene">PE</abbr>)
          plastic bags.</p>

        <figure className="figure">
          <img src={pePlasticBag} width="1280" height="427" className="figure-img img-fluid" alt="A typical brand of 20 ✕ 30 inch PE plastic bags." />

          <figcaption className="figure-caption">A typical brand of 20 ✕ 30 inch PE plastic bags.</figcaption>
        </figure>

        <h3 id="styrofoam-puncher">Styrofoam Puncher</h3>

        <p>A styroform puncher is required to make holes on the upper half of the grow box
          for the <a href="#prepare-seedling-plugs">seedling plugs</a>. A tin can of the appropriate diameter
          for the seedling plug can be made into such a tool.</p>

        <p><a href="/en/styrofoam-puncher" className="btn btn-primary btn-block">Styroam Puncher Guide</a></p>

        <h3 id="packaging-tape">Packaging Tape</h3>

        <p>This will be used to hold the lining material in place and optionally cover the
          ventilation holes.</p>

        <h3 id="bamboo-stick">Bamboo Stick</h3>

        <p>A bamboo stick or similar implement is used to draw guidelines on the styrofoam.
          It is also used to safely remove the styrofoam piece from the styrofoam puncher
          after each cut.</p>

        <h2 id="procedure-1">Procedure</h2>

        <ol>
          <li>Flip the upperhalf of the styrobox over and place it on a flat surface. 
            Put a piece of plywood or cardboard in between the surface and the styrofoam to
            prevent the surface from being damaged by the styrofoam puncher during the
            cutting step of the procedure.</li>

          <li>Draw guide lines connecting the ventilation holes from opposite sides of the
            box as illustrated below. A hole should be made centered where the lines cross.

            <figure className="figure">
              <img src={guideLines} width="1280" height="853" className="figure-img img-fluid" alt="Upper half of the grow box showing how the guidelines are drawn." />

              <figcaption className="figure-caption">Lines connecting ventilation holes in opposite sides. A hole is made where they intersect.</figcaption>

            </figure>
          </li>

          <li>To make holes, put the sharp end of the styrofoam puncher on the styrofoam
            and apply pressure to score the surface. Hold the tool by the handles and apply
            pressure while moving the tool in a clockwise and counter-clockwise direction
            making tool cut deeper through the foam. Continue this process until the tool
            cuts through the foam.</li>

          <li>Pull out the styrofoam puncher carefully. A circular piece of foam will be left on
            one end of the tool. Use the stick to safely push one side of the piece into the
            tool. This will cause piece to rotate and the other side will be pushed out of the
            tool allowing it to be safely extracted.</li>

          <li>Repeat this process to create the rest of the holes.




            <figure className="figure">
              <img src={growboxTopBottomView} width="1280" height="853" className="figure-img img-fluid" alt="Upper half of the grow box showing how the punched holes are positioned with respect to the guide lines." />

              <figcaption className="figure-caption">Holes are punched where the guide lines intersect.</figcaption>

            </figure>
          </li>

          <li>It is strongly recommended to use packing tape to cover the ventilation holes
            on this half of the styrobox if the growing area does not have protection from
            mosquitoes. This will deny mosquitoes access to the nutrient solution and stop
            them from breeding in the grow box.</li>

          <li>Line the lower half of the styrobox with the <abbr title="Polyethylene">PE</abbr> plastic bag.




            <figure className="figure">
              <img src={linedGrowBoxLowerHalf} width="1280" height="853" className="figure-img img-fluid" alt="Lower half of a styrofoam box lined with PE plastic sheet." />

              <figcaption className="figure-caption">Lower half of a styrofoam box lined with <abbr title="Polyethylene">PE</abbr> plastic sheet.</figcaption>

            </figure>
          </li>
        </ol>

        <p><a href="/en/grow-box" className="btn btn-primary btn-block">Grow Boxes Guide</a></p>

        <h1 id="prepare-seedling-plugs">Prepare Seedling Plugs</h1>

        <h2 id="required-materials-2">Required Materials</h2>

        <h3 id="styrofoam-cups">Styrofoam Cups</h3>

        <p>This guide uses eight ounce (8oz.) styrofoam cups pictured below.</p>

        <figure className="figure">
          <img src={styroCup} width="1280" height="853" className="figure-img img-fluid" alt="Styro cups: upside down and rightside up." />

          <figcaption className="figure-caption">A typical 8 oz. styrofoam cup.</figcaption>

        </figure>

        <h3 id="small-hand-saw-or-similar">Small Hand Saw or Similar</h3>

        <p>This is used this to cut slits at the bottom of the styro cups.</p>

        <h3 id="established-seedlings">Established Seedlings</h3>

        <p>Please see <a href="#establish-seedlings">section on establishing seedlings</a>.</p>

        <h3 id="growing-media-1">Growing Media</h3>

        <p>There are a number of materials that can be used as growing media. This manual
          uses coco peat.</p>

        <h3 id="plastic-spoon-bbq-stick-or-similar-implements">Plastic Spoon, BBQ Stick or Similar Implements</h3>

        <p>This is used to uproot seedlings from the sowing tray. This is also used to digging
          implement when transferring the seedlings to the seedling plugs.</p>

        <h3 id="procedure-2">Procedure</h3>

        <ol>
          <li>Using a handsaw make four (4) to six (6) vertical slits on the side of the cup
            starting from the bottom. It should run two-thirds (2/3) along the side of the cup
            and about one-third (1/3) the radius of the bottom of the cup.




            <figure className="figure">
              <img src={seedlingPlugBottom} width="853" height="1280" className="figure-img img-fluid" alt="Bottom of seedling plug showing slits running along the side and bottom." />

              <figcaption className="figure-caption">Bottom of seedling plug with slits running along the side and bottom.</figcaption>

            </figure>
          </li>


          <li>Add coco peat to the prepared styro cups. One-fourth (1/4) to one-third (1/3)
            the volume of the cup is sufficient—just enough to support the seedling upright.
            The lesser the better because the less growing media there is in the cup the
            faster it is for the roots to find its way to the nutrient solution.</li>

          <li>Transplant the seedlings from the sowing tray to the cups. Use a stick or a
            similar implement to uproot the seedlings from the sowing tray with care. “Dig”
            a hole in the middle of the growing media in the cup using a stick or similar
            implement. Transfer only one seedling per cup. Make the transferred seedling
            stand firmly by moving the growing media around the base of the seedling using
            a stick.</li>

          <li>
            <p>If desired, the seedlings in the seedling plugs can be
              <em>hardened off</em> before they are transferred to the grow boxes. Let the prepared
              seedling plug sit in a shallow pool of diluted working solution for a few days.</p>

            <figure className="figure">
              <img src={hardeningOff} width="1280" height="853" className="figure-img img-fluid" alt="Seedling plugs sitting on a shallow pool of diluted SNAP working solution." />

              <figcaption className="figure-caption">Hardening seedlings off.</figcaption>

            </figure>
          </li>
        </ol>

        <p><a href="/en/working-solution" className="btn btn-primary btn-block">Working Solution Guide</a></p>

        <h1 id="setting-up-the-snap-hydroponics-system">Setting Up the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics System</h1>

        <h2 id="materials-needed">Materials Needed</h2>

        <h3 id="snap-nutrient-solution-for-hydroponics"><abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics</h3>

        <p>The <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics system requires the use of <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Nutrient Solution for Hydroponics.
          They are developed, manufactured and sold in <abbr title="Institute of Plant Breeding-UPLB">IPB-UPLB</abbr>. They are also distributed
          by <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Authorized Resellers.</p>

        <p><a href="/en/authorized-resellers" className="btn btn-primary btn-block">Authorized Resellers Guide</a></p>

        <h3 id="seedling-plugs">Seedling Plugs</h3>

        <p>Please see <a href="#prepare-seedling-plugs">section on seedling plugs</a>.</p>

        <h3 id="grow-boxes">Grow Boxes</h3>

        <p>Please see <a href="#prepare-grow-boxes">section on grow boxes</a>.</p>

        <h3 id="clean-water">Clean Water</h3>

        <p>Deep well and regular tap water works well. <abbr title="Simple Nutrient Addition Program">SNAP</abbr> is designed for use with water
          from typical water sources in the Philippines. Using water that has gone through
          reverse osmosis (<em>distilled water</em>) works against <abbr title="Simple Nutrient Addition Program">SNAP</abbr>’s working parameters and
          the resulting nutrient mixture will not be suitable for hydroponics growing.</p>

        <h3 id="benches">Benches</h3>

        <p>Optional benches or stand where the grow boxes will be placed under a shelter.</p>

        <h3 id="shelter">Shelter</h3>

        <p>Green house, rain shelter or roof awning facing east for the earliest and
          longest sunlight possible.</p>

        <h2 id="procedure-3">Procedure</h2>

        <ol>

          <li>Arrange the grow boxes in the shelter. Make sure that each one is leveled
            and each one is receiving sufficient sunlight to support the plants’ growth.</li>

          <li>Fill each grow box with 10L of water.




            <figure className="figure">
              <img src={addingWater} width="1280" height="960" className="figure-img img-fluid" alt="Water being poured on the bottom half of a grow box." />

              <figcaption className="figure-caption">Adding 10L of clean water to the bottom half of the grow box.</figcaption>

            </figure>
          </li>


          <li>Add 25 mL of <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A. Mix well. Add 25 ml of <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B. Mix well.
            Either <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A or <abbr title="Simple Nutrient Addition Program">SNAP</abbr> B can be added to the water first but remember to <strong>stir
              the mixture thoroughly</strong> in between adding the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> A/B nutrient solution. The
            resulting mixture is the working solution.




            <figure className="figure">
              <img src={workingSolution} width="1280" height="853" className="figure-img img-fluid" alt="SNAP working solution displaying its cloudy and slightly yellow appearance." />

              <figcaption className="figure-caption">Properly prepared <abbr title="Simple Nutrient Addition Program">SNAP</abbr> working solution has a cloudy and slightly yellow appearance.</figcaption>

            </figure>
          </li>


          <li>Join the upper and lower halves of the grow box together and make sure they
            are properly locked into place.</li>

          <li>Insert a seedling plug to each holes on the upper half of the grow box. Make
            sure the bottom of the cups is immersed in the solution by at least a centimeter.
            If not, add <strong>plain water</strong> until the proper water level is reached.</li>

          <li>Examine the boxes for leaks and do troubleshooting.</li>

        </ol>

        <h1 id="maintenance-of-the-snap-hydroponics-system">Maintenance of the <abbr title="Simple Nutrient Addition Program">SNAP</abbr> Hydroponics System</h1>

        <ul>
          <li>
            <p>Visit the setup every morning as early as possible to catch any insect larva
              that may feed on the plants. The larva is active visible in the early morning.
              After that they tend to hide and are harder to find.</p>
          </li>
          <li>
            <p>Expect slow plant growth in the first two weeks after the seedlings have been
              transplanted. This is specially true if the seedlings has not been hardened off.
              In this first couple of weeks the plant is adjusting to water logged conditions.</p>
          </li>
          <li>
            <p>After the first couple of weeks the plants will show vigorous growth. Most leafy
              crops will be of marketable size during in third week onward.</p>
          </li>
          <li>
            <p>Expect the working solution level to go down as the plants grow. The level will
              go down faster as the plants grow.</p>
          </li>
          <li>
            <p>Replenish the solution when the working solution level becomes too low. <strong>Never</strong>
              allow it to totally dry up. When replenishing the solution, <strong>never</strong> allow
              the level of the solution to reach the bottom of the cup and submerge all of the
              roots. The upper half of the plants’ roots must always be exposed to air and
              thus not be submerged in water. Always observe this practice when replenishing
              the contents of the grow box.</p>
          </li>
          <li>
            <p>Crops that needs replenishment but are close to harvest are replenished with
              plain water.</p>
          </li>
          <li>
            <p>Crops that needs to be grown for over a month are replenished with fresh working
              solution.</p>
          </li>
        </ul>

        <p><a href="/en/replenishment" className="btn btn-primary btn-block">Replenishment Guide</a></p>

        <p>For any additional questions please refer to the <a href="/en/faq">frequently asked questions</a>
          page.</p>





      </div>
    );
  }
}

export default Manual;
