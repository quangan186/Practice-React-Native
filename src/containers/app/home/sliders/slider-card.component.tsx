import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from '../../../../components/icon.component';
import {boldHeartIcon} from '../../../../assets/icons';
// import {default as themes} from '../../../../core/themes/app-themes.json';
import LinearGradient from 'react-native-linear-gradient';
import {textFamily} from '../../../../components/text-style';
import {ImageSource} from '../../../../assets/images/type';
type Props = {
  source: ImageSource;
  containerStyle?: any,
};

const SliderCard = ({source, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ImageBackground
        source={source.imageSource}
        style={styles.bgImage}
        resizeMode="cover">
        <LinearGradient
          colors={['transparent', 'rgba(31, 31, 57, 0.9)']}
          style={styles.bgGradient}>
          <View style={styles.informationContainer}>
            <Text style={styles.title}>Service Room</Text>
            <TouchableOpacity>
              <Icon source={boldHeartIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.priceInformationContainer}>
              <Text style={styles.information}>$12.50/1 hour</Text>
            </View>
            <View>
              <Text style={styles.information}>District 1</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  container: {},
  bgImage: {width: 263, height: 346, justifyContent: 'flex-end'},
  bgGradient: {
    marginHorizontal: 8,
    marginVertical: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: 346 / 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    ...textFamily.PTSerifBold,
    fontWeight: '700',
  },
  priceInformationContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  information: {
    fontSize: 12,
    color: 'white',
    ...textFamily.PTSerifBold,
    fontWeight: '700',
  },
});
