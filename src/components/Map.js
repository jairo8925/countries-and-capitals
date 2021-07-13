import './Map.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <MapContainer center={[0, 0]} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[Number(this.props.lat), Number(this.props.long)]}
          keepInView={true}
        />
      </MapContainer>
    );
  }
}

export default Map;
