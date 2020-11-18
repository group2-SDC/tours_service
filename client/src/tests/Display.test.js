import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { sampleTabs } from './sampleData.js';
import Display from '../components/Display.jsx';
import TourPreview from '../components/TourPreview.jsx';
import CategoryPreview from '../components/CategoryPreview.jsx';

describe('<Display /> if given a tour category tab', () => {
  const sampleRecommendedTab = sampleTabs[0];
  it('initially displays 4 tour previews if given a tour category tab', () => {
    const wrapper = shallow(
    <Display
      tab={sampleRecommendedTab}
      showAllItems={jest.fn()}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(TourPreview)).toHaveLength(4);
  });
  it('displays all tour previews if tab.showAll is true', () => {
    sampleRecommendedTab.showAll = true;
    const wrapper = shallow(
    <Display
      tab={sampleRecommendedTab}
      showAllItems={jest.fn()}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(TourPreview)).toHaveLength(sampleRecommendedTab.items.length);
  });
});

describe('<Display /> if given browse tab', () => {
  const sampleBrowseTab = sampleTabs[2];
  it('initially displays 6 category previews', () => {
    const wrapper = shallow(
    <Display
      tab={sampleBrowseTab}
      showAllItems={jest.fn()}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(CategoryPreview)).toHaveLength(6);
  });
  it('displays all category previews if tab.showAll is true', () => {
    sampleBrowseTab.showAll = true;
    const wrapper = shallow(
    <Display
      tab={sampleBrowseTab}
      showAllItems={jest.fn()}
      toggleModal={jest.fn()}
    />);
    expect(wrapper.find(CategoryPreview)).toHaveLength(sampleBrowseTab.items.length);
  });
});