import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Tab from '../components/Tab.jsx';
import { sampleTabs } from './sampleData.js';

const sampleTab = sampleTabs[0];

describe('<TabBar />', () => {
  it('activates updateView function when clicked', () => {
    const mockUpdateView = jest.fn();
    const wrapper = shallow(
    <Tab
      key="0"
      tabNumber="0"
      name={sampleTab.name}
      description={sampleTab.description}
      updateView={mockUpdateView}
      selected={false}
    />);
    wrapper.find('StyledTab').simulate('click');
    expect(mockUpdateView).toHaveBeenCalled();
  });
});