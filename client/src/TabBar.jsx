import React from 'react';
import Tab from './Tab.jsx';

const TabBar = (props) => (
  <table>
    <tbody>
      <tr>
        {props.tabs.map((tab, i) => <Tab key={i} tabNumber={i} name={tab.name} description={tab.description || null} updateView={props.updateView} selected={props.currentTab === i ? true : false}/>)}
      </tr>
    </tbody>
  </table>
)

export default TabBar;