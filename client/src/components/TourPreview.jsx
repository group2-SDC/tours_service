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

const TourPreview = (props) => (
  <StyledTourPreview>
    <img src={props.item.photo + `?random=${props.item.id}`} width="225" height="170"/>
    {props.item.name} <br />
    {props.item.base_price} per adult
  </StyledTourPreview>
);

export default TourPreview;