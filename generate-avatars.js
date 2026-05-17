#!/usr/bin/env node
'use strict';
const fs   = require('fs');
const path = require('path');

const PX = 4;   // SVG px per logical pixel
const W  = 16;  // logical width
const H  = 20;  // logical height

// Build SVG from a list of {x,y,w,h,c} logical-pixel rects
function buildSVG(bg, rects) {
  const lines = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W*PX}" height="${H*PX}" shape-rendering="crispEdges">`,
    `<rect width="${W*PX}" height="${H*PX}" fill="${bg}"/>`,
    ...rects.map(r =>
      `<rect x="${r.x*PX}" y="${r.y*PX}" width="${r.w*PX}" height="${r.h*PX}" fill="${r.c}"/>`
    ),
    '</svg>'
  ];
  return lines.join('\n');
}

const OUT = path.join(__dirname, 'assets', 'avatars');
fs.mkdirSync(OUT, { recursive: true });

function save(name, bg, rects) {
  fs.writeFileSync(path.join(OUT, name + '.svg'), buildSVG(bg, rects));
  console.log('saved', name + '.svg');
}

// ── JUDGE — dark judicial silhouette, obscured face, amber eye gleams ──
save('judge', '#06040a', [
  // dark robe fills top — hood covers head
  { x:2, y:0, w:12, h:4,  c:'#0f0c14' }, // robe top
  { x:1, y:2, w:14, h:18, c:'#131018' }, // robe body

  // barely-visible face peeking from hood shadow
  { x:4, y:3, w:8,  h:9,  c:'#1a1008' }, // face (very dark skin)
  { x:5, y:4, w:6,  h:7,  c:'#201510' }, // face center slightly lighter

  // amber eye gleams — the only light in the darkness
  { x:5, y:6, w:2, h:2, c:'#c89028' }, // left eye glow
  { x:9, y:6, w:2, h:2, c:'#e0b038' }, // right eye glow
  { x:6, y:7, w:1, h:1, c:'#f0c840' }, // left eye bright center
  {x:10, y:7, w:1, h:1, c:'#f0c840' }, // right eye bright center

  // robe collar — visible as slightly lighter frame
  { x:3, y:12, w:10, h:2, c:'#1e1a24' }, // collar edge
  { x:5, y:13, w:6,  h:1, c:'#0a0810' }, // collar opening shadow
]);

// ── PROSECUTOR — stern, angular, Soviet military bearing ───────────────
save('prosecutor', '#130506', [
  // slicked dark hair, flat-top
  { x:2, y:1, w:12, h:4, c:'#0c0a08' }, // hair
  { x:3, y:2, w:10, h:2, c:'#141210' }, // hair lighter centre

  // face — angular, high cheekbones
  { x:3, y:4, w:10, h:10, c:'#c88e68' }, // skin
  { x:3, y:4, w:1,  h:10, c:'#9a6840' }, // left cheek shadow
  {x:12, y:4, w:1,  h:10, c:'#9a6840' }, // right cheek shadow

  // brow ridge — heavy, dramatic
  { x:4, y:6, w:3, h:1, c:'#180c08' }, // left brow
  { x:9, y:6, w:3, h:1, c:'#180c08' }, // right brow

  // eyes — cold, narrowed
  { x:4, y:7, w:3, h:2, c:'#dde0d8' }, // left eye white
  { x:9, y:7, w:3, h:2, c:'#dde0d8' }, // right eye white
  { x:5, y:7, w:2, h:2, c:'#282840' }, // left iris
  {x:10, y:7, w:2, h:2, c:'#282840' }, // right iris
  { x:6, y:8, w:1, h:1, c:'#080810' }, // left pupil
  {x:11, y:8, w:1, h:1, c:'#080810' }, // right pupil

  // sharp nose
  { x:7, y:9,  w:2, h:2, c:'#a07050' }, // nose shadow

  // thin stern mouth
  { x:5, y:11, w:6, h:1, c:'#702820' }, // tight lips

  // jawline and chin
  { x:4, y:12, w:8, h:2, c:'#b07858' },
  { x:5, y:13, w:6, h:1, c:'#9a6840' },

  // neck
  { x:6, y:14, w:4, h:1, c:'#c88e68' },

  // dark Soviet uniform
  { x:1, y:14, w:14, h:6, c:'#16161e' }, // jacket
  { x:5, y:14, w:6,  h:6, c:'#1e1e28' }, // jacket front
  // red collar epaulette detail
  { x:3, y:14, w:2,  h:2, c:'#8b0000' }, // left epaulette
  {x:11, y:14, w:2,  h:2, c:'#8b0000' }, // right epaulette
  { x:6, y:14, w:4,  h:2, c:'#0c0c14' }, // collar shadow centre
]);

// ── ADAMOV — pale, frightened, haunted working man ────────────────────
save('adamov', '#080c18', [
  // mousy disheveled hair
  { x:2, y:1, w:12, h:3, c:'#2a2018' },
  { x:2, y:2, w:12, h:2, c:'#342a20' }, // lighter
  { x:3, y:3, w:2,  h:3, c:'#2a2018' }, // side lock left
  {x:11, y:3, w:2,  h:3, c:'#2a2018' }, // side lock right

  // very pale face
  { x:3, y:4, w:10, h:10, c:'#e4cba8' },
  { x:4, y:4, w:8,  h:9,  c:'#ecd8b8' }, // paler centre
  // gaunt hollow cheeks
  { x:3, y:6, w:2,  h:5,  c:'#c8a880' }, // left shadow
  {x:11, y:6, w:2,  h:5,  c:'#c8a880' }, // right shadow

  // wide frightened eyes — whites clearly visible
  { x:4, y:6, w:3, h:3, c:'#f4f0e8' }, // left eye white
  { x:9, y:6, w:3, h:3, c:'#f4f0e8' }, // right eye white
  { x:5, y:7, w:2, h:2, c:'#506070' }, // left iris
  {x:10, y:7, w:2, h:2, c:'#506070' }, // right iris
  { x:5, y:7, w:1, h:1, c:'#0a0c10' }, // left pupil
  {x:10, y:7, w:1, h:1, c:'#0a0c10' }, // right pupil
  // dark rings under eyes
  { x:4, y:9, w:3, h:1, c:'#b89878' },
  { x:9, y:9, w:3, h:1, c:'#b89878' },

  // thin brow
  { x:5, y:6, w:2, h:1, c:'#302018' },
  {x:10, y:6, w:2, h:1, c:'#302018' },

  // nose
  { x:7, y:10, w:2, h:1, c:'#c0a080' },

  // slightly open scared mouth
  { x:5, y:12, w:6, h:1, c:'#a07860' },
  { x:6, y:12, w:4, h:1, c:'#604030' }, // slightly open

  // chin
  { x:5, y:13, w:6, h:1, c:'#d8c0a0' },

  // neck
  { x:6, y:14, w:4, h:1, c:'#e0c8a8' },

  // simple blue-gray worker's shirt
  { x:1, y:14, w:14, h:6, c:'#1a2432' },
  { x:4, y:14, w:8,  h:6, c:'#222e40' },
  { x:6, y:14, w:4,  h:3, c:'#1a2432' }, // collar
]);

// ── LAWYER — tired middle-aged, disheveled suit, sallow skin ──────────
save('lawyer', '#040c04', [
  // dark reddish-brown hair, thinning/unkempt
  { x:2, y:1, w:12, h:3, c:'#3a1a0a' },
  { x:4, y:1, w:8,  h:2, c:'#4a2a18' }, // top lighter
  { x:2, y:3, w:2,  h:4, c:'#2a1208' }, // side left
  {x:12, y:3, w:2,  h:4, c:'#2a1208' }, // side right

  // sallow, tired face
  { x:3, y:4, w:10, h:10, c:'#c8a070' },
  { x:4, y:4, w:8,  h:9,  c:'#d4aa78' }, // centre
  // hollows / shadow under eyes
  { x:3, y:4, w:1, h:10, c:'#a07848' }, // left shadow
  {x:12, y:4, w:1, h:10, c:'#a07848' }, // right shadow

  // tired droopy brow
  { x:4, y:6, w:3, h:1, c:'#2a1a10' }, // left brow
  { x:9, y:6, w:3, h:1, c:'#2a1a10' }, // right brow

  // slightly drooping eyes
  { x:4, y:7, w:3, h:2, c:'#d8d4c8' }, // left eye
  { x:9, y:7, w:3, h:2, c:'#d8d4c8' }, // right eye
  { x:5, y:7, w:2, h:2, c:'#485840' }, // left iris (green-gray tired)
  {x:10, y:7, w:2, h:2, c:'#485840' }, // right iris
  { x:6, y:8, w:1, h:1, c:'#0a0a08' }, // left pupil
  {x:11, y:8, w:1, h:1, c:'#0a0a08' }, // right pupil

  // gray stubble dots
  { x:4, y:11, w:1, h:1, c:'#a09080' },
  { x:6, y:11, w:1, h:1, c:'#a09080' },
  { x:8, y:11, w:1, h:1, c:'#a09080' },
  {x:10, y:11, w:1, h:1, c:'#a09080' },
  {x:12, y:11, w:1, h:1, c:'#a09080' },

  // nose
  { x:7, y:9, w:2, h:2, c:'#a08050' },

  // downturned corners mouth
  { x:5, y:12, w:6, h:1, c:'#906050' },
  { x:5, y:12, w:1, h:1, c:'#704030' }, // corner down-left
  {x:10, y:12, w:1, h:1, c:'#704030' }, // corner down-right

  // chin with stubble
  { x:5, y:13, w:6, h:1, c:'#b89060' },
  { x:6, y:13, w:1, h:1, c:'#909080' }, // stubble
  { x:9, y:13, w:1, h:1, c:'#909080' },

  // neck
  { x:6, y:14, w:4, h:1, c:'#c8a070' },

  // rumpled dark suit
  { x:1, y:14, w:14, h:6, c:'#202c18' },
  { x:4, y:14, w:8,  h:6, c:'#283820' },
  // lapels
  { x:5, y:15, w:2, h:4, c:'#1a2414' }, // left lapel
  { x:9, y:15, w:2, h:4, c:'#1a2414' }, // right lapel
  // tie
  { x:7, y:14, w:2, h:5, c:'#484030' },
]);

// ── LYASHUK — elderly woman, headscarf, squinting suspicious eyes ──────
save('lyashuk', '#0c0804', [
  // gray-white headscarf fills top
  { x:1, y:1, w:14, h:4, c:'#b0aa98' }, // headscarf
  { x:2, y:1, w:12, h:2, c:'#c4bca8' }, // scarf lighter top
  { x:1, y:4, w:2,  h:7, c:'#a8a290' }, // scarf side left
  {x:13, y:4, w:2,  h:7, c:'#a8a290' }, // scarf side right
  // some gray hair escaping at sides
  { x:2, y:4, w:1, h:3, c:'#c0bca8' }, // hair wisp left
  {x:13, y:4, w:1, h:3, c:'#c0bca8' }, // hair wisp right

  // aged warm face, oval shape
  { x:3, y:4, w:10, h:10, c:'#c8a080' },
  { x:4, y:4, w:8,  h:9,  c:'#d4aa88' }, // centre warmer

  // rosy aged cheeks
  { x:3, y:7, w:2, h:3, c:'#c09080' }, // left cheek rosy
  {x:11, y:7, w:2, h:3, c:'#c09080' }, // right cheek rosy

  // wrinkle lines
  { x:4, y:5, w:1, h:1, c:'#b89070' }, // forehead wrinkle left
  {x:11, y:5, w:1, h:1, c:'#b89070' },
  { x:7, y:5, w:2, h:1, c:'#b89070' },

  // squinting eyes (narrower, suspicious)
  { x:4, y:7, w:3, h:1, c:'#d8d4c8' }, // left eye (squint = 1px tall)
  { x:9, y:7, w:3, h:1, c:'#d8d4c8' }, // right eye
  { x:5, y:7, w:2, h:1, c:'#5a6858' }, // left iris
  {x:10, y:7, w:2, h:1, c:'#5a6858' }, // right iris
  // heavy crow's feet
  { x:3, y:7, w:1, h:1, c:'#a08060' },
  { x:7, y:7, w:1, h:1, c:'#a08060' },
  { x:8, y:7, w:1, h:1, c:'#a08060' },
  {x:12, y:7, w:1, h:1, c:'#a08060' },

  // sparse gray brow
  { x:4, y:6, w:2, h:1, c:'#908880' }, // left brow (gray)
  { x:9, y:6, w:2, h:1, c:'#908880' }, // right brow

  // nose — bulbous with age
  { x:7, y:9, w:2, h:2, c:'#a88060' },
  { x:6, y:10, w:4, h:1, c:'#b89070' },

  // thin pressed lips
  { x:5, y:12, w:6, h:1, c:'#906060' },
  { x:6, y:12, w:4, h:1, c:'#7a5050' }, // centre darker

  // chin / jowls
  { x:4, y:13, w:8, h:1, c:'#c0a080' },
  { x:3, y:12, w:1, h:2, c:'#b89070' }, // left jowl
  {x:12, y:12, w:1, h:2, c:'#b89070' }, // right jowl

  // neck with scarf wrap
  { x:5, y:14, w:6, h:2, c:'#c8a080' }, // neck
  { x:3, y:14, w:2, h:2, c:'#b0aa98' }, // scarf wraps in
  {x:11, y:14, w:2, h:2, c:'#b0aa98' },

  // simple earth-tone babushka clothing
  { x:1, y:15, w:14, h:5, c:'#7a6850' },
  { x:3, y:15, w:10, h:5, c:'#887060' },
  // scarf ends draped over shoulders
  { x:1, y:15, w:2, h:4, c:'#b0aa98' },
  {x:13, y:15, w:2, h:4, c:'#b0aa98' },
]);

// ── KOVAL — broad stocky workman, square jaw, dark weathered ──────────
save('koval', '#06040e', [
  // very dark close-cropped hair, wide
  { x:2, y:1, w:12, h:3, c:'#100c10' },
  { x:2, y:2, w:12, h:2, c:'#181418' }, // slight lighter
  // hair comes down at sides
  { x:2, y:4, w:1, h:6, c:'#100c10' }, // left sideburn
  {x:13, y:4, w:1, h:6, c:'#100c10' }, // right sideburn

  // broad weathered face — square shape
  { x:2, y:4, w:12, h:10, c:'#c09060' }, // wide face
  { x:3, y:4, w:10, h:9,  c:'#c89868' }, // face centre
  // strong jaw shadow
  { x:2, y:10, w:2, h:4, c:'#9a7040' }, // jaw left
  {x:12, y:10, w:2, h:4, c:'#9a7040' }, // jaw right

  // heavy brow ridge — squarish
  { x:3, y:5, w:10, h:2, c:'#a07840' }, // brow shadow ridge
  { x:3, y:6, w:4,  h:1, c:'#180c10' }, // left brow thick
  { x:9, y:6, w:4,  h:1, c:'#180c10' }, // right brow thick

  // slightly narrow eyes under heavy brow
  { x:3, y:7, w:4, h:2, c:'#d8d4c8' }, // left eye white
  { x:9, y:7, w:4, h:2, c:'#d8d4c8' }, // right eye white
  { x:4, y:7, w:3, h:2, c:'#404848' }, // left iris (dark gray)
  {x:10, y:7, w:3, h:2, c:'#404848' }, // right iris
  { x:5, y:8, w:1, h:1, c:'#080808' }, // left pupil
  {x:11, y:8, w:1, h:1, c:'#080808' }, // right pupil

  // flat nose, wide
  { x:6, y:9,  w:4, h:2, c:'#a07840' },
  { x:5, y:10, w:6, h:1, c:'#b08850' }, // nose base wide

  // neutral / closed mouth
  { x:4, y:12, w:8, h:1, c:'#7a5038' },
  { x:5, y:12, w:6, h:1, c:'#604030' }, // lips darker

  // strong chin
  { x:4, y:13, w:8, h:1, c:'#c09060' },
  { x:6, y:13, w:4, h:1, c:'#d0a870' }, // chin highlight

  // thick neck
  { x:5, y:14, w:6, h:2, c:'#c09060' },
  { x:4, y:14, w:1, h:2, c:'#9a7040' }, // neck shadow left
  {x:11, y:14, w:1, h:2, c:'#9a7040' }, // neck shadow right

  // workman's jacket — broad shoulders fill full width
  { x:0, y:15, w:16, h:5, c:'#1a1428' }, // jacket
  { x:2, y:15, w:12, h:5, c:'#221e30' }, // jacket front
  { x:6, y:15, w:4,  h:5, c:'#181428' }, // jacket centre seam
  // collar
  { x:5, y:15, w:2, h:3, c:'#2a2038' }, // left collar
  { x:9, y:15, w:2, h:3, c:'#2a2038' }, // right collar
]);

console.log('All avatars generated in assets/avatars/');
