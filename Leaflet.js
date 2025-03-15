// Menggunakan Leaflet untuk memuat GeoJSON
fetch('data/data-sample.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    }).addTo(map);
  });
