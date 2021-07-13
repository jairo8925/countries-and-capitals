import './Map.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <MapContainer center={[0, 0]} zoom={2}>
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
        />
      </MapContainer>
    );
  }
}

export default Map;
