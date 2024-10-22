import {Text, View} from 'react-native';
import React from 'react';
import ComponentWrapperView from '../../components/componentWrapperView/ComponentWrapperView';
import ProfileSection from '../../components/profileSection/ProfileSection';
import ItemsProfile from '../../components/itemsProfile/ItemsProfile';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './ProfileStyles';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import Img from '../../components/img/Img';
import {useProfile} from './useProfile';
import LogoutModal from '../../components/logoutModal/LogoutModal';

const Profile = () => {
  const navigation = useTypeNavigation();
  const {states, isVisible, setIsVisible} = useProfile();
  return (
    <ComponentWrapperView text="My Profile" filter={false}>
      <>
        <LogoutModal isVisible={isVisible} close={() => setIsVisible(false)} />
        <View style={styles.wrapImg}>
          <Img photo={states?.profilePicture} img={styles.img} />
          <Text style={styles.name}>{states?.name}</Text>
          <Text style={styles.id}>ID: {states?.id}</Text>
        </View>
        <ProfileSection />
        <View style={{gap: 16}}>
          <ItemsProfile text="Privacy Policy">
            <Foundation name="key" size={20} />
          </ItemsProfile>
          <ItemsProfile text="Payment Methods">
            <Ionicons name="card-outline" size={20} />
          </ItemsProfile>
          <ItemsProfile text="Notifications">
            <Fontisto name="bell" size={20} />
          </ItemsProfile>
          <ItemsProfile
            text="Settings"
            onPress={() => navigation.navigate('Settings')}>
            <EvilIcons name="gear" size={20} />
          </ItemsProfile>
          <ItemsProfile text="Help">
            <MaterialIcons name="support-agent" size={20} />
          </ItemsProfile>
          <ItemsProfile text="Logout" onPress={() => setIsVisible(true)}>
            <MaterialIcons name="logout" size={20} />
          </ItemsProfile>
        </View>
      </>
    </ComponentWrapperView>
  );
};

export default Profile;
