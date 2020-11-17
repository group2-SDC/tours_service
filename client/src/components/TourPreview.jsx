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

const TourPreview = (props) => (
    <StyledTourPreview onMouseOver={() => props.toggleHover(props.index)} onMouseLeave={props.toggleHover}>
      <TourPreviewImage isHovered={props.isHovered} photo={props.item.photo} id={props.item.id}/>
      <TourName>{props.item.name}</TourName>
      <TourPreviewReviews reviews={props.item.reviews} avgRating={props.item.avg_rating}/>
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

export default TourPreview;