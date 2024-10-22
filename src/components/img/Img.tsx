import {Image} from 'react-native';

const Img = ({
  photo,
  img,
}: {
  photo: string | null | undefined;
  img: {width: number; height: number; borderRadius: number};
}) => {
  return photo ? (
    <Image source={{uri: photo}} style={img} />
  ) : (
    <Image source={require('../../assets/icons/avatar.png')} style={img} />
  );
};

export default Img;
