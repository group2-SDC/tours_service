import React from 'react';
import styled from 'styled-components';
import TourPreviewImage from './TourPreviewImage.jsx';
import { TourReviewsSnapshot } from './TourReviewsSnapshot.jsx';
import TourPreviewInfo from './TourPreviewInfo.jsx';

const StyledTourPreview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  text-align: left;
  margin: 20px;
  cursor: pointer;
`;

const TourName = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;

const HeartContainer = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  padding: 15px;
  justify-content: center;
  align-items: center;

`

const Heart = styled.span`
  display: flex;
  z-index: 1;
`

const Circle = styled.span`
  display: flex;
  color: white;
  font-size: 25px;
  position: absolute;
`


const TourPreview = (props) => (
    <StyledTourPreview
      onMouseOver={() => props.toggleHover(props.item.id)}
      onMouseLeave={props.toggleHover}
    >
      <HeartContainer>
        <Circle>
          <i className="fas fa-circle"></i>
        </Circle>
        <Heart>
          <i className="far fa-heart"></i>
        </Heart>
      </HeartContainer>
      <TourPreviewImage
        isHovered={props.isHovered}
        item={props.item}
        toggleModal={props.toggleModal}
      />
      <TourName>{props.item.name}</TourName>
      <TourReviewsSnapshot 
        size="normal"
        reviews={props.item.reviews}
        avgRating={props.item.avg_rating}
      />
      <TourPreviewInfo
        price={props.item.base_price}
      />
    </StyledTourPreview>
);

export default TourPreview;