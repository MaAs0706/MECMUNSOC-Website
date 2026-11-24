import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const links = ['The Society', 'Committees', 'Past Editions', 'Core Team', 'Gallery', 'Contact'];

function Emblem() {
  return <svg className="emblem" viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth=".8" />
    <path d="M17 37q-13-11-6-25 8 7 8 17m12 8q13-11 6-25-8 7-8 17" fill="none" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M12 30q4-1 6 2m-7-8q5 0 8 3m-7-9q5 1 8 5m16 7q-4-1-6 2m7-8q-5 0-8 3m7-9q-5 1-8 5" fill="none" stroke="currentColor" strokeWidth=".75"/>
    <path d="M24 12v24m-7-4h14l-2-2H19zm2-3h10l-2-2h-6zm2-3h6l-1-4h-4zm-3 12h12v2H18z" fill="none" stroke="currentColor" strokeWidth="1"/>
    <path d="m21 13 3-4 3 4m-3-5v5" fill="none" stroke="currentColor" strokeWidth=".8"/>
  </svg>;
}

function Navbar() {
  return <header className="nav-wrap">
    <a className="brand" href="#home" aria-label="MECMUN home"><span className="crest"><Emblem /></span><span className="brand-copy"><b>MECMUN</b><small>MODEL UNITED NATIONS SOCIETY</small></span></a>
    <nav aria-label="Main navigation"><button className="menu-toggle" aria-label="Open navigation" onClick={() => document.querySelector('.nav-links').classList.toggle('open')}>☰</button><ul className="nav-links">{links.map((link) => <li key={link}><a href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a></li>)}</ul></nav>
  </header>;
}

function HallArtwork() {
  return <svg className="hall-art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Engraved diplomatic hall beneath a celestial globe">
    <defs>
      <pattern id="engrave" width="8" height="8" patternTransform="rotate(35)" patternUnits="userSpaceOnUse"><path d="M0 0v8" stroke="#b98142" strokeWidth="1" opacity=".34"/></pattern>
      <radialGradient id="centerGlow"><stop stopColor="#b98243" stopOpacity=".2"/><stop offset="1" stopColor="#b98243" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="800" cy="510" rx="540" ry="360" fill="url(#centerGlow)"/>
    <g className="map-art" fill="none" stroke="#a98243" strokeWidth="1.2" opacity=".34">
      <path d="M40 270q140-92 258-18t209 6q130-105 237-34t208 21q132-70 248 2t365-16M20 320q155-70 288 0t223 2q130-76 240-10t220 28q145-55 260 15t325-5M83 205q95 79 56 153m250-199q-30 76 31 141m271-196q-25 76 29 143m314-163q-60 77-12 160m323-110q-55 70 14 138M87 441q184-108 337-7t286-3q172-97 342-4t450-4"/>
      <path d="M110 175q160 8 262 134t223 100q139-12 245-106t286-94q140 2 318 109M40 388q124 13 238 112t244 46q133-38 228-113t241-65q171 11 323 129" strokeDasharray="2 7"/>
      <path d="M140 178c69 48 91 94 72 147s-69 102-93 135m1230-284c-75 45-112 93-101 143s61 101 95 137"/>
    </g>
    <g className="orbit" fill="none" stroke="#d5a352" strokeWidth="3" opacity=".86">
      <ellipse cx="800" cy="223" rx="168" ry="43" transform="rotate(-19 800 223)"/><ellipse cx="800" cy="223" rx="168" ry="43" transform="rotate(24 800 223)"/><circle cx="800" cy="220" r="105" strokeWidth="2"/>
      <path d="M800 103v235M683 220h234M720 140l160 160m0-160L720 300" strokeWidth="1"/>
    </g>
    <g className="globe-map" fill="none" stroke="#d8ad68" strokeWidth="1.2" opacity=".72">
      <circle cx="800" cy="220" r="85"/><ellipse cx="800" cy="220" rx="38" ry="85"/><ellipse cx="800" cy="220" rx="68" ry="85"/><ellipse cx="800" cy="220" rx="85" ry="29"/><ellipse cx="800" cy="220" rx="85" ry="57"/>
      <path d="m748 176 17-23 26 4 10 21-12 18 5 17-23 12-11 24-14-18-22-10 10-25zm76-3 17-14 24 12-4 17-17 5-5 16-21-8-8-14z" fill="#b27c3b" fillOpacity=".35"/>
    </g>
    <g className="hall-architecture" fill="url(#engrave)" stroke="#b58446" strokeWidth="2">
      <path d="M-15 540Q800 1045 1615 540v50Q800 1030-15 590z" fillOpacity=".2"/>
      <path d="M15 545Q800 950 1585 545M40 593Q800 984 1560 593" fill="none" strokeWidth="4"/>
      {Array.from({length: 13},(_,i)=>{const x=100+i*116;const y=610-Math.abs(6-i)*-16;return <g key={i} transform={`translate(${x} ${y})`}><path d="M-19 0h38l-5 11h-28zm-10 12h58v7h-58zm5 8h48v190h-48zm-10 190h68v14h-68zm-5-208 15-20h38l15 20"/><path d="M-13 32h26m-26 8h26m-26 8h26m-26 8h26" fill="none" strokeWidth=".65"/></g>})}
      <path d="M25 826h1550v70H25z" fill="#0a2118"/>
    </g>
    <g className="committee-banners" stroke="#d1a154" strokeWidth="1.3">
      {[350,520,1080,1250].map((x,i)=><g key={x} transform={`translate(${x} ${555+(i%2)*18})`}>
        <path d="M0 0v148l29-18 29 18V0" fill="#54241c"/><path d="M8 14h42v102H8z" fill="none" opacity=".58"/>
        <circle cx="29" cy="52" r="12" fill="none"/><path d="m29 41 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#d1a154" stroke="none"/>
        <path d="M12 7h34m-34 94h34" fill="none" opacity=".7"/>
      </g>)}
    </g>
    <g className="delegates" fill="#091711" stroke="#c08b49" strokeWidth="1.2">
      <path d="M240 845q80-92 160 0zm115 0q83-115 166 0zm179 0q85-142 170 0zm200 0q86-157 172 0zm215 0q80-142 160 0zm190 0q76-111 153 0z"/>
      {Array.from({length:36},(_,i)=>{const x=170+i*36;const y=796+(Math.abs(18-i)*1.4);return <g key={i} transform={`translate(${x} ${y})`}><circle cy="-13" r={i%4===0?4.8:4} fill="#c08b49"/><path d={i%3===0?'M-7-7h14l4 18H-11zM-5 10l-8 19m14-19 5 19':'M-6-7h12l5 19H-11zM-6 11l-5 18m16-18 5 18'}/>{i%6===0?<path d="M-5-3l-12-16m18 16 13-14" fill="none" strokeWidth="2"/>:<path d="M-7-2l-7 9m20-9 7 9" fill="none"/>}{i%7===0&&<path d="M9-22h18m-7-5 7 5-7 5" fill="none" stroke="#d2a257"/>}</g>})}
      <path d="M764 820h72v48h-72zm-26 48h124v16H738z" fill="#a67a3e"/><circle cx="800" cy="837" r="14" fill="#10251a"/>
    </g>
    <g className="hall-detail" fill="none" stroke="#d2a257" strokeWidth="1.4" opacity=".8">
      <path d="M145 655V510Q800 198 1455 510v145M175 655V529Q800 232 1425 529v126M203 633V542Q800 275 1397 542v91"/>
      <path d="M155 522q645-306 1290 0M178 545q622-274 1244 0" strokeDasharray="2 6"/>
      <path d="M800 310v71m-10-59h20m-16 14h12m-17 17h22m-30 18h38"/>
      <path d="M306 555v70m-12-55h24m-21 13h18m-21 13h24m-27 13h30M1294 555v70m-12-55h24m-21 13h18m-21 13h24m-27 13h30"/>
      <path d="m300 548 6-13 6 13m976 0 6-13 6 13M793 391l7-12 7 12"/>
    </g>
    <g className="velvet" fill="#54251d" stroke="#bc7b3c" strokeWidth="2" opacity=".96">
      <path d="M0 0h155Q95 62 194 202q-59-32-85-59Q68 111 57 95 36 66 0 45zm1600 0h-155q60 62-39 202 59-32 85-59 41-32 52-48 21-29 57-50z"/>
      <path d="M8 0q42 58 28 103M1592 0q-42 58-28 103" fill="none" stroke="#d49850" strokeWidth="1"/>
      <path d="M0 45q78 44 109 100m1491-100q-78 44-109 100" fill="none" stroke="#8f4b2e" strokeWidth="5"/>
    </g>
    <g className="statue" transform="translate(90 484)" stroke="#d3a35a" strokeWidth="2" fill="#a7783e" fillOpacity=".44">
      <path d="M25 300q20-36 17-80l-31-43 20-66 44-27 39 19 19 50-24 46 20 32-2 69zm23-224q-8-37 20-51 26-11 39 13 7 18-7 32l-26 9z"/>
      <path d="M34 145q-30-22-13-73 7-22 25-34-12 44 8 69m-25 42q46-4 80 28m-54 17q-25 38-47 64m67-175 11 55m-25 34 41 84m-69 44 43 10 34-12" fill="none"/>
      <path d="M3 302h153v22H3zm20-13h113v13H23zM70 29q12 15 31 0"/>
      <path d="M0 324h160" fill="none" strokeWidth="4"/>
      <path d="M82 72q48-60 73-96m-16 62 21-26m-33 43 27-7m-40-28 27 1" fill="none" stroke="#bb8b48"/>
    </g>
    <g className="side-armillary" transform="translate(1450 535)" fill="none" stroke="#d5a04f" strokeWidth="3">
      <circle r="88"/><ellipse rx="88" ry="25" transform="rotate(-34)"/><ellipse rx="88" ry="25" transform="rotate(42)"/><ellipse rx="37" ry="88"/><circle r="58" strokeWidth="1.2"/>
      <path d="M-115 105h230m-18 0-15 16h-164l-15-16m41 16v17h132v-17m-154 17h176v12h-176zm-30 12h236v12h-236z" fill="#684327"/>
      <path d="M0-108v216M-107 0h214" strokeWidth="1"/>
      <path d="m-105-6-10 6 10 6m210-12 10 6-10 6m-101-107 6-10 6 10m-12 202 6 10 6-10" fill="#d5a04f"/>
    </g>
    <g className="birds" fill="#d8b26f" opacity=".9"><path d="M1284 165q-16-24-39-17 17 3 24 21-13-13-29-8 20 7 30 28 3-15 14-24 11 9 15 24 11-19 30-25-18-7-31 7 8-18 26-24-24-7-40 18zm110 84q-12-19-30-13 13 3 18 16-10-9-22-5 16 6 23 21 3-12 11-19 9 7 12 19 9-15 24-20-14-6-24 5 6-14 20-19-19-5-32 15z"/></g>
  </svg>;
}

function Globe() {
  return <g className="globe">
    <circle cx="0" cy="0" r="157" fill="url(#globeFill)" stroke="#60412b" strokeWidth="2" />
    <circle cx="0" cy="0" r="145" fill="none" stroke="#79543a" strokeWidth=".7" />
    <ellipse rx="72" ry="157" fill="none" stroke="#79543a" strokeWidth=".8" />
    <ellipse rx="126" ry="157" fill="none" stroke="#79543a" strokeWidth=".55" />
    <ellipse rx="157" ry="53" fill="none" stroke="#79543a" strokeWidth=".65" />
    <ellipse rx="157" ry="105" fill="none" stroke="#79543a" strokeWidth=".55" />
    <path d="M-104-83l30-33 23 10 18 34-10 27 14 23-22 20-9 39-24-3-14-29-34-10-20-33 24-23zM35-100l20-21 42 8 15 29-12 21-27-7-18 24-18-18-22 8-11-21zM29 9l26 4 19 25-4 42-24 36-21-15-8-34-18-16 7-27z" fill="#9a8058" fillOpacity=".55" stroke="#745139" strokeWidth="1.2" />
    <path d="M-115-40l23 7m-36 13 31 10m39-90 10 30m-12 38 23 11m-47 65 19-10m137-121-14 17m38 13-32 4m-1 61-17-12m-32 82 19-17" stroke="#60412b" strokeWidth=".75" fill="none" />
    <circle cx="0" cy="0" r="166" fill="none" stroke="#a88a5b" strokeWidth="3" />
    <path d="M-174-12a175 175 0 0 1 348 0M-174 12a175 175 0 0 0 348 0" fill="none" stroke="#69462e" strokeWidth="4" />
    <path d="M-176 0h352M0-177v354" stroke="#a88a5b" strokeWidth="2" />
    <path d="M-194 0h388M0-194v388" stroke="#715036" strokeWidth=".8" />
    <path d="M-14-190 0-204l14 14M-14 190 0 204l14-14M-190-14l-14 14 14 14M190-14l14 14-14 14" fill="#a88a5b" stroke="#715036" strokeWidth="1" />
  </g>;
}

function Assembly() {
  return <g className="assembly" transform="translate(450 252)">
    <ellipse rx="260" ry="84" fill="#d4c4a4" stroke="#79543a" strokeWidth="1.3" />
    <ellipse rx="225" ry="62" fill="none" stroke="#987a52" strokeWidth=".8" />
    <ellipse rx="136" ry="33" fill="#a88a5b" fillOpacity=".35" stroke="#79543a" strokeWidth="1" />
    <ellipse rx="75" ry="18" fill="#74543b" fillOpacity=".18" stroke="#79543a" strokeWidth=".8" />
    {Array.from({ length: 24 }, (_, i) => { const a = (i / 24) * Math.PI * 2; const x = Math.cos(a) * 206; const y = Math.sin(a) * 53; return <g key={i} transform={`translate(${x} ${y})`}><circle cy="-8" r="2.5" fill="#342319"/><path d="M0-5v11m-4-4 4-4 4 4m-4 4-3 6m3-6 3 6" stroke="#342319" strokeWidth="1.3" fill="none"/></g>; })}
    <path d="M-274 72v-41m548 41v-41M-248 78h496M-224 70h448" stroke="#79543a" strokeWidth="2" />
    <path d="M-285 73h570l-14 13h-542z" fill="#a88a5b" stroke="#79543a" strokeWidth="1" />
  </g>;
}

function Artwork() {
  return <div className="art-stage" aria-label="An engraved atlas scene with an armillary globe above a diplomatic assembly">
    <div className="art-caption cap-left">FIG. I <span>THE COMMON WORLD</span></div>
    <svg className="atlas-art" viewBox="0 0 900 660" role="img" aria-labelledby="art-title art-desc">
      <title id="art-title">The world of ideas</title><desc id="art-desc">A hand drawn vintage atlas illustration of a globe, compass rose, architectural columns and an assembly of delegates.</desc>
      <defs><radialGradient id="globeFill"><stop stopColor="#e7dcc5"/><stop offset="1" stopColor="#cbb995"/></radialGradient><pattern id="hatch" width="7" height="7" patternTransform="rotate(35)" patternUnits="userSpaceOnUse"><path d="M0 0v7" stroke="#705139" strokeWidth=".5" opacity=".5"/></pattern></defs>
      <g className="map-lines" fill="none" stroke="#927754" strokeWidth=".75" opacity=".58"><path d="M16 314c80-144 159-161 244-109s147 46 233-51 188-106 354 10M18 369c83-85 136-87 229-40s149 17 238-41 214-61 394 14M70 95c34 66 33 126 0 184m707-204c-51 77-63 126-29 188M131 478c106-112 176-126 271-68s178 61 346-46M89 248c124 24 190 11 281-53M497 515c86-101 172-129 297-121"/><path d="M23 320h855M425 32v598M82 166l739 327M173 555 745 90" strokeDasharray="2 5"/></g>
      <g className="architecture" fill="url(#hatch)" stroke="#765237" strokeWidth="1.5"><path d="M49 490v-93l14-18 14 18v93m-33 0h38M87 490V365l18-23 18 23v125m-43 0h48M786 485v-97l14-17 15 17v97m-35 0h41M827 485V354l18-23 19 23v131m-45 0h50"/><path d="M42 379h47l-7-11H49zm39-25h49l-7-12H89zm689 25h47l-7-11h-34zm40-37h53l-8-12h-37z"/></g>
      <g className="compass" transform="translate(110 143)"><circle r="44" fill="#e5d9c1" fillOpacity=".65" stroke="#876342"/><circle r="34" fill="none" stroke="#876342" strokeWidth=".7"/><path d="M0-53 7-7 53 0 7 7 0 53-7 7-53 0-7-7z" fill="#9a7449" fillOpacity=".56" stroke="#715036"/><path d="m0-30 4 26 26 4-26 4-4 26-4-26-26-4 26-4z" fill="#342319"/><text y="-59" textAnchor="middle">N</text><text y="70" textAnchor="middle">S</text><text x="61" y="4">E</text><text x="-61" y="4">W</text></g>
      <g className="route" fill="none" stroke="#a45c3b" strokeWidth="1.5" strokeDasharray="4 6"><path d="M124 190C206 258 289 257 357 167M544 163c97-87 167-47 222 35M194 426c62-68 112-81 177-76m195 4c67-9 110 20 166 78"/></g>
      <g transform="translate(450 251)"><Globe/></g>
      <g className="ribbon" transform="translate(450 28)"><path d="M-133 10Q0-15 133 10l-12 25H-121z" fill="#7a4b33"/><path d="m-133 10-24-10 5 34 19-9m133-15q0 16 0 32" fill="#7a4b33"/><text textAnchor="middle" y="22">TERRA · DIALOGUS · PAX</text></g>
      <Assembly />
      <g className="letter" transform="translate(681 438) rotate(-12)"><path d="M0 0h121v91H0z" fill="#e8ddc8" stroke="#79543a"/><path d="M7 11h106M7 20h84M7 29h99M7 38h73M7 59h99M7 68h82" stroke="#a8906b" strokeWidth=".7"/><path d="M0 91l61-47 60 47" fill="#d7c6a5" stroke="#79543a"/><circle cx="61" cy="72" r="12" fill="#a45c3b"/><path d="M55 72h12m-6-6v12" stroke="#e9dfc9" strokeWidth=".7"/></g>
      <g className="quill" transform="translate(244 490) rotate(-28)"><path d="M0 0Q-27-43 13-104Q48-59 0 0M0 0 14-87" fill="#9b7a50" stroke="#654830"/><path d="m0 0-25 76" stroke="#342319" strokeWidth="2"/><path d="M-7-21 15-62M-14-34 12-69M-17-47 10-77" stroke="#715036" strokeWidth=".7"/></g>
      <g className="annotation"><path d="M643 190h82l20-20" fill="none" stroke="#79543a"/><text x="730" y="158">A SHARED HORIZON</text><path d="M201 395h-72l-22 18" fill="none" stroke="#79543a"/><text x="42" y="431">MANY VOICES, ONE TABLE</text></g>
      <circle cx="450" cy="251" r="213" fill="none" stroke="#a88a5b" strokeWidth=".7" strokeDasharray="1 8" />
    </svg>
    <div className="art-caption cap-right">COCHIN <span>9°58′ N · 76°16′ E</span></div>
  </div>;
}

function Hero() {
  return <main id="home" className="hero">
    <img className="hero-background" src="/mecmun-globe-background.jpg" alt="" aria-hidden="true" />
    <Navbar />
    <div className="hero-copy"><div className="hero-kicker"><span/> MODEL UNITED NATIONS SOCIETY · KOCHI, INDIA <span/></div><h1>MECMUN</h1><p className="tagline">A World <i>of</i> Ideas.</p><p className="motto">DIALOGUE <b>·</b> DIPLOMACY <b>·</b> PERSPECTIVE</p><div className="hero-ornament">— ◇ — ✧ — ◇ —</div><a className="cta" href="#the-society"><span>Explore the Society</span><span className="arrow">↗</span></a></div>
    <div className="hero-foot"><span>ESTD. MECMUN</span><i/><span className="foot-seal">✧</span><i/><span>KOCHI · INDIA</span></div>
  </main>;
}

function App() { return <div className="page-shell"><Hero/><section id="the-society" className="below-fold"><p>CONVENING IDEAS SINCE 2012</p><h2>Diplomacy begins<br/><i>with a question.</i></h2></section></div>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
