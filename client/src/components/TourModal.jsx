import React from 'react';
import styled from 'styled-components';
import TourReviewsSnapshot from './TourReviewsSnapshot.jsx'

const Modal = styled.div`
  position: fixed;
  top: 10%;
  width: 50vw;
  height: 70%;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 0 0 3px black;
  z-index: 1;
  align-self: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 48px;
  box-sizing: border-box;
`

const Exit = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
  padding: 15px;
`

const Category = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: gray;
`

const Name = styled.span`
  font-size: 24px;
  font-weight: 500;
`

const Company = styled.span`
  font-size: 14px;
`

const PriceAndInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1 1 auto;
`

const ReviewsAndCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flext-start;
  justify-content: flex-start;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: space-between;
`

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

const TourModal = (props) => (
  <Modal>
    <Exit> <i className="fas fa-times" onClick={props.toggleModal}></i> </Exit>
    <ContentContainer>
      <Category>{props.item.categories_name}</Category>
      <Name>{props.item.name}</Name>
      <HeaderContainer>
        <ReviewsAndCompanyContainer>
          <TourReviewsSnapshot
            reviews={props.item.reviews}
            avgRating={props.item.avg_rating}
          />
          <Company>By: {props.item.company}</Company>
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
    </ContentContainer>
  </Modal>
)

export default TourModal;