import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={1} header="Test Header" cards={ [{'a': { title: 'Test card', content: 'test content' }}]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer.create(<List key={1} header="Test Header" cards={ [{'a': { title: 'Test card', content: 'test content' }}]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});