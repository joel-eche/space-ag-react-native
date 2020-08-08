import React from 'react';

import { Header } from '../../components/common/Header';
import { View } from 'react-native';

import mainStyles from './../../styles/MainStyles';
import { Camera } from '../../components/Camera';

export const CameraScreen = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View style={mainStyles.container}>
      <Header
        title="Nueva muestra"
        hasCloseButton={true}
        handleGoBack={goBack}
      />
      <Camera handleGoBack={goBack} />
    </View>
  );
} 