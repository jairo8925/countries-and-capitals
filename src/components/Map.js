import "./Map.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

class Map extends React.Component {
  render() {
    const corner1 = L.latLng(-90, -200);
    const corner2 = L.latLng(90, 200);
    const bounds = L.latLngBounds(corner1, corner2);
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

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
        maxBoundsViscosity={1.0}
        maxBounds={bounds}
      >
        <TileLayer
          url={url}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[Number(this.props.lat), Number(this.props.long)]}
          keepInView={true}
          autoPan={true}
        />
      </MapContainer>
    );
  }
}

export default Map;
