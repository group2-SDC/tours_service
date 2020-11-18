import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  display: flex;
  padding: ${props => props.size === 'small' ? '0' : '5px 10px'};
  font-size: ${props => props.size === 'small' ? '12px' : '16px'};
  align-items: center;
`

const BubblesContainer = styled.div`
  display: flex;
`

const RatingsBubble = styled.span`
  display: flex;
  border: 2px solid rgb(0, 170, 100);
  border-radius: 50%;
  height: ${props => props.size === 'small' ? '10px' : '12px'};
  width: ${props => props.size === 'small' ? '10px' : '12px'};
  background: ${props => props.status === 'half' ? 'linear-gradient(to right, #00AA6C 50%, white 50%)' : props.status === 'full' ? '#00AA6C' : 'white'};
  margin-right: 2px;
`
RatingsBubble.displayName = 'RatingsBubble';

const ReviewsSpan = styled.span`
  margin-left: 5px;
`

const generateRatingBubbles = (avgRating) => {
  const bubbles = {};

  bubbles.full = Math.round(avgRating);
  bubbles.half = Math.ceil(avgRating - bubbles.full);
  bubbles.empty = 5 - (bubbles.full + bubbles.half);

  const bubblesArray = [];

  for (let key in bubbles) {
    for (let i = 0; i < bubbles[key]; i++) {
      bubblesArray.push(key);
    }
  }
  return bubblesArray;
};

const TourReviewsSnapshot = (props) => {
  return (
    <ReviewsContainer size={props.size}>
      <BubblesContainer>
        {generateRatingBubbles(props.avgRating).map((bubble, i) =>
          <RatingsBubble
            size={props.size}
            key={i}
            status={bubble}
          />
        )}
      </BubblesContainer>
      <ReviewsSpan>{props.reviews} reviews</ReviewsSpan>
    </ReviewsContainer>
  )
}

export { TourReviewsSnapshot, generateRatingBubbles };