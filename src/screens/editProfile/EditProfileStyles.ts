import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imgSection: {width: '100%', alignItems: 'center', marginTop: -4},
  img: {width: 148, height: 148, borderRadius: 114},
  nameSection: {
    height: 70,
    width: '100%',
    backgroundColor: '#FAF0E6',
    marginTop: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {fontSize: 20, fontWeight: '700', color: '#4B4544'},
  id: {fontSize: 13, fontWeight: '600', color: '#4B4544'},
  genderSectionWrap: {marginTop: 31},
  optionsWrap: {flexDirection: 'row', justifyContent: 'space-between'},
  options: {
    backgroundColor: '#FAF0E6',
    height: 49,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 19,
    alignItems: 'center',
    borderRadius: 15,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 55,
    borderColor: '#F4B5A4',
    borderWidth: 1,
  },
  optionText: {fontWeight: '500', fontSize: 15, color: '#363130'},
  iconWrap: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#f4b5a4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  
});
