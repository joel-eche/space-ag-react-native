import React from 'react';

import { Button } from 'react-native-paper';

import mainButtonStyles from './../../styles/MainButtonStyles'

export const MainButton = ({ handleClick }) => {
  return (
    <Button
      icon="plus"
      mode="contained"
      onPress={handleClick}
      style={mainButtonStyles.button}
    >
      NUEVA MUESTRA
    </Button>
  )
}