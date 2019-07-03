/* Node Modules */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
/* Screens */
import ShopItems from './index';

beforeEach(() => {
    jest.resetModules();
});

afterEach(cleanup);

describe('<Homepage />', () => {

    test('Homepage with Video Game Content', () => {

        const {getByTestId} = render(<ShopItems />);
        const content = getByTestId('video-games-loaded');

        expect(content).toBeTruthy();
        expect(content.children.length).toBeGreaterThanOrEqual(1);
    });

    test('Homepage without Video Game Content', () => {

        jest.doMock('../../api/video.game/video.games.json', () => (
            []
        ));

        const Homepage = require('./index').default;
        const wrapper = render(<Homepage />);
        const content = wrapper.getByTestId('no-content');

        expect(content).toBeTruthy();

    });

    test('3 column list', () => {

    });

    test('2 column list', () => {

    });

});
