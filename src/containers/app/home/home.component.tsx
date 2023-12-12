import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from './header/header.component';

type Props = {};

const Home = ({}: Props) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
