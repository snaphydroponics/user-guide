import React from 'react';
import styrofoamPunchers from './images/styrofoam-punchers.jpg';
import tinCan from './images/tin-can-styro-cup-fit.jpg';
import bambooSticks from './images/bamboo-stick-pair.jpg';
import tinSnips from './images/tin-snips.jpg';
import pointedBamboo from './images/bamboo-stick-with-pointed-end.jpg';
import tCut from './images/t-shaped-cut.jpg';
import enlargedHole from './images/enlarged-hole.jpg';
import bambooToolCentered from './images/bamboo-tool-centered.jpg';
import puncherInterior from './images/styrofoam-puncher-interior-view.jpg';

function StyrofoamPuncher({match}) {
  const lang = match.params.lang || 'fil';
  if (lang === 'fil') {
    return (
      <div className="container">
        <header className="my-5">
  <h1 id="content">Gabay sa Pagbuo ng Sariling Gawang Pambutas ng Styrofoam</h1>
  <p className="lead">Alamin kung paano bumuo ng saraling gawang pambutas ng styrofoam mula sa komprehensibong gabay na ito.
</p>
</header>


<figure className="figure">
  <img src={styrofoamPunchers} width="1280" height="427" className="figure-img img-fluid" alt="Pares ng pambutas ng styrofoam na gawa sa lata at kawayang patpat." />
  
  <figcaption className="figure-caption">Pares ng buong sariling gawang pambutas ng styrofoam.</figcaption>
  
</figure>

<p>Ang sistema ng SNAP <i lang="en">Hydroponics</i> ay gumagamit ng
<i lang="en">grow box</i> upang paglamnan ng <i lang="en">nutrient solution</i>
at ilagay sa lugar ang mga <i lang="en">seedling plugs</i>. Isa sa mga hakbang
sa paggawa ng mga <i lang="en">grow box</i> ay ang paglalagay ng butas sa itaas
na parte ng <i lang="en">styrobox</i> kung saan isusoksok ang mga <i lang="en">
seedling plugs</i>. Isa sa mga paraan upang gawin ito ay gamit ang sariling
gawang gamit na yari sa bakanteng lata.</p>

<h2 id="mga-materyales">Mga Materyales</h2>

<h3 id="bakanteng-lata">Bakanteng Lata</h3>

<p>Lata na may tatlong pulgadang <i lang="en">diameter</i>. Ang mga ito ay pangkaraniwan
dahil sala ay ginagawa alinsunod sa mga pamantayang laki. Upang matiyak kung ang
butas na magagawa ng lata ay mapagkakasya ang <i lang="en">styro cup</i>, isuksok
sila sa lata mismo gaya ng makikita sa baba.</p>

<figure className="figure">
  <img src={tinCan} width="853" height="1280" className="figure-img img-fluid" alt="Ang walong onsang styrofoam na baso ay nakasuksok sa lata na may tatlong puldadang diameter." />
  
  <figcaption className="figure-caption">Ang walang onsang styrofoam na baso ay kasyang-kasya sa latang may tatlong pulgadang diameter.</figcaption>
  
</figure>

<p>Ang paggamit ng lata na may <i lang="en">ribbing</i> ay nirerecomenda. Ang
<i lang="en">ribbing</i> ay nagpapatibay sa lata at bibibigyang lakas itong
mapanatili ang bilog nitong hugis kahit na ang labi nito ay putulin upang palalasin
ang dulong pambutas.</p>

<h3 id="mga-kawayang-patpat">Mga Kawayang Patpat</h3>

<p>Pares ng kawayang patpat o ibang materyales na sapat ang tibay upang magsilbing
hawakan para sa gamit. Para sa kawayang patpat, nirerekomenda na gumawa ng 
pares nito sa pamamagitan ng paghati ng isang pirasong may kalahating pulgadang
kapal upang gumawa ng isang pares na isang kapat na pulgada ang kapal. Gawin
ito sa pamamagitan ng paghati sa patpat na nakayon sa himaymay. Dapat ito ay
may sapat na haba upang tumahak sa <i lang="en">diameter</i> ng lata at may
tatlong pulgadang nakalampas sa tigkabilang tabi ng lata. Siguraduhing makinis
ang mga gilid at mga putol na dulo ng mga patpat ka kawayan upang alisin ang 
mga tatal at matalas na gilid.</p>

<p>Ang paggamit ng isang pirasong kawayan ang makakatipid ng oras at pagod. Ngunit
ang paugoy-ugoy na paggalaw na mararanasan ng gamit na ito ay maagang ikakasira
nito. Ang mga hawakan ay maglalagay ng pwersa sa mga butas kung saan nakalusot
ang mga ito sa lata. Ang mga tabi ng lata ay manipis at malambot. Ang pwersang
ilalapat ng patpat ay may sapat na lakas upang palakihin ang mga butas at sa ilang
gamit lang, ang mga ito ay masyado ng malaki at hindi na magagamit ang pambutas.
Ang pag-ipit ng takip ng lata sa dalawang pirasong kawayan na pinagtagni ay
maglilipat ng pwersa sa takip na mas kayang indahin ang mga pwersang ito.</p>

<figure className="figure">
  <img src={bambooSticks} width="1280" height="1280" className="figure-img img-fluid" alt="Pares ng kalahating pulgadang lapad na patpat na kawayan." />
  
  <figcaption className="figure-caption">Pares ng patpat na kawayan na magsisilbing hawakan para sa pambutas.</figcaption>
  
</figure>

<h3 id="lastiko">Lastiko</h3>

<p>Lastiko o ibang materyales na maaring gamitin upang italing magkasama ang mga
pat na kawayan. Maari ring gumamit ng matibay na tali o tamsi.</p>

<h2 id="mga-kagamitan">Mga Kagamitan</h2>

<p>Ang labi ng bukas na dulo ng lata kay kailangang alisin upang makagawa ng matalas
na gilid na pang putol. Ang isang pares ng <i lang="en">tin snips</i> ay kailangan
upang magawa ito.</p>

<figure className="figure">
  <img src={tinSnips} width="1280" height="853" className="figure-img img-fluid" alt="Pares ng tin snips." />
  
  <figcaption className="figure-caption">Ang tin snips ay kailangan upang makagawa ng matalas na gilid para sa pambutas.</figcaption>
  
</figure>

<p>Kailagan ng kapirasong patpat na kawayan na may patusok na dulo. Ito ay gagamitin
upang maglagay ng butas sa mga tabi ng lata kung saan papasok ang mga hawakan.
Ito ay dapat tatlo hanggang limang pulgada ang haba at may kaparehong <i lang="en">
cross section</i> ng materyales na gagamitin bilang hawakan.</p>

<figure className="figure">
  <img src={pointedBamboo} width="1280" height="1280" className="figure-img img-fluid" alt="Maliit na kawayang patpat na may matulis na dulo." />
  
  <figcaption className="figure-caption">Gamit upang gumawa ng butas para sa mga hawakan.</figcaption>
  
</figure>

<p>Kutsilyo o itak na gagamtin para sa kawayan at lata; pambukas ng lata upang 
kumpletong buksan ang isang dulo ng lata ay kailangan din.</p>

<h2 id="mga-hakbang">Mga Hakbang</h2>

<p>Magsimula sa pamamagitan ng pagbukas ng isang dulo ng lata gamit ang pambukas ng
lata.</p>

<p>Gamit nag kutsilyo o itak, gumawa ng hugis “T” na hiwa sa isang tabi ng lata
malapit sa saradong dulo ng lata. Ang hugis “T” na ito ay maggagarantiya na ang
butas ay mananatiling nakagitna kahit na ito ay palakihin ng gamit ang maliit na
patpat na may matulis na dulo.</p>

<figure className="figure">
  <img src={tCut} width="1280" height="853" className="figure-img img-fluid" alt="Hugis “T” na hiwa malapit sa saradong dulo ng lata." />
  
  <figcaption className="figure-caption">Hugis “T” na hiwa malapit sa saradong dulo ng lata.</figcaption>
  
</figure>

<p>Sa pamamagitan ng gamit na yari sa kawayan, pakalihin ang hugis “T”  na hiwa upang
makagawa ng mas malaking butas. Maaring gumamit ng kahit anong kasangkapan na may
tamang laki upang pukpukin ang gamit patagos sa lata.</p>

<figure className="figure">
  <img src={enlargedHole} width="1280" height="853" className="figure-img img-fluid" alt="Maikling kawayang patpat na may matulis na dulo na pinatags sa hugis “T” na hiwa upang mapalaki ito." />
  
  <figcaption className="figure-caption">Palakihin ang butas sa pamamagitan ng pagpukpok ng kagamitang yari sa kawayan patagos sa hiwa.</figcaption>
  
</figure>

<p>Ang hugis “T” na hiwa ang maggagarantiya na ang butas ay pantay na lalaki at
mananatiling nakagitna kagaya ng nakalarawan sa baba. Ulitin ang prosesong ito
sa kabilang panig ng lata.</p>

<figure className="figure">
  <img src={bambooToolCentered} width="1280" height="853" className="figure-img img-fluid" alt="Lata na tinitingnan mula sa bukas na dulo, pinapakita ang patpat na gamit na yari sa kawayan na tumatagos mula sa hugis “T” na hiwa." />
  
  <figcaption className="figure-caption">Ang gamit na kawayan na nakagitna ng mahusay.</figcaption>
  
</figure>

<p>Ilusot ang isa sa mga patpat na kawayan sa butas. Siguraduhing ito ay nakagitna
upang magpatay ang haba ng mga hawakan. Ipatong ang isa pang patpat upang maitpit
ang takip ng lata sa pagitan ng piraso ng kawayan. Itali mga itong mabuti gamit
ang tali o lastiko.</p>

<figure className="figure">
  <img src={puncherInterior} width="1280" height="853" className="figure-img img-fluid" alt="Kuha sa loob ng pambutas ng styrofoam na nagpapakita ng mga hawakan na dumadaan sa mga butas sa gilid at tinatawid ang loob ng lata." />
  
  <figcaption className="figure-caption">Mga hawakan na pumapasok sa butas sa tagiliran ng lata, dumadaan sa loob ng lata at binabaybay ang diameter nito.</figcaption>
  
</figure>

<p>Pinakahuli, kung nanaisin, ang talim ng kasangkapang ito ay maaring mapatalas sa
pamamagitan ng pagupit ng labi ng lata sa bukas na dulo nito. Bagamat ang hakbang
na ito ay maaring gawin bago ang ibang mga hakbang, nimumunkahi na kahulihan
itong gawin dahil ang ginupit na gilid ay talagang matalim. Sapat ang talas nito
upang makahiwa ng balat. Ang ibang mga hakbang na gagawin sa lata ay magkakaroon
ng panganib na mabigyan ang isang tao ang hiwa kung ang mga ito ay gagawin na
naalis na labi ng lata at mayroon nag matalas na gilid.</p>
      </div>
    );
  } else {
    return (
<div className="container">
        <header className="my-5">
  <h1 id="content">Do-It-Yourself Styrofoam Puncher Construction Guide</h1>
  <p className="lead">Learn how to make a do-it-yourself styrofoam puncher with this comprehensive step-by-step guide.
</p>
</header>


<figure className="figure">
  <img src={styrofoamPunchers} width="1280" height="427" className="figure-img img-fluid" alt="A couple of styrofoam punchers made of tin can and bamboo sticks." />
  
  <figcaption className="figure-caption">A couple of completed DIY styrofoam punchers.</figcaption>
  
</figure>

<p>The SNAP Hydroponics system utilizes a grow box to contain the nutrient
solution and hold the seedling plugs in place. One of the steps in making
grow boxes is to add the holes on the upper half of the styrobox where the
seedling plugs would fit. One of the ways to accomplish this is with the use
of a do-it-yourself (DIY) tool made of empty tin cans.</p>

<h2 id="materials">Materials</h2>

<h3 id="empty-tin-can">Empty Tin Can</h3>

<p>An empty tin can with a 3-inch diameter. These are pretty common since tin cans
follows standard sizes. To verify if the holes made with a tin can will fit
the styro cup, fit them to the can itself as demonstrated in the picture below.</p>

<figure className="figure">
  <img src={tinCan} width="853" height="1280" className="figure-img img-fluid" alt="An 8oz styrofoam cup fit into a tin can with a 3in diameter." />
  
  <figcaption className="figure-caption">Eight-ounce styrofoam cups fits well in 3in diameter tin cans</figcaption>
  
</figure>

<p>The use of tin cans with ribbing along the side is recommended. The ribbing
adds lateral stiffness of the can and allows it to hold its circular structure
even when the lip of the cut has been cut off to sharpen the cutting edge.</p>

<h3 id="bamboo-sticks">Bamboo Sticks</h3>

<p>A pair of bamboo sticks or other materials strong enough to serve as handles
for the tool. For bamboo sticks, it is recommend to make a pair of them by
dividing a single half inch thick bamboo stick into a quarter inch pair by
splitting the stick along the grain. It should be long enough to run along
the diameter of the tin can and have around 3 inches protruding from the sides
of the can. Make sure to smooth out the edges as well as the cut ends of the
bamboo sticks to remove splinters and sharp edges.</p>

<p>Using a single piece of bamboo saves time and effort. However, the rocking
motion this tool will experience during use will ruin it pretty fast. The handles
will exert pressure on the holes where they go through the can. The sides of the
can is very thin and soft. The pressure exerted by the bamboo stick will be enough
to enlarge it and pretty soon it will be too large for the tool be useful.
Sandwiching the lid with two pieces of bamboo lashed together will transfer the 
force to the lid which will be able to handle these forces.</p>

<figure className="figure">
  <img src={bambooSticks} width="1280" height="1280" className="figure-img img-fluid" alt="A pair of one-half inch wide bamboo stick." />
  
  <figcaption className="figure-caption">A pair of bamboo sticks that will serve as handles for the puncher.</figcaption>
  
</figure>

<h3 id="rubber-band">Rubber Band</h3>

<p>Rubber band or other materials that can lash the pair of sticks together. A
sturdy length of string or fishing line works too.</p>

<h2 id="equipment">Equipment</h2>

<p>The lip at the open end of the tin can needs to be cut away in order to produce
a sharp cutting edge. A pair of tin snips is required in order to do this.</p>

<figure className="figure">
  <img src={tinSnips} width="1280" height="853" className="figure-img img-fluid" alt="A pair of tin snips." />
  
  <figcaption className="figure-caption">Tin snips are required to make a sharp cutting edge for the puncher.</figcaption>
  
</figure>

<p>A piece of bamboo stick with a pointed end is also required. It will be used to
add holes on the sides of the can where the handles will go through. It should
be around 3–5 inches long with the same cross section as the material that will
be used as handles.</p>

<figure className="figure">
  <img src={pointedBamboo} width="1280" height="1280" className="figure-img img-fluid" alt="A short bamboo stick with a pointy end." />
  
  <figcaption className="figure-caption">Tool used to make holes for the handle.</figcaption>
  
</figure>

<p>A knife or a bolo to work with the bamboo and the tin can; and a can opener to
completely open one end of the tin can are also required.</p>

<h2 id="procedure">Procedure</h2>

<p>Start by using a can opener to completely open one end of the tin can.</p>

<p>Then using a knife or bolo add “T” shaped cut on one side of the can near the
closed end. This “T” shaped cut will make sure that the hole will be centered
and even when enlarged using the pointed bamboo stick implement.</p>

<figure className="figure">
  <img src={tCut} width="1280" height="853" className="figure-img img-fluid" alt="A “T” shaped cut near the closed end of the tin can." />
  
  <figcaption className="figure-caption">A “T” shaped cut near the closed end of the tin can.</figcaption>
  
</figure>

<p>Using our bamboo tool, enlarge the “T” shaped cut to make a larger hole. Use any
appropriately sized tool to hammer it through the can.</p>

<figure className="figure">
  <img src={enlargedHole} width="1280" height="853" className="figure-img img-fluid" alt="A short bamboo stick with a pointy end driven through the “T” shaped cut to enlarge it." />
  
  <figcaption className="figure-caption">Enlarge the hole by hammering the bamboo tool through the cut.</figcaption>
  
</figure>

<p>The “T” shaped cut makes sure that the hole enlarges evenly and stays centered
as shown in the picture below.&nbsp;Repeat this process on the opposite side of the
can.</p>

<figure className="figure">
  <img src={bambooToolCentered} width="1280" height="853" className="figure-img img-fluid" alt="Tin can viewed from the open end showing bamboo tool through one of the “T” shaped cut." />
  
  <figcaption className="figure-caption">Bamboo tool centered well.</figcaption>
  
</figure>

<p>Push one of the bamboo sticks through the holes previously made. Make sure it is
centered so that the length of the handles are even. Put the other half on top
and so that the lid of the can is sandwiched between the pieces of bamboo. 
Then lash them together tightly with a rubber band or string.</p>

<figure className="figure">
  <img src={puncherInterior} width="1280" height="853" className="figure-img img-fluid" alt="Interior view of the styrofoam puncher showing handles going through the side holes and across the interior of the can." />
  
  <figcaption className="figure-caption">Handles going through the side holes and along a diameter of the can.</figcaption>
  
</figure>

<p>Lastly, if preferred, the cutting edge of the tool can be sharpened by cutting
off the lip of the open end of the can. Although this step can be performed
before any other steps, it is recommend to do this last because the cut edge
is indeed sharp. It is sharp enough to cut through skin. The other steps performed
on the tin can will have a risk of giving someone a cut if they are performed
with the lip of the can removed exposing a sharp edge.</p>
      </div>
    );
  }
}

export default StyrofoamPuncher;
