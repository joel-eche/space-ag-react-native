import React from 'react';
import { useSelector } from 'react-redux';

import { ScrollView, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale'

import sampleListStyles from './../../styles/SampleListStyles';

export const SampleList = ({ goToSampleDetail }) => {

  const samples = useSelector(state => state.samples);

  return samples.length > 0 ?
    (
      <List.Section style={sampleListStyles.list}>
        <ScrollView>
          {
            samples.map((sample) => (
              <List.Item
                key={sample.id}
                title={sample.name}
                description={
                  formatDistance(
                    new Date(JSON.parse(sample.date)),
                    new Date(),
                    { locale: es }
                  )
                }
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => goToSampleDetail(sample)}
              />
            ))
          }
        </ScrollView>
      </List.Section>
    )
    :
    (
      <View style={sampleListStyles.list}>
        <Text>No tienes ninguna muestra todavía</Text>
      </View>
    )
}