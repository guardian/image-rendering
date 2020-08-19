/** @jsx jsx */
// ----- Imports ----- //

import { FC } from 'react';
import { SerializedStyles, css, jsx } from '@emotion/core';
import { Option, OptionKind, withDefault } from '@guardian/types/option';
import { Format, Design } from '@guardian/types/Format';
import { neutral } from '@guardian/src-foundations/palette';

import { Image, Role } from 'image';
import { darkModeCss } from 'lib';
import { Sizes, sizesAttribute, styles as sizeStyles } from 'sizes';


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
    sizes: Sizes;
    className: Option<SerializedStyles>;
    format: Format;
    supportsDarkMode: boolean;
    lightboxClassName: Option<string>;
}

const styles = (format: Format, supportsDarkMode: boolean): SerializedStyles => css`
    background-color: ${backgroundColour(format)};
    color: ${neutral[60]};
    display: block;

    ${darkModeCss(supportsDarkMode)`
        background-color: ${neutral[20]};
    `}
`;

const thumbnailStyles = css`
    color: ${neutral[60]};
`;

const getStyles = (
    image: Image,
    format: Format,
    supportsDarkMode: boolean,
    sizes: Sizes,
): SerializedStyles => {
    const dimensions = sizeStyles(sizes, image.width, image.height);

    switch (image.role) {
        case Role.Thumbnail:
            return css(dimensions, thumbnailStyles);
        default:
            return css(dimensions, styles(format, supportsDarkMode));
    }   
}

const Img: FC<Props> = ({ image, sizes, className, format, supportsDarkMode, lightboxClassName }) =>
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
            className={getLightboxClassName(image.width, lightboxClassName)}
            css={[
                getStyles(image, format, supportsDarkMode, sizes),
                withDefault<SerializedStyles | undefined>(undefined)(className),
            ]}
            data-ratio={image.height / image.width}
            data-caption={withDefault<string | undefined>(undefined)(image.rawCaptionHtml)}
            data-credit={withDefault<string | undefined>(undefined)(image.credit)}
        />
    </picture>


// ----- Exports ----- //

export default Img;
