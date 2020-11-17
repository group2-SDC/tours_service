import React from 'react';
import styled from 'styled-components';

const StyledTourPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid lightgray;
  text-align: center;
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
`

const QuickViewButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 10px;
  font-weight: 500;
  font-size: 12px;
  width: 100px;
`

const TourPreview = (props) => (
  <StyledTourPreview>
    <ImageContainer photo={props.item.photo + `?random=${props.item.id}`}>
      <ImageOverlay>
        <QuickViewButton>Quick View</QuickViewButton>
      </ImageOverlay>
    </ImageContainer>
    {props.item.name} <br />
    {props.item.base_price} per adult
  </StyledTourPreview>
);

export default TourPreview;