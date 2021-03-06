/**
 * jsx for Ai. Marat Shagiev: marat_js@bk.ru. 12.01.2015
 */

var artRect = makeRectToArtb();

/*function makeRectToArtb() {

 activeDocument.rulerOrigin = [0, activeDocument.height];

 var artbWidth  = activeDocument.width,
 artbHeight = activeDocument.height;

 return activeDocument.activeLayer.pathItems.rectangle(0, 0, artbWidth, artbHeight);
 }*/

function makeRectToAb() {
  var d        = activeDocument,
      abs      = d.artboards,
      abIndex  = abs.getActiveArtboardIndex(),
      ab       = d.artboards[abIndex],
      abRect   = ab.artboardRect,
      abW      = Math.abs(abRect[0] - abRect[2]),
      abH      = Math.abs(abRect[1] - abRect[3]),

      rectToAb = d.pathItems.rectangle(abRect[1], abRect[0], abW, abH);

  return rectToAb;
}
