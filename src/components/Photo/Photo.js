import * as React from 'react';
import { Image, View } from 'react-native'

import photoStyles from '../../styles/PhotoStyles';
import { Card, Title } from 'react-native-paper';

export const Photo = ({ uri }) => (
  <Card style={photoStyles.container}>
    <Card.Content>
      <Title>Foto</Title>
      <Image
        source={{ uri: uri }}
        style={photoStyles.image}
      />
    </Card.Content>
  </Card>
);
