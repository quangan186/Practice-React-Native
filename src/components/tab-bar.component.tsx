import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {default as themes} from '../core/themes/app-themes.json';
type Props = {
  categories: string[];
};

const TabBar = ({categories}: Props) => {
  const [active, setAcitve] = useState<string>(categories[0]!);
  return (
    <View style={styles.tabBar}>
      {categories.map(category => {
        return (
          <TouchableOpacity
            style={[
              styles.tabBarBtn,
              {
                backgroundColor:
                  active === category
                    ? themes['primary-2']
                    : themes['secondary-4'],
              },
            ]}
            onPress={() => setAcitve(category)}>
            <Text
              style={[
                styles.tabBarBtnText,
                {color: active === category ? 'white' : themes['secondary-3']},
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 15,
    backgroundColor: themes['secondary-4'],
    marginVertical: 40,
    flexDirection: 'row',
  },
  tabBarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 15,
  },
  tabBarBtnText: {
    fontSize: 14,
  },
});
