import React from 'react';

import { RNCamera } from 'react-native-camera';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import cameraStyles from './../../styles/CameraStyles';
import { sampleAdded } from '../../slices/sampleSlice';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export const Camera = ({ handleGoBack }) => {
  const dispatch = useDispatch();

  const saveSample = async (camera) => {
    const picture = await camera.takePictureAsync({ quality: 0.5, base64: true });
    console.log(picture)
    if (picture.uri) {
      Geolocation.getCurrentPosition(
        position => {
          const newSample = {
            photo: picture.uri,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            date: JSON.stringify(new Date())
          }
          dispatch(sampleAdded(newSample));
          handleGoBack();
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