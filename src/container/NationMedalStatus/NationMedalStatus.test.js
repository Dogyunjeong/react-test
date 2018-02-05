import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NationMedalStatus from './NationMedalStatus';
// Should Test each component. Not only container with given data.
import MedalChart from '../../components/MedalChart/MedalChart';
import SportList from '../../components/SportList/SportList';

configure({adapter: new Adapter()});

describe('container Test: NationMedalStatus', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NationMedalStatus />)
    })

    it('Check Rendered MedalChart',() => {
        expect(wrapper.find(MedalChart)).toHaveLength(1);
    })

    it('Check Rendered SportList',() => {
        expect(wrapper.find(SportList)).toHaveLength(1);
    })
})