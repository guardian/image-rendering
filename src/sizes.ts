// ----- Imports ----- //

import { css, SerializedStyles } from '@emotion/core';
import { Breakpoint, from, breakpoints } from '@guardian/src-foundations/mq';


// ----- Types ----- //

type Size = {
    breakpoint: Breakpoint;
    size: string;
}

type Sizes = {
    mediaQueries: Size[];
    default: string;
}


// ----- Functions ----- //

const sizesAttribute = (sizes: Sizes): string => {
    if (sizes.mediaQueries.length === 0) {
        return sizes.default;
    }

    const queries = sizes.mediaQueries.map(
        query => `(min-width: ${breakpoints[query.breakpoint]}px) ${query.size}`,
    ).join(', ');

    return `${queries}, ${sizes.default}`;
}

const dimensions = (size: string, ratio: number): SerializedStyles => css`
    width: ${size};
    height: calc(${size} * ${ratio});
`;

const styles = (sizes: Sizes, width: number, height: number): SerializedStyles => {
    const ratio = height / width;
    
    return css`
        ${dimensions(sizes.default, ratio)}

        ${sizes.mediaQueries.map(query => css`
            ${from[query.breakpoint]} {
                ${dimensions(query.size, ratio)}
            }
        `)}
    `;
}


// ----- Exports ----- //

export {
    Sizes,
    styles,
    sizesAttribute,
};
