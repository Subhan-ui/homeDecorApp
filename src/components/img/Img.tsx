import {Image} from 'react-native';

import {imgType} from '../../types/types';

const Img = ({photo, img}: imgType) => {
  return photo ? (
    <Image source={{uri: photo}} style={img} />
  ) : (
    <Image source={require('../../assets/icons/avatar.png')} style={img} />
  );
};

export default Img;
