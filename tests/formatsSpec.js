describe('filesizeHuman function', function() {

  it('filesizeHuman converts properly in fr', function() {
    $.i18n.init({lng:'fr' });
    expect(filesizeHuman(1000, 0)).toEqual('1000 octets');
    expect(filesizeHuman(2000, 0)).toEqual('2.0 ko');
    expect(filesizeHuman(20000, 0)).toEqual('19.5 ko');
    expect(filesizeHuman(100000, 0)).toEqual('97.7 ko');
    expect(filesizeHuman(500000, 0)).toEqual('488.3 ko');
    expect(filesizeHuman(3000000, 0)).toEqual('2.9 Mo');
  });

  it('filesizeHuman converts properly in en', function() {
    $.i18n.init({lng:'en' });
    expect(filesizeHuman(1000, 0)).toEqual('1000 Bytes');
    expect(filesizeHuman(2000, 0)).toEqual('2.0 kB');
    expect(filesizeHuman(20000, 0)).toEqual('19.5 kB');
    expect(filesizeHuman(100000, 0)).toEqual('97.7 kB');
    expect(filesizeHuman(500000, 0)).toEqual('488.3 kB');
    expect(filesizeHuman(3000000, 0)).toEqual('2.9 MB');
  });

  it('filesizeHuman converts properly in it', function() {
    $.i18n.init({lng:'it' });
    expect(filesizeHuman(1000, 0)).toEqual('1000 Bytes');
    expect(filesizeHuman(2000, 0)).toEqual('2.0 kB');
    expect(filesizeHuman(20000, 0)).toEqual('19.5 kB');
    expect(filesizeHuman(100000, 0)).toEqual('97.7 kB');
    expect(filesizeHuman(500000, 0)).toEqual('488.3 kB');
    expect(filesizeHuman(3000000, 0)).toEqual('2.9 MB');
  });
});


describe('Formats', function() {
  var geojsonData = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[-0.580169,44.841228],[-0.42678,45.000941],[-0.426868,45.002157],[-0.602955,45.38455],[-0.603477,45.385947],[-0.589506,45.597002],[-0.589527,45.59825],[-0.667646,45.785438],[-0.667558,45.786107],[-0.558538,45.941167],[-0.558113,45.942187],[-0.510364,46.169241],[-0.509617,46.170379],[-0.299221,46.344348],[-0.299249,46.344476],[-0.407783,46.418584],[-0.409374,46.419001],[-0.664399,46.391373],[-0.665289,46.391522],[-1.073797,46.533238],[-1.074503,46.533726],[-1.13799,46.602358],[-1.138088,46.602591],[-1.166572,46.752703],[-1.16709,46.753447],[-1.560173,47.218559]]}}]};

  it('Converts GeoJSON to GPX properly', function() {
    var gpxData = '<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="togpx"><trk><name></name><desc></desc><trkseg><trkpt lat="44.841228" lon="-0.580169"/><trkpt lat="45.000941" lon="-0.42678"/><trkpt lat="45.002157" lon="-0.426868"/><trkpt lat="45.38455" lon="-0.602955"/><trkpt lat="45.385947" lon="-0.603477"/><trkpt lat="45.597002" lon="-0.589506"/><trkpt lat="45.59825" lon="-0.589527"/><trkpt lat="45.785438" lon="-0.667646"/><trkpt lat="45.786107" lon="-0.667558"/><trkpt lat="45.941167" lon="-0.558538"/><trkpt lat="45.942187" lon="-0.558113"/><trkpt lat="46.169241" lon="-0.510364"/><trkpt lat="46.170379" lon="-0.509617"/><trkpt lat="46.344348" lon="-0.299221"/><trkpt lat="46.344476" lon="-0.299249"/><trkpt lat="46.418584" lon="-0.407783"/><trkpt lat="46.419001" lon="-0.409374"/><trkpt lat="46.391373" lon="-0.664399"/><trkpt lat="46.391522" lon="-0.665289"/><trkpt lat="46.533238" lon="-1.073797"/><trkpt lat="46.533726" lon="-1.074503"/><trkpt lat="46.602358" lon="-1.13799"/><trkpt lat="46.602591" lon="-1.138088"/><trkpt lat="46.752703" lon="-1.166572"/><trkpt lat="46.753447" lon="-1.16709"/><trkpt lat="47.218559" lon="-1.560173"/></trkseg></trk></gpx>';
    var format = new GPXFormat();
    expect(format.exportData(geojsonData)).toEqual(gpxData);
  });

  it('Converts GeoJSON to Mediawiki properly', function() {
    var mediawikiData = '44.841228,-0.580169:45.000941,-0.42678:45.002157,-0.426868:45.38455,-0.602955:45.385947,-0.603477:45.597002,-0.589506:45.59825,-0.589527:45.785438,-0.667646:45.786107,-0.667558:45.941167,-0.558538:45.942187,-0.558113:46.169241,-0.510364:46.170379,-0.509617:46.344348,-0.299221:46.344476,-0.299249:46.418584,-0.407783:46.419001,-0.409374:46.391373,-0.664399:46.391522,-0.665289:46.533238,-1.073797:46.533726,-1.074503:46.602358,-1.13799:46.602591,-1.138088:46.752703,-1.166572:46.753447,-1.16709:47.218559,-1.560173';
    var format = new MediawikiFormat();
    expect(format.exportData(geojsonData)).toEqual(mediawikiData);
  });

  it('Converts GeoJSON to KML properly', function() {
    var kmlData = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><Placemark><ExtendedData></ExtendedData><LineString><coordinates>-0.580169,44.841228 -0.42678,45.000941 -0.426868,45.002157 -0.602955,45.38455 -0.603477,45.385947 -0.589506,45.597002 -0.589527,45.59825 -0.667646,45.785438 -0.667558,45.786107 -0.558538,45.941167 -0.558113,45.942187 -0.510364,46.169241 -0.509617,46.170379 -0.299221,46.344348 -0.299249,46.344476 -0.407783,46.418584 -0.409374,46.419001 -0.664399,46.391373 -0.665289,46.391522 -1.073797,46.533238 -1.074503,46.533726 -1.13799,46.602358 -1.138088,46.602591 -1.166572,46.752703 -1.16709,46.753447 -1.560173,47.218559</coordinates></LineString></Placemark></Document></kml>';
    var format = new KMLFormat();
    expect(format.exportData(geojsonData)).toEqual(kmlData);
  });

  it('Converts GeoJSON to GeoJSON properly', function() {
    var newData = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[-0.580169,44.841228],[-0.42678,45.000941],[-0.426868,45.002157],[-0.602955,45.38455],[-0.603477,45.385947],[-0.589506,45.597002],[-0.589527,45.59825],[-0.667646,45.785438],[-0.667558,45.786107],[-0.558538,45.941167],[-0.558113,45.942187],[-0.510364,46.169241],[-0.509617,46.170379],[-0.299221,46.344348],[-0.299249,46.344476],[-0.407783,46.418584],[-0.409374,46.419001],[-0.664399,46.391373],[-0.665289,46.391522],[-1.073797,46.533238],[-1.074503,46.533726],[-1.13799,46.602358],[-1.138088,46.602591],[-1.166572,46.752703],[-1.16709,46.753447],[-1.560173,47.218559]]}}]}';
    var format = new GeoJSONFormat();
    expect(format.exportData(geojsonData)).toEqual(newData);
  });

});
