import './Map.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

class Map extends React.Component {
  render() {
    const corner1 = L.latLng(-90, -200);
    const corner2 = L.latLng(90, 200);
    const bounds = L.latLngBounds(corner1, corner2);

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
          url="http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, 
          under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. 
          Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under 
          <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
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
