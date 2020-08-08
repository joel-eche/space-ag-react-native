import { StyleSheet } from 'react-native';

export const photoStyles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 400,
    resizeMode: 'contain'
  }
});

export default photoStyles;