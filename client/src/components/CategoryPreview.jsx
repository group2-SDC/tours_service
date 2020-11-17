import React from 'react';
import styled from 'styled-components';

const StyledCategoryPreview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  margin: 20px;
  max-width: 156px;
  height: 215px;
  flex: 1 1 0;
`;

const StyledName = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 5px;
`

const StyledText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-size: 12px;
  text-align: center;
`

const CategoryPreview = (props) => (
  <StyledCategoryPreview>
    <img src={props.item.photo + `?random=${props.item.id}`}width="156" height="103"/>
    <StyledName>{props.item.name}</StyledName>
    <StyledText>{props.item.description}</StyledText>
  </StyledCategoryPreview>
);

export default CategoryPreview;