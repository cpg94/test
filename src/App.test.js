import React from 'react';
import toJSON from 'enzyme-to-json';
import App, { Link } from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('h1 text should read Hi!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Hi!');
  })

  it('Matches snapshot', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug())
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})

describe('<Link />', () => {
  
  it('Should access address prop', () => {
    const wrapper = shallow(<Link address={'https://www.chrisgolding.xyz'}/>);
    expect(wrapper.instance().props.address).toBe('https://www.chrisgolding.xyz');
  })

  it('a node should display href correctly', () => {
    const wrapper = shallow(<Link address={'https://www.chrisgolding.xyz'}/>);
    expect(wrapper.prop('href')).toBe('https://www.chrisgolding.xyz');
  })

  it('should render a tag if hide prop is false', () => {
    const wrapper = shallow(<Link address="google.com" hide={false} />)
    expect(wrapper.find('a').length).toBe(1);
    // wrapper.setProps({ hide: true });
    // expect(wrapper.find('a').length).toBe(0);
  })

  it('should not render a tag if hide prop is true', () => {
    const wrapper = shallow(<Link address="google.com" hide />)
    expect(wrapper.find('a').length).toBe(0);
  })
})