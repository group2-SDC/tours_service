import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { sampleTabs } from './sampleData.js';
import Modal from '../components/Modal.jsx';

describe('<Modal />', () => {
  const sampleTab = sampleTabs[0].items[0];
  const mockToggleModal = jest.fn();
  const wrapper = shallow(
    <Modal
      item={sampleTab}
      toggleModal={mockToggleModal}
    />)
  it('invokes toggleModal when X is clicked', () => {
    wrapper.find('i').simulate('click');
    expect(mockToggleModal).toHaveBeenCalled();
  });
});