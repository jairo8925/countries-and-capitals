import './Map.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const Map = ({ info }) => {
  const population = Number(info.population).toLocaleString();
  const lat = Number(info.latlng[0]);
  const long = Number(info.latlng[1]);
  const region = info.subregion;
  const languages = info.languages
    .map((i) => {
      return i.name;
    })
    .join(', ');
  const currencies = info.currencies
    .map((i) => {
      return i.name;
    })
    .join(', ');

  const corner1 = L.latLng(-90, -200);
  const corner2 = L.latLng(90, 200);
  const bounds = L.latLngBounds(corner1, corner2);
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <MapContainer
      center={[5, 0]}
      zoom={2}
      doubleClickZoom={false}
      touchZoom={false}
      zoomSnap={false}
      zoomDelta={false}
      trackResize={false}
      scrollWheelZoom={false}
      maxBoundsViscosity={0.95}
      maxBounds={bounds}
    >
      <TileLayer
        url={url}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]} keepInView={true} autoPan={true}>
        <Popup className="info">
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Languages:</b> {languages}
          </p>
          <p>
            <b>Currencies:</b> {currencies}
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
