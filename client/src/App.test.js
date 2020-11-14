import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toContain('Testing React!');
  });
});