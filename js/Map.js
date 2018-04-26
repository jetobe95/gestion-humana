var iconFeature = new ol.Feature(new ol.geom.Point([0, 0]));
iconFeature.set('style', createStyle('https://openlayers.org/en/v4.6.5/examples/data/icon.png', undefined));


  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: false
      }
    }),
    view: new ol.View({
      center: ol.proj.fromLonLat([-74.8495906,11.019263]),
      rotation: 0,
      zoom: 17
    })
  });

  function createStyle(src, img) {
    return new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        src: src,
        img: img,
        imgSize: img ? [img.width, img.height] : undefined
      }))
    });
}