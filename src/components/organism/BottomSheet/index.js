import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Title, Counter} from '../../molecules';
import {Price, Badge, Gap, Input, Button} from '../../atoms';

const BottomSheet = ({
  id,
  title,
  titleDesc,
  onPressClose,
  type,
  img,
  product_name,
  game_name,
  price,
  stock,
  labelInput,
  onPressButton,
}) => {
  if (type === 'add_cart') {
    return (
      <ActionSheet id={id}>
        <View style={styles.actions}>
          <Title title={title} hasClose onPress={onPressClose} />
          <Gap height={20} />
          <View style={styles.rowSpace}>
            <View style={styles.row}>
              <Image
                source={{
                  uri: img,
                }}
                style={styles.smallImg}
              />
              <Title
                type="product"
                product_name={product_name}
                game_name={game_name}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Price price={price} size={12} />
              <Gap height={hp(1)} />
              <Badge type="stock" text={stock} />
            </View>
          </View>
          <Gap height={15} />
          <Input label={labelInput} />
          <Gap height={15} />
          <View style={styles.right}>
            <Counter value={0} />
          </View>
          <Gap height={30} />
          <Button onPress={onPressButton} />
        </View>
      </ActionSheet>
    );
  }
  return (
    <View>
      <ActionSheet id={id}>
        <View style={styles.actions}>
          <Title
            title={title}
            onPress={onPressClose}
            hasClose
            desc={titleDesc}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  actions: {
    padding: wp(5),
    marginBottom: wp(5),
  },
  smallImg: {
    width: wp(10),
    height: hp(5),
    borderRadius: 5,
    marginRight: wp(2),
  },
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'flex-end',
  },
});
