import React from 'react';
import styled from 'styled-components';

const SeeMoreBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: flex-end;
  flex: 1 1 auto;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`

const SeeMoreSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3px;
`

const SeeMore = (props) => (
  <SeeMoreBar onClick={props.handleSeeMoreClick}>
    <SeeMoreSpan>See more</SeeMoreSpan>
    <i className="fas fa-angle-down"></i>
  </SeeMoreBar>
)

export default SeeMore;