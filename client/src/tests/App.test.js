import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';
import { sampleTabs } from './sampleData.js';
import Modal from '../components/Modal.jsx';

describe('<App />', () => {
  const wrapper = shallow(<App listingId="1"/>, { disableLifecycleMethods: true });
  it('displays the section title', () => {
    expect(wrapper.find('Heading').text()).toContain('Get the full experience and book a tour');
  });
  it('updates view to correct tab when updateView is invoked', () => {
    wrapper.instance().updateView(1)
    expect(wrapper.instance().state.view).toBe(1);
  });
  it('updates showAll property of current view tab when showAllItems is invoked', () => {
    wrapper.instance().setState({tabs: sampleTabs});
    wrapper.instance().showAllItems();
    expect(wrapper.instance().state.tabs[wrapper.instance().state.view].showAll).toBe(true);
  });
});

describe('<App /> and modal rendering', () => {
  const sampleTab = sampleTabs[0].items[0];
  const wrapper = shallow(<App listingId="1"/>, { disableLifecycleMethods: true });
  it('renders modal when toggleModal is invoked and state.showModal is initially false', () => {
    wrapper.instance().setState({showModal: false});
    wrapper.instance().toggleModal('e', sampleTab);
    expect(wrapper.instance().state.showModal).toBe(true);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
  it('updates currentItem to be the item passed into toggleModal when invoked, when state.showModal is initially false', () => {
    wrapper.instance().setState({showModal: false});
    wrapper.instance().toggleModal('e', sampleTab);
    expect(wrapper.instance().state.currentItem).toEqual(sampleTab);
  });
  it('does not render modal when toggleModal is invoked and state.showModal is initially true', () => {
    wrapper.instance().setState({showModal: true});
    wrapper.instance().toggleModal('e');
    expect(wrapper.instance().state.showModal).toBe(false);
    expect(wrapper.find(Modal)).toHaveLength(0);
  });
  it('updates currentItem to be null when toggleModal is invoked and state.showModal is initially true', () => {
    wrapper.instance().setState({showModal: true});
    wrapper.instance().toggleModal('e');
    expect(wrapper.instance().state.currentItem).toBeFalsy();
  });
  it('toggles modal when anywhere in the BodyContainer is clicked', () => {
    wrapper.instance().setState({showModal: true});
    wrapper.find('BodyContainer').simulate('click');
    expect(wrapper.instance().state.showModal).toBe(false);
  });
  it('renders overlay when modal is active', () => {
    wrapper.instance().setState({showModal: true});
    expect(wrapper.find('Overlay')).toHaveLength(1);
  });
});