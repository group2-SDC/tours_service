import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  align-content: space-between;
  padding-top: 25px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 25px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 500;
`

const StyledDescription = styled.p`
  margin-top: 0;
  font-size: 14px;
  font-weight: 200;
`

const DetailRow = styled.div`
  display: flex;
  align-content: space-between;
  font-size: 14px;
  font-weight: 200;
  margin: 5px 0;
`

const DetailIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 170, 100);
  width: 25px;
  padding-right: 10px;
`

const ModalBody = (props) => (
  <BodyContainer>
    <ImagesContainer>
      <img src={props.item.photo + `?random=${props.item.id}`} />
    </ImagesContainer>
    <DetailsContainer>
      <span>Overview</span>
      <StyledDescription>
        {props.item.description}
      </StyledDescription>
      <DetailRow>
        <DetailIcon><i className="fas fa-check"></i></DetailIcon>
        Free Cancellation up to 24 hours in advance
      </DetailRow>
      <DetailRow>
        <DetailIcon><i className="fas fa-globe-americas"></i></DetailIcon>
        Languages Offered:
      </DetailRow>
      <DetailRow>
        <DetailIcon><i className="fas fa-mobile-alt"></i></DetailIcon>
        Electronic Voucher Accepted
      </DetailRow>
      <DetailRow>
        <DetailIcon><i className="fas fa-bolt"></i></DetailIcon>
        Instant confirmation
      </DetailRow>
      <DetailRow>
        <DetailIcon><i className="far fa-clock"></i></DetailIcon>
        Duration
      </DetailRow>
      <DetailRow>
        <DetailIcon><i className="fas fa-parking"></i></DetailIcon>
        Hotel Pickup
      </DetailRow>
    </DetailsContainer>
  </BodyContainer>

)

export default ModalBody;