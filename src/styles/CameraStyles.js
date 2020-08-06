import { StyleSheet } from 'react-native';

export const cameraStyles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureButtonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#4F4F4F'
  },
  captureButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#D8D8D8',
  },
  circleCaptureButton: {
    width: 46,
    height: 46,
    borderRadius: 25,
    backgroundColor: '#D8D8D8',
    borderWidth: 1,
    borderColor: 'transparent',
  }
});

export default cameraStyles;