import React from 'react';
import styled from 'styled-components';
import { TourReviewsSnapshot } from './TourReviewsSnapshot.jsx'

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const ReviewsAndCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flext-start;
  justify-content: flex-start;
  padding-bottom: 25px;
`;

const CompanyContainer = styled.div`
  display: flex;
  font-size: 14px;
`

const Company = styled.span`
  display: flex;
  cursor: pointer;
  color: rgb(0, 102, 153);
  padding-left: 5px;
`

const PriceAndInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1 1 auto;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 12px;
`

const Price = styled.div`
  font-size: 24px;
  font-weight: 500;
`

const InfoButton = styled.button`
  background-color: rgb(242, 178, 3);
  border: 1px solid #F2B203;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500px;
  padding: 10px 22px;
  margin-left: 10px;
`

const ModalHeader = (props) => (
  <HeaderContainer>
    <ReviewsAndCompanyContainer>
      <TourReviewsSnapshot
        size="small"
        reviews={props.item.reviews}
        avgRating={props.item.avg_rating}
      />
      <CompanyContainer>
        By: <Company>{props.item.company}</Company>
      </CompanyContainer>
    </ReviewsAndCompanyContainer>
    <PriceAndInfoContainer>
      <PriceContainer>
        from
        <Price>${props.item.base_price}</Price>
      </PriceContainer>
      <InfoButton>
        More Info
      </InfoButton>
    </PriceAndInfoContainer>
   </HeaderContainer>
);


export default ModalHeader;