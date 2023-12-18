import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './icon.component';
import {backIcon, threeDotsIcon} from '../assets/icons';
import {default as themes} from '../core/themes/app-themes.json';
import {textFamily} from './text-style';
type HeaderScreenProps = {
  backBtn?: boolean;
  title: string;
  settingBtn?: boolean;
  children?: any;
};

const ScreenHeader = ({
  backBtn,
  title,
  settingBtn,
  children,
}: HeaderScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {backBtn && (
          <TouchableOpacity>
            <Icon source={backIcon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {settingBtn && (
          <TouchableOpacity>
            <Icon source={threeDotsIcon} />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 40,
    backgroundColor: themes['primary-1'],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  title: {
    color: 'white',
    ...textFamily.notoSansSemiBold,
    fontSize: 18,
  },
});
