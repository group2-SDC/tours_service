import React from 'react';
import Tab from './Tab.jsx';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
`;


const TabBar = (props) => (
  <TabsContainer>
      {props.tabs.map((tab, i) => <Tab key={i} tabNumber={i} name={tab.name} description={tab.description || null} updateView={props.updateView} selected={props.currentTab === i ? true : false}/>)}
  </TabsContainer>
)

export default TabBar;