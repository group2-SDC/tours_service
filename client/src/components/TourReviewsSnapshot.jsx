import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: center;
`

const BubblesContainer = styled.div`
  display: flex;
`

const RatingsBubble = styled.span`
  display: flex;
  border: 2px solid rgb(0, 170, 100);
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background: ${props => props.status === 'half' ? 'linear-gradient(to right, #00AA6C 50%, white 50%)' : props.status === 'full' ? '#00AA6C' : 'white'};
  margin-right: 2px;
`

const ReviewsSpan = styled.span`
  font-size: 16px;
  margin-left: 5px;
`

const TourReviewsSnapshot = (props) => {
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

  return (
    <ReviewsContainer>
      <BubblesContainer>
        {generateRatingBubbles(props.avgRating).map((bubble, i) =>
          <RatingsBubble
            key={i}
            status={bubble}
          />
        )}
      </BubblesContainer>
      <ReviewsSpan>{props.reviews} reviews</ReviewsSpan>
    </ReviewsContainer>
  )
}

export default TourReviewsSnapshot;