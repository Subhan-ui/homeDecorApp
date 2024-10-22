import {View} from 'react-native';
import React from 'react';
import SettingItem from '../../components/settingItem/SettingItem';
import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import useTypeNavigation from '../../navigation/useTypeNavigation';

const Settings = () => {
  const navigation = useTypeNavigation();
  return (
    <ComponentWrapper text="Settings" filter={false}>
      <View style={{marginTop: 45, gap: 17}}>
        <SettingItem text="Notification Settings">
          <EvilIcons name="bell" size={18} color="#4b4544" />
        </SettingItem>
        <SettingItem text="Password Settings">
          <Foundation name="key" size={18} color="#4b4544" />
        </SettingItem>
        <SettingItem text="Delete Account">
          <Octicons name="person" size={18} color="#4b4544" />
        </SettingItem>
        <SettingItem
          text="Add Address"
          onClick={() => navigation.navigate('Address')}>
          <Foundation name="address-book" size={18} color="#4b4544" />
        </SettingItem>
      </View>
    </ComponentWrapper>
  );
};

export default Settings;
