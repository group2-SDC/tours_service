import React from 'react';
import styled from 'styled-components';

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
  box-sizing: border-box;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

const Exit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`

const TourModal = (props) => (
  <Modal>
    <ContentContainer>
      <Exit> <i className="fas fa-times" onClick={props.toggleModal}></i> </Exit>
    </ContentContainer>
  </Modal>
)

export default TourModal;