import React from 'react';
import styled from 'styled-components';

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

const TourPreviewImage = (props) => (
  <ImageContainer
    photo={props.photo + `?random=${props.id}`}
  >
    <ImageOverlay>
      {props.isHovered ? <QuickViewButton><i className="far fa-eye"></i> Quick View</QuickViewButton> : null}
    </ImageOverlay>
  </ImageContainer>
);

export default TourPreviewImage;