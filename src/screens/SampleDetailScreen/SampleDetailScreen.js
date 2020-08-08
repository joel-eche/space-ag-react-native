import React from 'react';
import { View, ScrollView } from 'react-native';

import mainStyles from '../../styles/MainStyles';
import { Header } from '../../components/common/Header';
import { MapSample } from '../../components/MapSample';
import { Photo } from '../../components/Photo';

export const SampleDetailScreen = ({ route, navigation }) => {

  const { sample } = route.params;

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={mainStyles.darkContainer}>
      <Header
        title="Detail"
        hasCloseButton={true}
        handleGoBack={goBack}
      />
      <MapSample
        latitude={sample.latitude}
        longitude={sample.longitude}
      />
      <Photo uri={sample.photo} />
    </ScrollView>
  );
}