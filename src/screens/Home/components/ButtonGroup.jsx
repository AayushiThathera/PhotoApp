// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
// import colors from '../../themes/colors';
// import sizes from '../../themes/sizes';
// import icons from '../../../assets/icons';
// import PhotoEditor from "@baronha/react-native-photo-editor";
// import images from '../../../assets/images';
// import { stickers } from '../../../assets/data';
// import { launchImageLibrary } from 'react-native-image-picker';
// const ButtonGroup = () => {
//   const handleOpenPhotoEditor = async () => {
//     const uriPath = images.adamCreator;
//     try {

//       const result = await PhotoEditor.open({
//         source: { uri: uriPath },
//         stickers

//       });
//       console.log('Photo Editor result:', uriPath);
//       console.log('Photo Editor result:', result);
//     } catch (error) {
//       console.error('Error opening photo editor:', error);
//       Alert.alert('Error', 'Failed to open photo editor');
//     }

//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('Image picker error: ', response.error);
//       } else {
//         let imageUri = response.uri || response.assets?.[0]?.uri;
//         setSelectedImage(imageUri);
//       }
//     });


//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <TouchableOpacity activeOpacity={0.9} style={styles.messageButton} onPress={handleOpenPhotoEditor}>
//           <Text style={styles.messageText}>not Sending Message</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, { marginLeft: sizes.spaceSm }]} >
//           <Image style={styles.icon} source={icons.tag} />
//         </TouchableOpacity>

//       </View>
//       <TouchableOpacity >
//         <Image style={{ height: 200, width: 200 }} source={images.adamCreator} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={launchImageLibrary}>
//           <Text>Open</Text>
//         </TouchableOpacity>
//     </>
//   );
// };

// export default ButtonGroup;

// const BUTTON_HEIGHT = 40;
// const ICON_SIZE = 24;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     paddingHorizontal: sizes.spaceMd,
//     paddingBottom: sizes.spaceLg,
//   },
//   messageButton: {
//     flex: 1,
//     backgroundColor: colors.white,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: BUTTON_HEIGHT,
//   },
//   messageText: {
//     paddingHorizontal: sizes.spaceUpperTiny,
//     fontWeight: 'bold',
//     fontFamily: 'Avenir',
//     fontSize: sizes.fontLg,
//     textAlign: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: colors.dark2,
//     height: BUTTON_HEIGHT,
//     width: BUTTON_HEIGHT,
//     // height:
//   },
//   icon: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//   },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import colors from '../../themes/colors';
import sizes from '../../themes/sizes';
import icons from '../../../assets/icons';
import PhotoEditor from "@baronha/react-native-photo-editor";
import images from '../../../assets/images';
import { stickers } from '../../../assets/data';
import { launchImageLibrary } from 'react-native-image-picker';

const ButtonGroup = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenPhotoEditor = async () => {
    const uriPath = images.adamCreator;
    try {
      const result = await PhotoEditor.open({
        source: { uri: uriPath },
        stickers
      });
      console.log('Photo Editor result:', result);
    } catch (error) {
      console.error('Error opening photo editor:', error);
      Alert.alert('Error', 'Failed to open photo editor');
    }
  };

  const handleOpenImageLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.error) {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} style={styles.messageButton} onPress={handleOpenPhotoEditor}>
          <Text style={styles.messageText}>not Sending Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginLeft: sizes.spaceSm }]} >
          <Image style={styles.icon} source={icons.tag} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleOpenImageLibrary}>
        <Text>Open</Text>
      </TouchableOpacity>
      {selectedImage && (
        <TouchableOpacity>
          <Image style={{ height: 200, width: 200 }} source={{ uri: selectedImage }} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonGroup;

const BUTTON_HEIGHT = 40;
const ICON_SIZE = 24;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.spaceMd,
    paddingBottom: sizes.spaceLg,
  },
  messageButton: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: BUTTON_HEIGHT,
  },
  messageText: {
    paddingHorizontal: sizes.spaceUpperTiny,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: sizes.fontLg,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark2,
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    // height:
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

