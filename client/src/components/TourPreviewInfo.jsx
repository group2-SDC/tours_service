import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
`;

const PriceContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  justify-content: flex-end;
  text-align: left;
`;

const Price = styled.span`
  display: flex;
  font-size: 12px;
`;

const Bold = styled.span`
  font-weight: 500;
  margin-right: 5px;
`;

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

const TourPreviewInfo = (props) => (
  <InfoContainer>
    <PriceContainer>
        <Price>
          <Bold>${props.price}</Bold>
          <span>per adult</span>
        </Price>
      </PriceContainer>
      <MoreInfoButton>More info</MoreInfoButton>
  </InfoContainer> 
)

export default TourPreviewInfo;