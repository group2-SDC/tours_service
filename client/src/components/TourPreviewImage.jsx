import React from 'react';
import styled from 'styled-components';
import QuickViewButton from './QuickViewButton.jsx';

const ImageContainer = styled.div`
  background-image: url(${props => props.photo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 279px;
  height: 186px;
`;

const ImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TourPreviewImage = (props) => (
  <ImageContainer
    photo={props.item.photo}
  >
    <ImageOverlay>
      {props.isHovered ?
        <QuickViewButton
          toggleModal={props.toggleModal}
          item={props.item}
        /> 
        : null}
    </ImageOverlay>
  </ImageContainer>
);

export default TourPreviewImage;