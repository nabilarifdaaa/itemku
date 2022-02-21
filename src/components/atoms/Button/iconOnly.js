import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {ICClose, ICBack, ICCart, ICShare} from 'assets';
import {colors} from 'utils';

const IconOnly = ({onPress, icon, withBg, countCart}) => {
  const BadgeCount = () => {
    return (
      <View style={styles.redCircle}>
        <Text style={styles.whiteTxt}>{countCart}</Text>
      </View>
    );
  };

  const Icon = () => {
    if (icon === 'close') {
      return <ICClose fill={colors.button.grey} style={styles.close} />;
    }
    if (icon === 'back-white') {
      return <ICBack fill={colors.button.white} />;
    }
    if (icon === 'share-white') {
      return <ICShare fill={colors.button.white} />;
    }
    if (icon === 'cart-white') {
      return (
        <View>
          <ICCart fill={colors.button.white} />
          {countCart > 0 && <BadgeCount />}
        </View>
      );
    }
    if (icon === 'back') {
      return <ICBack fill={colors.button.grey} />;
    }
    if (icon === 'share') {
      return <ICShare fill={colors.button.grey} />;
    }
    if (icon === 'cart') {
      return (
        <View>
          <ICCart fill={colors.button.grey} />
          {countCart > 0 && <BadgeCount />}
        </View>
      );
    }
    return <ICClose />;
  };

  return (
    <View>
      {!withBg && (
        <TouchableOpacity onPress={onPress}>
          <Icon />
        </TouchableOpacity>
      )}
      {withBg && (
        <TouchableOpacity onPress={onPress} style={styles.bg}>
          <Icon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default IconOnly;
const styles = StyleSheet.create({
  close: {
    marginTop: -5,
    marginBottom: 5,
  },
  bg: {
    backgroundColor: colors.button.bgIcon,
    borderRadius: 5,
    padding: 2,
  },
  redCircle: {
    position: 'absolute',
    backgroundColor: colors.badge.fillRed,
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    right: -9,
    top: -12,
  },
  whiteTxt: {
    color: colors.text.white,
    fontSize: 10,
    textAlign: 'center',
  },
});
