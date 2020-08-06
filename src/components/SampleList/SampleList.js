import React from 'react';
import { useSelector } from 'react-redux';

import { ScrollView } from 'react-native';
import { List, Text } from 'react-native-paper';
import { formatDistance, subDays } from 'date-fns'

export const SampleList = () => {

  const samples = useSelector(state => state.samples);


  return samples.length > 0 ?
    (
      <>
        <List.Section>
          <ScrollView>
            {
              samples.map((sample) => (
                <List.Item
                  title={sample.name}
                  description={formatDistance(new Date(), new Date())}
                />
              ))
            }
          </ScrollView>
        </List.Section>
      </>
    )
    :
    <Text>No tienes ninguna muestra todavía</Text>
}