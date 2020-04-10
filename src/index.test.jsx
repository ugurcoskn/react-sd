import React from 'react';
import { SequenceDiagram } from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
    it('renders LifePicker components', () => {
        const component = shallow(<SequenceDiagram />);
        expect(component).toMatchSnapshot();
    });
});
