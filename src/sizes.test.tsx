/** @jsx jsx */
// ----- Imports ----- //

import renderer from 'react-test-renderer';
import { breakpoints } from '@guardian/src-foundations/mq';
import { jsx } from '@emotion/core';
import { matchers } from 'jest-emotion';

import { sizesAttribute, Sizes, styles } from './sizes';


// ----- Setup ----- //

expect.extend(matchers);

const noQueries = { mediaQueries: [], default: '30vw' };
const sizes: Sizes = {
    mediaQueries: [
        { breakpoint: 'desktop', size: '20px' },
        { breakpoint: 'tablet', size: '20%' },
    ],
    default: '30vw',
};


// ----- Tests ----- //

describe('sizesAttribute', () => {    
    it('returns the default when there are no media queries', () => {
        expect(sizesAttribute(noQueries)).toBe(noQueries.default);
    });

    it('returns a list of media queries', () => {
        expect(sizesAttribute(sizes)).toMatchSnapshot();
    });
});

describe('styles', () => {
    it('returns the default dimensions when there are no media queries', () => {
        const component = renderer.create(
            <div css={styles(noQueries, 2000, 1500)} />,
        ).toJSON();

        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule('width', noQueries.default);
        expect(component).toHaveStyleRule(
            'height',
            `calc(${noQueries.default} * 0.75)`,
        );
    });

    it('returns dimensions for each media query', () => {
        const component = renderer.create(
            <div css={styles(sizes, 600, 300)} />
        ).toJSON();

        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule('width', '30vw');
        expect(component).toHaveStyleRule(
            'width',
            '20%',
            { media: `(min-width: ${breakpoints.tablet}px)` },
        );
        expect(component).toHaveStyleRule(
            'height',
            `calc(${sizes.mediaQueries[0].size} * 0.5)`,
            { media: `(min-width: ${breakpoints.desktop}px)` },
        );
    });
});
