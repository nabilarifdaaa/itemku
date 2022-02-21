import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '../../atoms';

const ModalImage = ({visible, image, onClose}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.backButton}>
          <Button type="icon-only" icon="back-white" onPress={onClose} />
        </View>
        <View style={styles.containerModal}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.img}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalImage;

const styles = StyleSheet.create({
  img: {
    width: wp(100),
    height: hp(30),
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  backButton: {
    width: 30,
    height: 30,
    paddingTop: hp(5),
    paddingLeft: wp(5),
    top: 1,
    position: 'absolute',
    zIndex: 1,
  },
});
