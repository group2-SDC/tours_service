import React from 'react';
import styled from 'styled-components';

const StyledTourPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  text-align: left;
  margin: 20px;
`;

const ImageContainer = styled.div`
  background-image: url(${props => props.photo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 261px;
  height: 173px;
`;

const ImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const QuickViewButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 10px;
  font-weight: 500;
  font-size: 12px;
  width: 100px;
`;

const TourName = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;

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

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
`

const PriceContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  justify-content: flex-end;
  text-align: left;
`
const Price = styled.span`
  display: flex;
  font-size: 12px;
`

const Bold = styled.span`
  font-weight: 500;
  margin-right: 5px;
`

const MoreInfoButton = styled.button`
  border: 1px solid black;
  border-radius: 18px;
  background-color: black;
  font-size: 14px;
  color: white;
  padding: 8px 16px;
  width: 100px;
  text-align: center;
`;

const TourPreview = (props) => {

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
    <StyledTourPreview onMouseOver={() => props.toggleHover(props.index)} onMouseLeave={props.toggleHover}>
      <ImageContainer photo={props.item.photo + `?random=${props.item.id}`}>
        <ImageOverlay>
          {props.isHovered ? <QuickViewButton>Quick View</QuickViewButton> : null}
        </ImageOverlay>
      </ImageContainer>
      <TourName>{props.item.name}</TourName>
      <ReviewsContainer>
        <BubblesContainer>
          {generateRatingBubbles(props.item.avg_rating).map((bubble, i) => <RatingsBubble key={i} status={bubble}/>)}
        </BubblesContainer>
        <ReviewsSpan>{props.item.reviews} reviews</ReviewsSpan>
      </ReviewsContainer>
      <InfoContainer>
        <PriceContainer>
          <Price>
            <Bold>${props.item.base_price}</Bold>
            <span>per adult</span>
          </Price>
        </PriceContainer>
        <MoreInfoButton>More info</MoreInfoButton>
      </InfoContainer>
    </StyledTourPreview>
  );
}

export default TourPreview;