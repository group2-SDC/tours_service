import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TabBar from '../components/TabBar.jsx';
import Tab from '../components/Tab.jsx';
import { sampleTabs } from './sampleData.js';

describe('<TabBar />', () => {
  it('renders the correct number of tabs', () => {
    const wrapper = shallow(<TabBar tabs={sampleTabs}/>);
    expect(wrapper.find(Tab)).toHaveLength(sampleTabs.length);
  });
});