import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap, Link, Button} from '../../atoms';
import {ICWishlist, ICWishlistFill} from 'assets';
import {colors} from 'utils';

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
  console.log('desc title', desc)
  const [wishlist, setWishlist] = useState(false);
  const [maxLength, setMaxLength] = useState(100)
  if (type === 'product') {
    return (
      <View style={styles.row}>
        <View>
          <Text style={styles.productTxt}>{product_name}</Text>
          {game_name && (
            <View>
              <Gap height={5} />
              <Text style={styles.gameTxt}>{game_name}</Text>
            </View>
          )}
        </View>
        {hasWishlist && (
          <TouchableOpacity onPress={() => setWishlist(!wishlist)}>
            {wishlist && <ICWishlistFill />}
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
        {hasShowAll && <Link text={textShowAll} />}
        {hasClose && <Button type="icon-only" icon="close" onPress={onPress} />}
      </View>
      {(desc && !descTruncate) && <Text style={styles.desc(descSize)}>{desc}</Text>}
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
