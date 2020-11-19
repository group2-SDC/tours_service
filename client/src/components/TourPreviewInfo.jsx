import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: auto 10px 10px 10px;
`;

const PriceContainer = styled.span`
  display: flex;
  align-items: baseline;
  text-align: left;
`;

const PerAdult = styled.span`
  display: flex;
  font-size: 12px;
`;

const Price = styled.span`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`

const MoreInfoButton = styled.button`
  display: flex;
  border: 1px solid black;
  border-radius: 18px;
  background-color: black;
  font-size: 14px;
  color: white;
  padding: 8px 16px;
  width: 100px;
  text-align: center;
`;

const TourPreviewInfo = (props) => (
  <InfoContainer>
    <PriceContainer>
      <Price>${props.price}</Price>
      <PerAdult>per adult</PerAdult>
    </PriceContainer>
      <ButtonContainer>
        <MoreInfoButton>More info</MoreInfoButton>
      </ButtonContainer>
  </InfoContainer> 
)

export default TourPreviewInfo;