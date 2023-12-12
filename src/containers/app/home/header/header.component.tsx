import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from '../../../../components/icon.component';
import {filterIcon, locationIcon, searchIcon} from '../../../../assets/icons';
import Input from '../../../../components/input.component';

type Props = {};

const Header = ({}: Props) => {
  return (
    <View>
      <View>
        <View>
          <Text>Hi Josh, you are at</Text>
          <View>
            <Icon source={locationIcon} />
            <Text>Ho Chi Minh City, Vietnam</Text>
          </View>
        </View>
        <Icon source={locationIcon} />
      </View>
      <View>
        <Input
          placeholder="Looking for room"
          rightIcon={<Icon source={searchIcon} />}
        />
        <TouchableOpacity>
          <Icon source={filterIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
