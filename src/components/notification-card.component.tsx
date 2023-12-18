import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './icon.component';
import {ImageSource} from '../assets/images/type';
import {blueDotIcon, orangeDotIcon} from '../assets/icons';
import {textFamily} from './text-style';
import {default as themes} from '../core/themes/app-themes.json';
type Props = {
  source: ImageSource;
  title: string;
  description?: string;
};

const NotificationCard = ({source, title, description}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Icon source={source} />
        <Icon source={blueDotIcon} style={styles.statusIcon} />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationTitle}>{title}</Text>
        <Text numberOfLines={1}>{description}</Text>
        <Text>3 hour ago</Text>
      </View>
      <View>
        <Icon source={orangeDotIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 107,
    padding: 10,
    gap: 8,
    marginHorizontal: 30,
    backgroundColor: themes['secondary-1'],
    borderRadius: 20,
    marginBottom: 10,
  },
  informationContainer: {
    justifyContent: 'space-between',
    height: '100%',
    flex: 1,
  },
  informationTitle: {
    ...textFamily.PTSerifBold,
    fontWeight: '700',
    color: themes['primary-1'],
  },
  statusIcon: {position: 'absolute', bottom: 8, right: 8},
});
