export const icons = {
  arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>', back:'<path d="M20 12H5m6-6-6 6 6 6"/>',
  home:'<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
  pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  heart:'<path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" transform="translate(0 -2)"/>',
  check:'<path d="m5 12 4 4L19 6"/>', bag:'<path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  bed:'<path d="M3 18v3M21 18v3M3 8v10h18V8M3 13h18M6 13V9h5v4M13 13V9h5v4M3 8V5h18v3"/>',
  book:'<path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16"/>',
  wallet:'<path d="M20 7H4a2 2 0 0 1 0-4h14v4M4 7v14h16V7"/><path d="M20 11h-6v6h6M16 14h1"/>',
  leaf:'<path d="M20 3C4 1 1 13 7 18c6 5 15-3 13-15ZM5 21 17 7"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
  list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h1M3 12h1M3 18h1"/>',
  truck:'<path d="M3 5h11v12H3ZM14 9h4l3 4v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  external:'<path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor"/><circle cx="15" cy="17" r="3" fill="currentColor"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  plane:'<path d="m3 10 7 2 2 9 3-6 5-9 1-3-3 1-9 5-6 1Z"/><path d="m10 12 11-9"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
  cup:'<path d="M4 5h12v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3ZM16 8h3a3 3 0 0 1 0 6h-3"/>',
  bath:'<path d="M3 12h18v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM5 12V5a3 3 0 0 1 6 0M5 21v2M19 21v2"/>',
  spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 3v4M18 5h4"/>'
};
export const icon=(name, cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.bag}</svg>`;

const art = {
  adapter:'<path d="M91 71V45M135 71V45" stroke="#9a9e95" stroke-width="8"/><path d="M70 79 141 66l31 29v62l-71 17-31-30Z" fill="#f9f7e9"/><path d="m101 106 71-11v62l-71 17Z" fill="#e5e1ce"/><path d="M70 79 101 106v68l-31-30Z" fill="#d2ccb7"/><path d="M124 121v14M151 116v14" stroke="#738071" stroke-width="5" stroke-linecap="round"/><circle cx="138" cy="148" r="4" fill="#738071"/>',
  bedding: '<path d="M40 114q2-13 20-13h116q18 0 21 13l10 40q1 12-14 13H55q-18 0-16-13Z" fill="#dc9b83"/><path d="m55 114 137-1 6 37H48Z" fill="#f1c3a8"/><path d="M54 127h142M52 138h146" stroke="#dc9b83" stroke-width="3"/><path d="M65 78q30-9 58-2l-2 32q-28 9-63-1Z" fill="#fff8e9" stroke="#e5d9c3" stroke-width="2"/><path d="M123 77q27-9 53 1l9 30q-29 9-64-1Z" fill="#fff9eb" stroke="#e5d9c3" stroke-width="2"/><path d="m62 82 4 20m60-19 1 20" stroke="#ece2d0" stroke-width="2"/><path d="M40 155q70 14 164 0v8q-66 13-157 1Z" fill="#ca876d"/>',
  pillow:'<path d="M45 86Q83 65 120 81q42-17 78 4l-7 68q-34 17-72 5-38 17-74-3Z" fill="#fffcf0" stroke="#d5d9c6" stroke-width="2"/><path d="M53 93q28-14 64-5M186 92l-4 54q-26 10-59 5M55 96l-2 53" fill="none" stroke="#e4e6d7" stroke-width="3"/>',
  towels:'<rect x="46" y="133" width="150" height="32" rx="14" fill="#9a9bb5"/><rect x="39" y="107" width="151" height="33" rx="14" fill="#b6b5ce"/><rect x="49" y="81" width="137" height="33" rx="14" fill="#d1cfe1"/><path d="M64 93h108M56 119h121M63 145h121" stroke="#eeedf3" stroke-width="2" stroke-dasharray="3 4"/><path d="M176 84v26M179 111v26M184 136v25" stroke="#8587a1" opacity=".6" stroke-width="2"/>',
  caddy:'<path d="M65 101h110l-9 66H74Z" fill="#789d9d"/><path d="M85 106V85a35 35 0 0 1 70 0v21" fill="none" stroke="#466b6e" stroke-width="7"/><rect x="83" y="65" width="25" height="43" rx="6" fill="#f7e4b5"/><rect x="88" y="56" width="15" height="12" rx="2" fill="#e3c789"/><rect x="124" y="70" width="25" height="40" rx="4" fill="#dba691"/><path d="M136 71V57h14" fill="none" stroke="#ad6e56" stroke-width="5"/><path d="M77 121h86M79 139h82M84 109l5 50M106 109l2 50M128 109l-2 50M150 109l-6 50" stroke="#a6c5c1" stroke-width="3"/>',
  sandals:'<g transform="rotate(-20 85 120)"><rect x="57" y="65" width="50" height="110" rx="25" fill="#c7836c"/><path d="m62 117 20-25 20 25" fill="none" stroke="#f5cbb5" stroke-width="9"/><path d="M82 93V76" stroke="#f5cbb5" stroke-width="6"/></g><g transform="rotate(17 160 120)"><rect x="133" y="65" width="50" height="110" rx="25" fill="#c7836c"/><path d="m138 117 20-25 20 25" fill="none" stroke="#f5cbb5" stroke-width="9"/><path d="M158 93V76" stroke="#f5cbb5" stroke-width="6"/></g>',
  basket:'<path d="M66 89h112l-14 80H80Z" fill="#bdac83"/><ellipse cx="122" cy="88" rx="56" ry="13" fill="#d8ccaa"/><ellipse cx="122" cy="87" rx="46" ry="8" fill="#8f8468"/><path d="M77 107h93M79 123h88M81 139h83M85 155h76M88 99l8 63M108 101l3 64M129 101l-2 64M150 99l-8 63" stroke="#dfd3b4" stroke-width="3"/><path d="M100 88Q92 55 120 64q8 2 12 22" fill="#e8e7dc"/><path d="M125 86q-3-33 23-21l7 22" fill="#75968c"/>',
  lamp:'<ellipse cx="126" cy="173" rx="42" ry="8" fill="#35594d"/><path d="M126 166v-61L99 78" fill="none" stroke="#35594d" stroke-width="8"/><circle cx="126" cy="106" r="7" fill="#213e33"/><path d="m69 60 31-14 30 33-57 27Z" fill="#547968"/><ellipse cx="100" cy="92" rx="31" ry="10" transform="rotate(-24 100 92)" fill="#f9e9b4"/><path d="M96 49 93 40" stroke="#35594d" stroke-width="6"/>',
  dishes:'<ellipse cx="96" cy="149" rx="58" ry="15" fill="#7e9fa4"/><ellipse cx="96" cy="144" rx="57" ry="14" fill="#cee0de"/><ellipse cx="96" cy="143" rx="40" ry="9" fill="none" stroke="#a3c0c1" stroke-width="2"/><path d="M60 104q0 42 41 42t41-42Z" fill="#f0e4cc"/><ellipse cx="101" cy="104" rx="41" ry="12" fill="#fff6e2"/><ellipse cx="101" cy="104" rx="31" ry="6" fill="#dacfba"/><path d="M154 100h37v47q-17 12-37 0Z" fill="#c88e72"/><path d="M191 108h8q15 16-8 25" fill="none" stroke="#c88e72" stroke-width="7"/><ellipse cx="172" cy="100" rx="19" ry="6" fill="#f1cfb6"/>',
  cutlery:'<g stroke="#8b8d82" stroke-width="8" stroke-linecap="round"><path d="M80 100v65M120 100v65M160 100v65"/></g><ellipse cx="80" cy="84" rx="13" ry="23" fill="#b7b9ae"/><path d="M108 62v32q12 14 24 0V62M120 60v32" stroke="#b7b9ae" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M158 60q25 3 10 58h-12Z" fill="#b7b9ae"/>',
  cleaning:'<path d="M79 91h40l12 75H68Z" fill="#8eac98"/><path d="M93 67h16v25H93Z" fill="#557a62"/><path d="M88 61h38v12h-38ZM116 72l12 20" fill="#e4dfd0" stroke="#e4dfd0" stroke-width="4"/><rect x="80" y="116" width="35" height="26" rx="2" fill="#e4edd7"/><path d="M143 123h44v38h-44Z" fill="#d1ad58"/><path d="M143 121h44v10h-44Z" fill="#6f9273"/><path d="m139 164 48 1 9 10-65-1Z" fill="#c9b9cc"/>',
  hangers:'<path d="M111 65a10 10 0 1 1 15 9v18l64 52q5 6-5 7H56q-10-1-5-7l75-52" fill="none" stroke="#b69a6d" stroke-width="7" stroke-linejoin="round"/><path d="m82 113 86 0" stroke="#b69a6d" stroke-width="4"/>',
  pan:'<ellipse cx="105" cy="134" rx="58" ry="28" fill="#34544a"/><path d="M47 121v13q60 54 116 0v-13Z" fill="#426558"/><ellipse cx="105" cy="121" rx="58" ry="24" fill="#779587"/><ellipse cx="105" cy="120" rx="48" ry="17" fill="#2c4239"/><path d="m156 115 48-17" stroke="#254235" stroke-width="12" stroke-linecap="round"/>',
  desk:'<path d="M56 110v65M181 110v65" stroke="#53786b" stroke-width="9"/><path d="M44 96h151v16H44Z" fill="#c4aa7a"/><path d="M52 112h64v31H52Z" fill="#65897a"/><path d="M78 124h14" stroke="#d6e4d8" stroke-width="3"/><rect x="129" y="68" width="33" height="27" rx="2" fill="#5a6f72"/><path d="M146 96v-7" stroke="#5a6f72" stroke-width="6"/>',
  chair:'<path d="M90 134v41M157 134v41M94 120V73M154 120V73" stroke="#866d53" stroke-width="7"/><rect x="86" y="60" width="75" height="52" rx="12" fill="#c79271"/><path d="M79 125q47-16 88 0v11H79Z" fill="#d5a789"/><path d="M90 159h66" stroke="#866d53" stroke-width="5"/>'
};
export const productArt=(type)=>`<svg viewBox="0 0 240 220" class="product-art" aria-hidden="true"><ellipse cx="122" cy="181" rx="74" ry="7" fill="#283e34" opacity=".06"/>${art[type]||art.bedding}</svg>`;
