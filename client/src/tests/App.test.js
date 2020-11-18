import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';

describe('<App />', () => {
  it('displays the section title', () => {
    const wrapper = shallow(<App listingId="1"/>);
    expect(wrapper.find('h1').text()).toContain('Get the full experience and book a tour');
  });
});

// mock componentdidmount
// mock axios