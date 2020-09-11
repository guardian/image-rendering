// ----- Imports ----- //

import React, { FC, ReactNode } from 'react';
import { remSpace } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import { Option, none } from '@guardian/types/option';
import { Format } from '@guardian/types/Format';
import { css, SerializedStyles } from '@emotion/core';

import { Image, Role } from '../image';
import type { Lightbox } from '../lightbox';
import Img from './img';
import FigCaption from './figCaption';
import { Sizes } from '../sizes';


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
}

const styles = css`
    margin: ${remSpace[4]} 0;
    width: ${width};

    ${from.phablet} {
        width: ${phabletWidth};
    }
`;

const thumbnailStyles = css`
    float: left;
    width: ${thumbnailWidth};
    margin: 0 ${remSpace[3]} 0 0;
`;

const getStyles = (role: Role): SerializedStyles => {
    switch (role) {
        case Role.Thumbnail:
            return thumbnailStyles;
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
}) =>
    <figure css={getStyles(image.role)}>
        <Img
            image={image}
            sizes={getSizes(image.role)}
            className={none}
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
