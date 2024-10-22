import {Rating} from '../../types/types';

export const getStarsCount = (rating: Rating): number => {
  switch (rating) {
    case 'WORST':
      return 1;
    case 'BAD':
      return 2;
    case 'NORMAL':
      return 3;
    case 'GOOD':
      return 4;
    case 'BEST':
      return 5;
    default:
      return 0;
  }
};
