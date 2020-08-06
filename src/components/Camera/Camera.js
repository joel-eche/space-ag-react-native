import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import cameraStyles from './../../styles/CameraStyles';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export const Camera = () => {

  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log(data)
    if (data.uri) return data.uri;
    return null;
  };

  const saveSample = async (camera) => {
    const picture = await camera.takePictureAsync({ quality: 0.5, base64: true });

    if (picture.uri) {
      Geolocation.getCurrentPosition(
        position => {
          const initialPosition = JSON.stringify(position);
          console.log('------------------1')
          console.log(picture);
          console.log(initialPosition);
        },
        error => {
          console.log('Error', JSON.stringify(error))
        },
        { enableHighAccuracy: true, timeout: 2000 },
      );

    }
  }

  return (
    <>
      <RNCamera
        style={cameraStyles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permiso para usar la cámara',
          message: 'Se necesita tu permiso para usar la cámara',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={cameraStyles.captureButtonContainer}>
              <TouchableOpacity
                style={cameraStyles.captureButton}
              >
                <TouchableOpacity
                  onPress={() => saveSample(camera)}
                  style={cameraStyles.circleCaptureButton}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </>
  );
}