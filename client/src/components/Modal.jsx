import React from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader.jsx';
import ModalBody from './ModalBody.jsx';

const ModalContainer = styled.div`
  position: fixed;
  top: 5%;
  bottom: 5%;
  max-width: 800px;
  max-height: 700px;
  background-color: white;
  box-shadow: 0 0 3px black;
  z-index: 5;
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
  margin-bottom: 10px;
`

const Modal = (props) => (
  <ModalContainer>
    <Exit> <i className="fas fa-times" onClick={props.toggleModal}></i> </Exit>
    <ContentContainer>
      <Category>{props.item.categories_name}</Category>
      <Name>{props.item.name}</Name>
      <ModalHeader item={props.item}/>
      <ModalBody item={props.item}/>
    </ContentContainer>
  </ModalContainer>
)

export default Modal;