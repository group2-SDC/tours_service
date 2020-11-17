import React from 'react';
import styled from 'styled-components';
import TourPreviewImage from './TourPreviewImage.jsx';
import TourPreviewReviews from './TourPreviewReviews.jsx';
import TourPreviewInfo from './TourPreviewInfo.jsx';

const StyledTourPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  text-align: left;
  margin: 20px;
`;

const TourName = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;

const TourPreview = (props) => (
    <StyledTourPreview onMouseOver={() => props.toggleHover(props.index)} onMouseLeave={props.toggleHover}>
      <TourPreviewImage isHovered={props.isHovered} photo={props.item.photo} id={props.item.id}/>
      <TourName>{props.item.name}</TourName>
      <TourPreviewReviews reviews={props.item.reviews} avgRating={props.item.avg_rating}/>
      <TourPreviewInfo price={props.item.base_price}/>
    </StyledTourPreview>
);

export default TourPreview;