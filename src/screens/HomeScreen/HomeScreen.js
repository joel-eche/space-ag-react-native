import React from 'react';
import { View } from 'react-native';

import mainStyles from './../../styles/MainStyles';
import { Header } from '../../components/common/Header';
import { SampleList } from '../../components/SampleList';
import { MainButton } from '../../components/MainButton';

export const HomeScreen = ({ navigation }) => {

  const goToCamera = () => {
    console.log(navigation)
    navigation.navigate('Camera');
  }
  // [51.505, -0.09]
  let webViewLeaflet = null;
  return (
    <View style={mainStyles.container}>
      <Header
        title="Muestras"
      />
      {/* <SampleList />
      <MainButton handleClick={goToCamera} /> */}
    </View>
  );
} 