import {Dimensions, FlatList, Image, Pressable, Text, View} from 'react-native';

import {styles} from './BoardingStyles';
import {useRef, useState} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {
    id: 1,
    title: 'Comfortable Spaces',
    img: require('../../assets/icons/slideshow1.png'),
  },
  {
    id: 2,
    title: 'Modern Design',
    img: require('../../assets/icons/slideshow2.png'),
  },
  {
    id: 3,
    title: 'Styled Living',
    img: require('../../assets/icons/slideshow3.png'),
  },
  {
    id: 4,
    title: 'Relaxing Furniture',
    img: require('../../assets/icons/slideshow4.png'),
  },
];
const {width, height} = Dimensions.get('window');
const Boarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useTypeNavigation();

  const moveToLaunch = async () => {
    navigation.navigate('Launch');
    await AsyncStorage.setItem('boarding', 'true');
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      moveToLaunch();
    }
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={event =>
          setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width))
        }
        style={{height: 0.95 * height}}
        renderItem={({item}) => (
          <View>
            <View style={styles.imgWrap}>
              <Text style={styles.skipText} onPress={() => moveToLaunch()}>
                Skip
                <AntDesign
                  name="arrowright"
                  size={14}
                  color="black"
                  style={{paddingLeft: 18}}
                />
              </Text>
              <Image source={item.img} style={styles.img} />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.h1}>{item.title}</Text>
              <Text style={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.bottomWrap}>
        <View style={styles.navWrap}>
          <View style={currentIndex === 0 ? styles.navActive : styles.nav} />
          <View style={currentIndex === 1 ? styles.navActive : styles.nav} />
          <View style={currentIndex === 2 ? styles.navActive : styles.nav} />
          <View style={currentIndex === 3 ? styles.navActive : styles.nav} />
        </View>
        <Pressable style={styles.navButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === data.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Boarding;
