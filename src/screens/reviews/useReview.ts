import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hook';
import {getReviews} from '../../store/slices/review.slice';

export const useReview = (id: string) => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(states => states.review.reviews);
  useEffect(() => {
    (async () => {
      const res = await dispatch(getReviews(id));
    })();
  }, []);
  return {reviews};
};
