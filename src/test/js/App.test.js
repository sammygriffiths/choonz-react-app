import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../components/core/App';
import SearchBar from '../../components/search-bar/SearchBar';
import Results from '../../components/results/Results';
import Menu from '../../components/core/Menu';
import menuIcon from '../../img/bars.svg'

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a menu icon as a link', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('a.App-menu-link img').length).toEqual(1);
    });

    it('renders a menu', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Menu />)).toEqual(true);
    });

    it('renders a search bar', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<SearchBar />)).toEqual(true);
    });

    it('renders a results container', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Results />)).toEqual(true);
    });
    
});
