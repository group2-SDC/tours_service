import React from 'react';
import { shallow, mount, render } from 'enzyme';
import QuickViewButton from '../components/QuickViewButton.jsx';
import { sampleTabs } from './sampleData.js';

describe('<QuickViewButton />', () => {
  const sampleTab = sampleTabs[0].items[0];
  const mockToggleModal = jest.fn();
  const wrapper = shallow(
    <QuickViewButton
      toggleModal={mockToggleModal}
      item={sampleTab}
    />);
  it('updates state.isHovered on mouseenter', () => {
    wrapper.instance().setState({isHovered: false});
    wrapper.find('StyledQuickViewButton').simulate('mouseenter');
    expect(wrapper.instance().state.isHovered).toBe(true);
  });
  it('updates state.isHovered on mouseleave', () => {
    wrapper.instance().setState({isHovered: true});
    wrapper.find('StyledQuickViewButton').simulate('mouseleave');
    expect(wrapper.instance().state.isHovered).toBe(false);
  });
  it('invokes toggleModal on click', () => {
    wrapper.find('StyledQuickViewButton').simulate('click');
    expect(mockToggleModal).toHaveBeenCalled();
  });
});