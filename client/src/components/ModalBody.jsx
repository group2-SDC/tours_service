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
`;

const Map = styled.div`
  display: flex;
  margin-top: 10px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 500;
`;

const StyledDescription = styled.p`
  margin-top: 0;
  font-size: 14px;
  font-weight: 200;
`;

const DetailRow = styled.div`
  display: flex;
  align-content: space-between;
  font-size: 14px;
  font-weight: 200;
  margin: 5px 0;
`;

const DetailIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 170, 100);
  width: 25px;
  padding-right: 10px;
`;

const ModalBody = (props) => (
  <BodyContainer>
    <ImagesContainer>
      <img src={props.item.photo} />
      <Map><img src={props.item.map} width="320" /></Map>
    </ImagesContainer>
    <DetailsContainer>
      <span>Overview</span>
      <StyledDescription>
        {props.item.description}
      </StyledDescription>
      {props.item.free_cancel ?
        <DetailRow>
          <DetailIcon><i className="fas fa-check"></i></DetailIcon>
          Free Cancellation up to 24 hours in advance
        </DetailRow>
      : null}
      <DetailRow>
        <DetailIcon><i className="fas fa-globe-americas"></i></DetailIcon>
        Languages Offered: {props.item.langs_offered.map((langObj, i) => i === props.item.langs_offered.length - 1 ? `${langObj.language}` : `${langObj.language}, `)}
      </DetailRow>
      {props.item.evoucher_accepted ? 
        <DetailRow>
          <DetailIcon><i className="fas fa-mobile-alt"></i></DetailIcon>
          Electronic Voucher Accepted
        </DetailRow>
      : null}
      {props.item.instant_confirm ?
        <DetailRow>
          <DetailIcon><i className="fas fa-bolt"></i></DetailIcon>
          Instant confirmation
        </DetailRow>
      : null}
      <DetailRow>
        <DetailIcon><i className="far fa-clock"></i></DetailIcon>
        {props.item.days ? (props.item.days > 1 ? `${props.item.days} days ` : `${props.item.days} day `) : null}
        {props.item.hours ? (props.item.hours > 1 ? `${props.item.hours} hours ` : `${props.item.hours} hour `) : null}
        {props.item.minutes ? (props.item.minutes > 1 ? `${props.item.minutes} minutes ` : `${props.item.minutes} minute `) : null}
      </DetailRow>
      {props.item.hotel_pickup ?
        <DetailRow>
          <DetailIcon><i className="fas fa-parking"></i></DetailIcon>
          Hotel Pickup
        </DetailRow>
      : null}
    </DetailsContainer>
  </BodyContainer>

)

export default ModalBody;