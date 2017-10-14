/* global chai */
import test from '../../../src/assets/js/test';

const expect = chai.expect;

describe('Our second test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });

  it('is a function', () => {
    expect(test).to.be.a('function');
  });
});

describe('Testing fixture', () => {
  before(() => {
    fixture.setBase('specs/support/fixtures')
  });

  afterEach(() => {
    fixture.cleanup();
  });

  it('should return test', () => {
    fixture.load('example.html');
    const result = test();
    expect(result).to.equal('test');
  });

  it('should have correct li number elements', () => {
    fixture.load('example.html');
    const elements = document.querySelectorAll('li');
    expect(elements.length).to.equal(5);
  });

  it('should add active class', () => {
    fixture.load('example.html');
    test();
    const elements = document.querySelector('.active');
    const elem = '<li class="active">List1</li>';
    expect(elements.outerHTML).to.equal(elem);
  });
});


