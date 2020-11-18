import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { TourReviewsSnapshot, generateRatingBubbles } from '../components/TourReviewsSnapshot.jsx';

describe('<TourReviewSnapshot />', () => {
  it('creates appropriate array of full/half/empty bubbles based on passed in avg rating', () => {
    const bubbleArray = generateRatingBubbles(3.4);
    expect(bubbleArray).toEqual(['full', 'full', 'full', 'half', 'empty']);
  });
  it('displays 5 ratings bubbles', () => {
    const wrapper = shallow(
      <TourReviewsSnapshot
        size="normal"
        reviews={1000}
        avgRating={3.4}
      />);
    expect(wrapper.find('RatingsBubble')).toHaveLength(5);
  });
});