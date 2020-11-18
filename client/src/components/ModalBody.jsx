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
  margin: 0;
  font-size: 14px;
  font-weight: 200;
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
    </DetailsContainer>
  </BodyContainer>

)

export default ModalBody;