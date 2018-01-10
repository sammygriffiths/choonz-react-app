import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/core/App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
});
