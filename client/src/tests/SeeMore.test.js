import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SeeMore from '../components/SeeMore.jsx';

describe('<SeeMore />', () => {
  it('activates handleSeeMoreClick function when clicked', () => {
    const mockHandleSeeMoreClick = jest.fn();
    const wrapper = shallow(
    <SeeMore
      handleSeeMoreClick={mockHandleSeeMoreClick}
    />);
    wrapper.find('SeeMoreBar').simulate('click');
    expect(mockHandleSeeMoreClick).toHaveBeenCalled();
  });
});