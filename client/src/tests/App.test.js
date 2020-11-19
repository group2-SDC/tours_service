import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';
import { sampleTabs } from './sampleData.js';

describe('<App />', () => {
  const wrapper = shallow(<App listingId="1"/>, { disableLifecycleMethods: true });
  it('displays the section title', () => {
    expect(wrapper.find('h1').text()).toContain('Get the full experience and book a tour');
  });
  it('updates view to correct tab when updateView is invoked', () => {
    wrapper.instance().updateView(1)
    expect(wrapper.instance().state.view).toBe(1);
  });
  it('updates showAll property of current view tab when showAllItems is invoked', () => {
    wrapper.instance().setState({tabs: sampleTabs});
    wrapper.instance().showAllItems()
    expect(wrapper.instance().state.tabs[wrapper.instance().state.view].showAll).toBe(true);
  });

});