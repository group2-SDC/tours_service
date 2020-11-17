import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TabBar from '../components/TabBar.jsx';

const tabs = [{name: 'test', description: 'test'}, {name: 'test', description: 'test'}, {name: 'test', description: 'test'}];

describe('<TabBar />', () => {
  it('renders the correct number of tabs', () => {
    const wrapper = shallow(<TabBar tabs={tabs}/>);
    expect(wrapper.find('tr').children()).to.have.lengthOf(tabs.length);
  });
});

// failing because the Tab elements are not being rendered and therefore don't exist in this test