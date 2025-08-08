const map = L.map('map').setView([42.0, -93.0], 16);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri'
}).addTo(map);

let marker = L.marker([42.0, -93.0]).addTo(map).bindPopup("Moab").openPopup();
const gpsTrail = [];
const maxTrailLength = 50000;
let polyline = L.polyline([], { color: 'blue' }).addTo(map);

const gpsListener = new ROSLIB.Topic({
  ros: ros,
  name: '/gps/fix',
  messageType: 'sensor_msgs/msg/NavSatFix'
});

gpsListener.subscribe((msg) => {
  const lat = msg.latitude;
  const lon = msg.longitude;
  if (!isNaN(lat) && !isNaN(lon) && msg.status.status >= 0) {
    const latlng = [lat, lon];
    marker.setLatLng(latlng);
    map.setView(latlng);

    gpsTrail.push(latlng);
    if (gpsTrail.length > maxTrailLength) gpsTrail.shift();
    polyline.setLatLngs(gpsTrail);
  }
});
