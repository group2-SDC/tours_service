import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  margin-top: 150px;
  position: fixed;
  width: 50%;
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
  align-items: center;
`

const TourModal = (props) => (
  <Modal>
    This is a test
  </Modal>
)

export default TourModal;