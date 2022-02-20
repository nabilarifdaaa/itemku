import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {ICBack, ICCart, ICShare} from 'assets';
import {colors} from 'utils';
import {Button, Gap} from '../../atoms';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Header = ({onPressBack, onPressShare, onPressCart, onScroll}) => {
  return (
    <View style={styles.container(onScroll)}>
      {onScroll && (
        <View style={styles.rowSpace}>
          <Button type="icon-only" icon="back" onPress={onPressBack} />
          <View style={styles.row}>
            <Button type="icon-only" icon="share" onPress={onPressShare} />
            <Gap width={10} />
            <Button type="icon-only" icon="cart" onPress={onPressCart} />
          </View>
        </View>
      )}
      {!onScroll && (
        <View style={styles.rowSpace}>
          <Button
            type="icon-only"
            icon="back-white"
            withBg
            onPress={onPressBack}
          />
          <View style={styles.row}>
            <Button
              type="icon-only"
              icon="share-white"
              withBg
              onPress={onPressShare}
            />
            <Gap width={10} />
            <Button
              type="icon-only"
              icon="cart-white"
              withBg
              onPress={onPressCart}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: onScroll => ({
    display: 'flex',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: widthPercentageToDP(5),
    position: 'absolute',
    ...Platform.select({
      ios: {
        zIndex: 1,
      },
      android: {
        elevation: 1,
      },
    }),
    backgroundColor: onScroll ? colors.white : 'transparent',
  }),
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
