// ----- Imports ----- //

import React, { FC } from 'react';
import { SerializedStyles, css } from '@emotion/core';
import { Option, withDefault } from '@guardian/types/option';
import { Format, Design } from '@guardian/types/Format';
import { neutral } from '@guardian/src-foundations/palette';

import { Image } from '../image';
import { darkModeCss } from '../lib';
import { Sizes, sizesAttribute, styles as sizeStyles } from '../sizes';
import { Lightbox, getClassName, getCaption, getCredit } from '../lightbox';


// ----- Functions ----- //

const backgroundColour = (format: Format): string => {
    switch (format.design) {
        case Design.Media:
            return neutral[20];
        case Design.Comment:
            return neutral[86];
        default:
            return neutral[97];
    }
};


// ----- Component ----- //

type Props = {
    image: Image;
    sizes: Sizes;
    className: Option<SerializedStyles>;
    format: Format;
    supportsDarkMode: boolean;
    lightbox: Option<Lightbox>;
}

const styles = (format: Format, supportsDarkMode: boolean): SerializedStyles => css`
    background-color: ${backgroundColour(format)};
    color: ${neutral[60]};
    display: block;

    ${darkModeCss(supportsDarkMode)`
        background-color: ${neutral[20]};
    `}
`;

const Img: FC<Props> = ({
    image,
    sizes,
    className,
    format,
    supportsDarkMode,
    lightbox,
}) =>
    <picture>
        <source
            sizes={sizesAttribute(sizes)}
            srcSet={image.dpr2Srcset}
            media="(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
        />
        <source
            sizes={sizesAttribute(sizes)}
            srcSet={image.srcset}
        />
        <img
            src={image.src}
            alt={withDefault('')(image.alt)}
            className={getClassName(image.width, lightbox)}
            css={[
                sizeStyles(sizes, image.width, image.height),
                styles(format, supportsDarkMode),
                withDefault<SerializedStyles | undefined>(undefined)(className),
            ]}
            data-ratio={image.height / image.width}
            data-caption={getCaption(lightbox)}
            data-credit={getCredit(lightbox)}
        />
    </picture>


// ----- Exports ----- //

export default Img;
