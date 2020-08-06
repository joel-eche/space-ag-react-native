import React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = ({ title = "SPACE AG", subtitle, hasGoBackButton, hasCloseButton }) => {
  const _goBack = () => console.log('back');

  const _handleMore = () => console.log('more');

  return (
    <Appbar.Header>
      {hasGoBackButton ? <Appbar.BackAction onPress={_goBack} /> : null}
      <Appbar.Content title={title} subtitle={subtitle || null} />
    </Appbar.Header>
  );
}