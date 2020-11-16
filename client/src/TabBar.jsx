import React from 'react';
import Tab from './Tab.jsx';

const TabBar = (props) => (
  <table>
    <tbody>
      <tr>
        {props.tabs.map((tab, i) => <Tab key={i} name={tab.name} description={tab.description || null} updateView={props.updateView}/>)}
      </tr>
    </tbody>
  </table>
)

export default TabBar;