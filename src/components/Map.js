import "./Map.css";
import React, { useState } from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";

const Map = ({ info }) => {
  const population = Number(info.population).toLocaleString();
  const lat = Number(info.latlng[0]);
  const long = Number(info.latlng[1]);
  const region = info.subregion;
  const languages = info.languages
    .map((i) => {
      return i.name;
    })
    .join(", ");
  const currencies = info.currencies
    .map((i) => {
      return i.name;
    })
    .join(", ");

  const url = "https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png";

  const [map, setMap] = useState(null);
  if (map) {
    map.flyTo([lat, long], 3);
  }

  return (
    <MapContainer
      center={[lat, long]}
      zoom={3}
      whenCreated={setMap}
      doubleClickZoom={false}
      touchZoom={false}
      zoomSnap={false}
      zoomDelta={false}
      trackResize={false}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer
        url={url}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, long]} keepInView={true}>
        <Tooltip className='info' permanent>
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
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
