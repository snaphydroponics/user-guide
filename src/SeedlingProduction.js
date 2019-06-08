import React from 'react';
import lettuceSeedlings from './images/lettuce-seedlings.jpg';
import seedFlotationTest from './images/seed-flotation-test.jpg';
import mustasaSeedlings from './images/mustasa-seedlings.jpg';
import seedPacketLabel from './images/seed-packet-label.jpg';
import diseases from './images/seed-borne-diseases.jpg';
import sowingTray from './images/sowing-tray.jpg';
import lettuce from './images/lettuce-seedlings-and-seeds.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SeedlingProduction({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
  <h1 id="content">Gabay sa Produksiyon ng mga Binhi</h1>
  <p className="lead">Alamin ang mga katangian ng mabuting buto, tamang pag-imbak ng mga buto at kung paano magpalaki ng malusog na mga binhi mula sa mga buto.
</p>
</header>


<figure className="figure">
  <LazyLoadImage src={lettuceSeedlings} width="1280" height="853" className="figure-img img-fluid" alt="Mga batang binhi ng letsugas na may kitang cotyledons at unang totoong dahon." />
  
  <figcaption className="figure-caption">Malulusog na mga binhi ng letsugas.</figcaption>
  
</figure>

<p>Isa sa mga pinaka-importanteng dahilan na nagdedetermina ng masaganang ani sa
ilalim ng angkop na kondisyon ay ang mga buto at ang mga binhing pinalaki mula
sa mga ito.</p>

<h2 id="mga-buto">Mga Buto</h2>

<p>Ang mga masaganang ani ay nagsisimula sa mga mainam na buto. Ang mga mainam na
buto ay nagmumula sa mga maasahang pinagkukunan. Ang mga katangian ng mainam na
mga buto ay nakalista sa baba:</p>

<h3 id="mataas-na-posibilidad-na-sumibol">Mataas na Posibilidad na Sumibol</h3>

<p>Ang mga mainam na buto ay sumisibol ng maayos. Ang mga buto sa mga maasahang
mapagkukunan ay malimit sinusulat ang sukatan na ito bilang <i lang="en">germination
rate percentage</i>. Mas mataas ang porsyento, mas maraming buto ang sisibol.
Halimbawa, ang pakete na naglalaman ng isang libong (1,000) buto, at ang nakasulat
na <i lang="en">germination rate</i> ay 90%, umasa na 900 na buto mula sa pakete
ang uusbong.</p>

<p>Bukod pa sa porsiyentong nakasulat sa pakete ng mga buto, ang <i lang="en">germination
rates</i> ay maari ring madetermina sa pamamagitan ng <i lang="en">germination test</i>{' '}
at ng <i lang="en">flotation test</i>.</p>

<p>Ginagawa ang <i lang="en">germination test</i> sa pamamagitan ng pagpapasibol ng
bilang na <i lang="en">sample</i> mula sa koleksiyon ng mga buto at pagdetermina
ng porsiyento ng buto na aktuwal na sumibol.</p>

<p>Malimit, ang mga butong sumisibol ay lumulubog sa tubig. Ang pagpapalitaw ay 
nagsisilbing paraan upang paghiwalayin ang mga butong sisibol at mga butong
mababa ang kalidad.</p>

<figure className="figure">
  <LazyLoadImage src={seedFlotationTest} width="1280" height="960" className="figure-img img-fluid" alt="Lagagyan ng tubig na may mga buto. May ilan na lumulutang sa tubig. May ilan din na lumulubog." />
  
  <figcaption className="figure-caption">Pagpapalitaw. Ang mga butong sisibol ang lumulobog at ang mga butong patay ay lumulutang.</figcaption>
  
</figure>

<h3 id="pinagmumulan-ng-normal-na-binhi">Pinagmumulan ng Normal na Binhi</h3>

<p>Ang mga binhing sumisibol sa mainam na mga buto ay may malusog na <i lang="en">radicle</i>,
  matatag na tangkay, at malusog na <i lang="en">cotydedon</i>.</p>

<figure className="figure">
  <LazyLoadImage src={mustasaSeedlings} width="1280" height="853" className="figure-img img-fluid" alt="Mga batang binhi ng mustasa na nagpapakita ng matatag na tangkay at mga cotyledons" />
  
  <figcaption className="figure-caption">Mga malusog na binhi ng mustasa.</figcaption>
  
</figure>

<h3 id="mataas-na-pisikal-na-pagkadalisay">Mataas na Pisikal na Pagkadalisay</h3>

<p>Ang magandang koleksiyon ng mga buto ay walang mga dumi gaya ng buhangin, bato,
ipa, bunot, lupa, atbp. Wala rin silang mga buto ng ibang uri o klase ng halaman;
bubot, basag, bansot, tuyo, may sakit at pinamumugarang mga buto.</p>

<h3 id="mataas-na-genetic-purity">Mataas na <i lang="en">Genetic Purity</i></h3>

<p>Ang mainam na mga buto ay galing sa mga halaman na pinalahi upang mapreserba
ang mga kanais-nais na katangian para sa isang partikular na pananim. Ang mga
buto na may mataas na <i lang="en">genetic purity</i> ay maasahang laging ipapakita
ang mga katangiang ito.</p>

<h3 id="tamang-moisture-content-para-sa-pag-imbak">Tamang <i lang="en">Moisture Content</i> para sa Pag-imbak</h3>

<p>Ang mainam na mga buto ay hindi masyadong basa na maari silang tubuan ng mga{' '}
<i lang="en">pathogens</i> at hindi sila masyadong tuyo na ang mga buto ay
nawawalan ng <i lang="en">viability</i> habang nakaimbak.</p>

<figure className="figure">
  <LazyLoadImage src={seedPacketLabel} width="1280" height="427" className="figure-img img-fluid" alt="Malapitang larawan ng etiketa ng pakete ng buto na nagpapakita ng mga detalye gaya ng purity, germination rate, moisture content, net weight at sow by date." />
  
  <figcaption className="figure-caption">Itiketa ng pakete ng buto.</figcaption>
  
</figure>

<h2 id="walang-sakit-o-mga-peste">Walang Sakit o Mga Peste</h2>

<p>Ang mga buto na walang mga sakit at mga peste ang simula ng masaganang ani.</p>

<figure className="figure">
  <LazyLoadImage src={diseases} width="1280" height="853" className="figure-img img-fluid" alt="Brochure na may impormasyon tungkol sa mga sakit na namumula sa mga buto." />
  
  <figcaption className="figure-caption">Information sheet tungkol sa mga sakit na nagmumula sa mga buto.</figcaption>
  
</figure>

<h2 id="seedling-production">Seedling Production</h2>

<h3 id="materials">Materials</h3>

<ul>
  <li>
    <p><i lang="en">Sterilized</i> na <i lang="en">growing media</i> - ang{' '}
<i lang="en">sterilized</i> na coco peat ay angkop dito</p>
  </li>
  <li>
    <p>Punlaan - ang mababaw na lalagyan na may butas na lagusan ng tubig sa ilalim
ay angkop dito.</p>
  </li>
</ul>

<figure className="figure">
  <LazyLoadImage src={sowingTray} width="1280" height="853" className="figure-img img-fluid" alt="Isang microvable tub na may mga butas sa ilalim at sa takip." />
  
  <figcaption className="figure-caption">Isang microwavable tub na giwawang punlaan ng buto.</figcaption>
  
</figure>

<h3 id="mga-hakbang">Mga Hakbang</h3>

<ol>
<li>Punuin ang punlaan ng suson ng basang <i lang="en">growing media</i> na may
dalawa hanggang tatlong sentimetro ang kapal (2-3 cm). Dasikin at pantayin ang{' '}
<i lang="en">growing medium</i></li>

<li>Ibudbod ang mga maliit na buto ng manipis at pantay-pantay. Kung gaano karami
ay nakadepende kung ilan ang kakailanganin. Maglaan ng karagdagang
mga buto na mga labinglimang porsyento (15%) ng dami ng kakailanganin upang masagot
ang <i lang="en">germination rate</i> at iba pang mga sanhi na maaring ikabawas
ng mga binhi.</li>

<li>Matapos magpunla, diligan ng marami ayon sa pangangailangan. Asahan ang 
pag-usbong ng mga buto sa loob ng tatlo hanggang limang araw.</li>

<li>Diligan ang mga binhi kapag kailangan hanggang sila ay handa na para ipunla.




<figure className="figure">
  <LazyLoadImage src={lettuce} width="1280" height="853" className="figure-img img-fluid" alt="Lalagyan na may lumaking binhi at isapang lalagyan na may kakapunla lang na buto ng letsugas." />
  
  <figcaption className="figure-caption">Kaliwa: Mga binhi na handa nang ipunla; kanan: Mga butong kapupunla lamang.</figcaption>
  
</figure>
</li>
</ol>

<h3 id="mga-karagdagang-tips">Mga Karagdagang <i lang="en">Tips</i></h3>

<p>Malimit, sa mga pakete ng buto nakasulat ang <i lang="en">batch date</i> or ang{' '}
<i lang="en">sow-by-date</i> ng butong nasa loob ng pakete. Kapag bumibili ng 
pakete ng buto, piliin ang mga paketeng may kamakailan lamang na <i lang="en">batch
date</i> o may <i lang="en">sow-by-date</i> na ilang buwan pa sa kinabukasan. Ang
pagkasariwa ng mga buto ay may malaking epekto sa <i lang="en">viability</i> ng
mga ito at ang mga petsang ito ay isang maasahang sukatan kung gaano kasariwa
ang mga buto.</p>

<p>Upang mapanatili ang mataas na <i lang="en">germination rate</i> ng mga buto na
nasa bukas na pakete, ilagay ang mga ito sa kanilang orihinal na <i lang="en">foil
packets</i> na nakatiplop ng sarado ang bukas na dulo. Ilagay ang mga ito sa 
saradong plastik na lalagyan at panatilihing <i lang="en">refrigerated</i> ang
mga ito.</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <header className="my-5">
  <h1 id="content">Seedling Production Guide</h1>
  <p className="lead">Learn about the properties of good seed, proper storage of seeds and how to raise healthy seedlings from seeds.
</p>
</header>


<figure className="figure">
  <LazyLoadImage src={lettuceSeedlings} width="1280" height="853" className="figure-img img-fluid" alt="Young lettuce seedlings with cotyledons and first true leaves visible." />
  
  <figcaption className="figure-caption">Healthy lettuce seedings.</figcaption>
  
</figure>

<p>One of the most important factors that determines good harvest under favorable
conditions are the seeds and the seedlings raised from them.</p>

<h2 id="seeds">Seeds</h2>

<p>Good harvests starts with good seeds. Good seeds come from reliable sources.
Properties of good seeds are listed below:</p>

<h3 id="high-viability">High Viability</h3>

<p>Good seeds germinate well. Seeds from reliable sources often list this metric
as the germination rate percentage. The higher the percentage, the more of the
seeds will germinate. For example, in a packet containing 1,000 seeds that list
the germination rate as 90%, we can expect to germinate 900 seeds from the packet.</p>

<p>Aside from the percentage indicated in the seed packet, germination rates can 
also be determined by germination test and flotation test.</p>

<p>Germination test can be performed by attempting to germinate a counted sample
from a lot of seed and determining the percentage of seeds that actually germinated.</p>

<p>Most seeds viable seeds sink in water. Flotation serves as a method to separate
viable seeds from seeds of poor quality.</p>

<figure className="figure">
  <LazyLoadImage src={seedFlotationTest} width="1280" height="960" className="figure-img img-fluid" alt="A tub of water with seeds in it. Some are seeds float. Some seeds sink." />
  
  <figcaption className="figure-caption">Seed flotation test. Viable seeds sink and bad seeds float.</figcaption>
  
</figure>

<h3 id="produces-normal-seedling">Produces Normal Seedling</h3>

<p>Seedlings that sprout from good seeds have healthy radicle, strong stem, healthy cotyledons and vigorous growth.</p>

<figure className="figure">
  <LazyLoadImage src={mustasaSeedlings} width="1280" height="853" className="figure-img img-fluid" alt="Young mustasa seedlings displaying healthy stalk and cotyledons." />
  
  <figcaption className="figure-caption">Healthy mustasa seedlings.</figcaption>
  
</figure>

<h3 id="good-physical-purity">Good Physical Purity</h3>

<p>A good lot of seeds are free from debris like sand, stone, chaff, husks, soil,
etc. They are also free of seeds of other varieties or species; immature, broken,
undersized, shriveled, diseased and infested seeds.</p>

<h3 id="high-genetic-purity">High Genetic Purity</h3>

<p>Good seeds are produced from plants that are bred to preserve the desirable
traits and suppress the undesirable traits for a particular crop. Good seeds
with high genetic purity consistently displays these traits.</p>

<h3 id="appropriate-moisture-content-for-storage">Appropriate Moisture Content for Storage</h3>

<p>Good seeds are not too moist that it supports the growth of pathogens and not
too dry that seeds lose viability during storage.</p>

<figure className="figure">
  <LazyLoadImage src={seedPacketLabel} width="1280" height="427" className="figure-img img-fluid" alt="Close up of a seed packet label showing details such as purity, germination rate, moisture content, net weight and sow by date." />
  
  <figcaption className="figure-caption">Seed packet label.</figcaption>
  
</figure>

<h3 id="free-of-diseases-and-pests">Free of Diseases and Pests</h3>

<p>Seeds that are free of diseases and pests is the start of a good harvest.</p>

<figure className="figure">
  <LazyLoadImage src={diseases} width="1280" height="853" className="figure-img img-fluid" alt="A brochure with information about seed borne diseases." />
  
  <figcaption className="figure-caption">Information sheet about seed-borne disease.</figcaption>
  
</figure>

<h2 id="seedling-production">Seedling Production</h2>

<h3 id="materials">Materials</h3>

<ul>
  <li>
    <p>Sterilized growing media - sterilized coco peat works well</p>
  </li>
  <li>
    <p>Sowing tray - a shallow plastic tub with drain holes at the bottom works well</p>
  </li>
</ul>

<figure className="figure">
  <LazyLoadImage src={sowingTray} width="1280" height="853" className="figure-img img-fluid" alt="A microwavable tub with holes at the bottom and on the lid." />
  
  <figcaption className="figure-caption">A microwavable tub fashioned into a sowing tray.</figcaption>
  
</figure>

<h3 id="procedure">Procedure</h3>

<ol>
<li>Fill the sowing tray with a layer of moist growing medium 2-3 cm thick.
Pack and level the growing medium.</li>

<li>Scatter the small seeds uniformly and thinly. The amount depends on the need.
  Consider provisioning for extra seedlings by about 15% of the number needed
  to account for the seed germination rate and other factors that can result
  in seedling loss.</li>

<li>After sowing, water liberally as needed. Expect germination in 3 to 5 days.</li>

<li>Water the seedlings as needed until they are ready for prickling.




<figure className="figure">
  <LazyLoadImage src={lettuce} width="1280" height="853" className="figure-img img-fluid" alt="A tub with grown lettuce seedlings and another tub with recently sown lettuce seedlings." />
  
  <figcaption className="figure-caption">Left: Seedlings ready for prickling; right: Seeds recently sown.</figcaption>
  
</figure>
</li>
</ol>

<h3 id="additional-tips">Additional Tips</h3>

<p>Seed packets usually indicate the batch date or the sow-by-date of the seeds in
the packet. When buying seed packets select the ones with a recent batch date or
with a sow-by-date that is months into the future. The freshness of the seeds
have significant impact on their viability and these dates are a reliable measure
of how fresh the seeds are.</p>

<p>To maintain high germination rate of seeds in an open packet, keep them in their
original foil packets with the open end folded shut. Keep them in a sealed
plastic container and keep them refrigerated.</p>
      </div>
    );
  }
}

export default SeedlingProduction;
