import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from './header/header.component';
import {default as themes} from '../../../core/themes/app-themes.json';
import TabBar from '../../../components/tab-bar.component';
import {homeTabBarCategory} from '../../../core/libs/constants';
// import Slider from './sliders/slider.component';
// import {avatarImage} from '../../../assets/images';
type Props = {};

const Home = ({}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <StatusBar backgroundColor={themes['primary-1']} />
      <View style={styles.tabBarContainer}>
        <TabBar categories={homeTabBarCategory} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: themes['primary-1'],
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  tabBarContainer: {
    height: Dimensions.get('screen').height,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
  },
});
export default Home;
