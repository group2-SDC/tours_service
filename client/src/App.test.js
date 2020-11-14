import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

// configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});