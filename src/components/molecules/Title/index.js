import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap, Link, Button} from 'atoms';
import {ConfigToast} from '../ConfigToast';
import {ICWishlist, ICWishlistFill} from 'assets';
import {colors} from 'utils';
import Toast from 'react-native-toast-message';

const Title = ({
  product_name,
  game_name,
  type,
  hasWishlist,
  hasShowAll,
  title,
  textShowAll,
  hasClose,
  onPress,
  desc,
  descSize,
  descTruncate,
}) => {
  const [wishlist, setWishlist] = useState(false);
  const [maxLength, setMaxLength] = useState(100);

  const showToast = () => {
    setWishlist(!wishlist);
    if (!wishlist) {
      Toast.show({
        type: 'basic',
        position: 'bottom',
        text1: 'Produk ditambahkan ke Wishlist',
      });
    } else {
      Toast.show({
        type: 'basic',
        position: 'bottom',
        text1: 'Produk dihapus dari Wishlist',
      });
    }
  };

  if (type === 'product') {
    return (
      <View style={styles.row}>
        <View>
          <Text style={styles.productTxt}>{product_name}</Text>
          {game_name && (
            <>
              <Gap height={5} />
              <Text style={styles.gameTxt}>{game_name}</Text>
            </>
          )}
        </View>
        {hasWishlist && (
          <TouchableOpacity onPress={showToast}>
            {wishlist && (
              <>
                <ICWishlistFill />
                <Toast config={ConfigToast} />
              </>
            )}
            {!wishlist && <ICWishlist />}
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.titleSection}>{title}</Text>
        {hasShowAll && <Link text={textShowAll}/>}
        {hasClose && <Button type="icon-only" icon="close" onPress={onPress} />}
      </View>
      {desc && !descTruncate && (
      <Text style={styles.desc(descSize)}>{desc}</Text>
      )}
      {descTruncate && (
        <View>
          <Text style={styles.desc(descSize)}>
            {desc.length > maxLength
              ? desc.substring(0, maxLength - 3) + '...'
              : desc}
          </Text>
        </View>
      )}
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTxt: {
    color: colors.text.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  gameTxt: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  titleSection: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  desc: descSize => ({
    fontSize: descSize ? descSize : 12,
    color: colors.text.primary,
    marginTop: 10,
  }),
});
