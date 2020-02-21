import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Create from './Create.js';

describe(`Create component`, () => {
	const props = {
		
		song: {
			song: "test",
			artist: "test",
			album: "test",
			venue: "test",
			show_date: "test"
		}
	};
	
	it('renders Create given props', () => {
		const wrapper = shallow(<Create {...props} />);
		
		expect(toJson(wrapper)).toMatchSnapshot();
	});
})