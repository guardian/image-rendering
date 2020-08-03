// ----- Imports ----- //

import React, { FC } from 'react';
import { SerializedStyles, css } from '@emotion/core';
import { Option, OptionKind, withDefault } from '@guardian/types/option';
import { Format, Design } from '@guardian/types/Format';
import { neutral } from '@guardian/src-foundations/palette';

import { Image, Role } from 'image';
import { darkModeCss } from 'lib';


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

const getLightboxClassName = (
    imageWidth: number,
    className: Option<string>,
): string | undefined => {
    if (imageWidth > 620 && className.kind === OptionKind.Some) {
        return className.value;
    }

    return undefined;
}


// ----- Component ----- //

interface Props {
    image: Image;
    sizes: string;
    className: Option<SerializedStyles>;
    format: Format;
    supportsDarkMode: boolean;
    lightboxClassName: Option<string>;
}

const styles = (
    image: Image,
    format: Format,
    supportsDarkMode: boolean,
): SerializedStyles => {
    switch (image.role) {
        case Role.Thumbnail:
            return css`color: ${neutral[60]};`;
        default:
            return css`
                background-color: ${backgroundColour(format)};
                color: ${neutral[60]};
                ${darkModeCss(supportsDarkMode)`background-color: ${neutral[20]};`}
                height: ${100 * image.height / image.width}%;
            `;
    }   
}

const Img: FC<Props> = ({ image, sizes, className, format, supportsDarkMode, lightboxClassName }) =>
    <picture>
        <source
            sizes={sizes}
            srcSet={image.dpr2Srcset}
            media="(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
        />
        <source
            sizes={sizes}
            srcSet={image.srcset}
        />
        <img
            src={image.src}
            alt={withDefault('')(image.alt)}
            className={getLightboxClassName(image.width, lightboxClassName)}
            css={[
                styles(image, format, supportsDarkMode),
                withDefault<SerializedStyles | undefined>(undefined)(className),
            ]}
            data-ratio={image.height / image.width}
            data-caption={withDefault<string | undefined>(undefined)(image.rawCaptionHtml)}
            data-credit={withDefault<string | undefined>(undefined)(image.credit)}
        />
    </picture>


// ----- Exports ----- //

export default Img;
