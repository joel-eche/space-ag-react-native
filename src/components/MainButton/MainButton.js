import React from 'react';

import { Button } from 'react-native-paper';

export const MainButton = ({handleClick}) => {
  return (
    <Button icon="plus" mode="contained" onPress={handleClick}>
      NUEVA MUESTRA
    </Button>
  )
}