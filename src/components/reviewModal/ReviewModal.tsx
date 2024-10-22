import {Modal, Text, View} from 'react-native';

import DropdownComponent from '../dropdown/Dropdown';
import Input from '../molecules/input/Input';
import Button from '../molecules/button/Button';
import {reviewModalType} from '../../types/types';
import {styles} from './ReviewModalStyles';

const ReviewModal = ({
  isVisible,
  close,
  comment,
  rating,
  onChange,
  addReview,
}: reviewModalType) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent
      visible={isVisible}
      animationType="slide">
      <View style={styles.wholeWrap}>
        <View style={styles.wrap}>
          <Text style={styles.h1}>Add Your Review here</Text>
          <View style={styles.inputWrap}>
            <Input
              value={comment}
              onChange={text => onChange('comment', text)}
              title="Comment"
              placeholder="Enter your review here"
            />
            <DropdownComponent
              onChange={text => onChange('rating', text)}
              value={rating}
            />
          </View>
          <View>
            <Button text="Submit" marginTop={30} onPress={addReview} />
            <Button text="Back" marginTop={30} onPress={close} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReviewModal;
