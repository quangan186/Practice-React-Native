import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  children: any;
  scrollBarStyle?: any;
};

const ScrollHorizontalBar = ({children, scrollBarStyle}: Props) => {
  return (
    <ScrollView style={[styles.container, scrollBarStyle]} horizontal={true}>
      {children}
    </ScrollView>
  );
};

export default ScrollHorizontalBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    paddingBottom: 8,
  },
});
