import React from 'react';

import MapView, { Marker } from "react-native-maps";
import mapSampleStyles from '../../styles/MapSampleStyles';

export const MapSample = ({ latitude, longitude }) => {
  return (
    <MapView
      style={mapSampleStyles.map}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      }}
    >
      <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
    </MapView>
  );
}