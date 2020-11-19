import React from 'react';
import styled from 'styled-components';
import TourPreviewImage from './TourPreviewImage.jsx';
import { TourReviewsSnapshot } from './TourReviewsSnapshot.jsx';
import TourPreviewInfo from './TourPreviewInfo.jsx';
import FavoriteIcon from './FavoriteIcon.jsx';

const StyledTourPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid lightgray;
  text-align: left;
  margin: 10px;
  cursor: pointer;
  height: 350px;
`;

const TourName = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding: 5px 10px 0 10px;
`;

const PopularBar = styled.span`
  display: flex;
  background-color: lightgray;
  border-radius: 6px;
  margin: 8px 10px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
`


const TourPreview = (props) => (
    <StyledTourPreview
      onMouseOver={() => props.toggleHoveredItem(props.item.id)}
      onMouseLeave={props.toggleHoveredItem}
    >
      <FavoriteIcon />
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
      {props.item.bookings > 6000 ? <PopularBar>Popular: Booked by {props.item.bookings.toString().slice(0, 1)},{props.item.bookings.toString().slice(1)} travelers!</PopularBar> : null}
    </StyledTourPreview>
);

export default TourPreview;