import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from './app';

import mockery from 'mockery';
mockery.enable();
mockery.registerMock('../assets/images/slider01.jpg', 'slider01.jpg');

describe('React component', () => {
  it("contains spec with an expectation", function() {
    const wrapper = shallow(<App />);
    console.log(wrapper); // eslint-disable-line no-console
  });
});
