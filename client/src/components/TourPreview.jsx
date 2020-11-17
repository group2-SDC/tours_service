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
  padding: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
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
    <ImageContainer photo={props.item.photo + `?random=${props.item.id}`}>
      <ImageOverlay>
        {props.isHovered ? <QuickViewButton>Quick View</QuickViewButton> : null}
      </ImageOverlay>
    </ImageContainer>
    <TourName>{props.item.name}</TourName><br />
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