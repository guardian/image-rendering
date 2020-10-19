// ----- Imports ----- //

import React, { FC, ReactNode } from 'react';
import { remSpace } from '@guardian/src-foundations';
import { Breakpoint, from } from '@guardian/src-foundations/mq';
import { Option, none, withDefault, some } from '@guardian/types/option';
import { Format } from '@guardian/types/Format';
import { css, SerializedStyles } from '@emotion/core';

import { Image, Role } from '../image';
import type { Lightbox } from '../lightbox';
import Img from './img';
import FigCaption from './figCaption';
import { Sizes } from '../sizes';
import { darkModeCss } from 'lib';


// ----- Setup ----- //

const width = `calc(100vw - ${remSpace[4]})`;
const phabletWidth = '620px';
const thumbnailWidth = '8.75rem';


// ----- Functions ----- //

const getSizes = (role: Role): Sizes => {
    switch (role) {
        case Role.Thumbnail:
            return {
                mediaQueries: [],
                default: thumbnailWidth,
            };
        default:
            return {
                mediaQueries: [{ breakpoint: 'phablet', size: phabletWidth }],
                default: width,
            };
    }
}


// ----- Component ----- //

interface Props {
    image: Image;
    format: Format;
    supportsDarkMode: boolean;
    lightbox: Option<Lightbox>;
    caption: Option<ReactNode>;
    leftColumnBreakpoint: Option<Breakpoint>;
}

const styles = css`
    margin: ${remSpace[4]} 0;
    width: ${width};

    ${from.phablet} {
        width: ${phabletWidth};
    }
`;

const thumbnailStyles = (leftColumnBreakpoint: Breakpoint): SerializedStyles => css`
    float: left;
    width: ${thumbnailWidth};
    margin: 0 ${remSpace[3]} 0 0;

    ${from[leftColumnBreakpoint]} {
        position: absolute;
        transform: translateX(calc(-100% - ${remSpace[4]}));
    }
`;

const imgStyles = (role: Role, supportsDarkMode: boolean): Option<SerializedStyles> => {
    switch (role) {
        case Role.Thumbnail:
            return some(css`
                background-color: transparent;

                ${darkModeCss(supportsDarkMode)`
                    background-color: transparent;
                `}
            `);
        default:
            return none;
    }
}

const getStyles = (role: Role, leftColumnBreakpoint: Option<Breakpoint>): SerializedStyles => {
    switch (role) {
        case Role.Thumbnail:
            return thumbnailStyles(withDefault<Breakpoint>('leftCol')(leftColumnBreakpoint));
        default:
            return styles;
    }
}

const BodyImage: FC<Props> = ({
    image,
    format,
    supportsDarkMode,
    lightbox,
    caption,
    leftColumnBreakpoint,
}) =>
    <figure css={getStyles(image.role, leftColumnBreakpoint)}>
        <Img
            image={image}
            sizes={getSizes(image.role)}
            className={imgStyles(image.role, supportsDarkMode)}
            format={format}
            supportsDarkMode={supportsDarkMode}
            lightbox={lightbox}
        />
        <FigCaption format={format} supportsDarkMode={supportsDarkMode}>
            {caption}
        </FigCaption>
    </figure>


// ----- Exports ----- //

export default BodyImage;
