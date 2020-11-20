import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FavoriteIcon from '../components/FavoriteIcon.jsx';

describe('<FavoriteIcon />', () => {
  const wrapper = shallow(<FavoriteIcon/>);
  it('updates state.isHovered on mouseenter', () => {
    wrapper.instance().setState({isHovered: false});
    wrapper.find('HeartContainer').simulate('mouseenter');
    expect(wrapper.instance().state.isHovered).toBe(true);
  });
  it('updates state.isHovered on mouseleave', () => {
    wrapper.instance().setState({isHovered: true});
    wrapper.find('HeartContainer').simulate('mouseleave');
    expect(wrapper.instance().state.isHovered).toBe(false);
  });
});