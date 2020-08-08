import React from 'react';
import { View } from 'react-native';

import mainStyles from './../../styles/MainStyles';
import { Header } from '../../components/common/Header';
import { SampleList } from '../../components/SampleList';
import { MainButton } from '../../components/MainButton';

export const HomeScreen = ({ navigation }) => {

  const goToCamera = () => {
    navigation.navigate('Camera');
  }

  const goToSampleDetail = (sample) => {
    navigation.navigate('SampleDetail', {
      sample: sample,
    });
  }


  return (
    <View style={mainStyles.container}>
      <Header
        title="Muestras"
      />
      <SampleList goToSampleDetail={goToSampleDetail} />
      <MainButton handleClick={goToCamera} />
    </View>
  );
}