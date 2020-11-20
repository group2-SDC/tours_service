import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TourPreviewImage from '../components/TourPreviewImage.jsx';
import QuickViewButton from '../components/QuickViewButton.jsx';
import { sampleTabs } from './sampleData.js';


describe('<TourPreviewImage />', () => {
  it('displays quick view button when passed true for isHovered status', () => {
    const wrapper = shallow(
    <TourPreviewImage
      isHovered={true}
      item={sampleTabs[0].items[0]}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(QuickViewButton)).toHaveLength(1);
  });
  it('does not display quick view button when passed false for isHovered status', () => {
    const wrapper = shallow(
    <TourPreviewImage
      isHovered={false}
      item={sampleTabs[0].items[0]}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(QuickViewButton)).toHaveLength(0);
  });
});
