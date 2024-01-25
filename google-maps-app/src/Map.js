import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
      position: 'relative',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749, // Set your initial latitude
          lng: -122.4194, // Set your initial longitude
        }}
      >
        <Marker
          position={{
            lat: 37.7749, // Set the marker's latitude
            lng: -122.4194, // Set the marker's longitude
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapContainer);
