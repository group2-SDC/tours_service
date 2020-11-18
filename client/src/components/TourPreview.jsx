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
  cursor: pointer;
`;

const TourName = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;

const TourPreview = (props) => (
    <StyledTourPreview
      onMouseOver={() => props.toggleHover(props.item.id)}
      onMouseLeave={props.toggleHover}
    >
      <TourPreviewImage
        isHovered={props.isHovered}
        tour={props.item}
        toggleModal={props.toggleModal}
      />
      <TourName>{props.item.name}</TourName>
      <TourPreviewReviews
        reviews={props.item.reviews}
        avgRating={props.item.avg_rating}
      />
      <TourPreviewInfo
        price={props.item.base_price}
      />
    </StyledTourPreview>
);

export default TourPreview;