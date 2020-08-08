import React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = ({ title = "SPACE AG", subtitle, hasGoBackButton, hasCloseButton, handleGoBack }) => {

  return (
    <Appbar.Header>
      {hasGoBackButton ? <Appbar.BackAction onPress={handleGoBack} /> : null}
      {hasCloseButton ? <Appbar.BackAction onPress={handleGoBack} /> : null}
      <Appbar.Content title={title} subtitle={subtitle || null} />
    </Appbar.Header>
  );
}