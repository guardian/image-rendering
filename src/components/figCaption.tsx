// ----- Imports ----- //

import React, { FC, ReactNode } from 'react';
import { Format, Design } from '@guardian/types/Format';
import { Option, OptionKind } from '@guardian/types/option';
import { remSpace } from '@guardian/src-foundations';
import { text, neutral } from '@guardian/src-foundations/palette';
import { textSans } from '@guardian/src-foundations/typography';
import { SerializedStyles, css } from '@emotion/core';

import { darkModeCss } from '../lib';
import { fill } from '../editorialPalette';


// ----- Sub-Components ----- //

interface TriangleProps {
    format: Format;
    supportsDarkMode: boolean;
}

const triangleStyles = (format: Format, supportsDarkMode: boolean): SerializedStyles => css`
    fill: ${fill.iconPrimary(format)};
    height: 0.8em;
    padding-right: ${remSpace[1]};

    ${darkModeCss(supportsDarkMode)`
        fill: ${fill.iconPrimaryInverse(format)};
    `}
`;

const Triangle: FC<TriangleProps> = ({ format, supportsDarkMode }) => {
    switch (format.design) {
        case Design.Media:
            return null;
        default:
            return (
                <svg
                    css={triangleStyles(format, supportsDarkMode)}
                    viewBox="0 0 10 9"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="0,9 5,0 10,9" />
                </svg>
            );
    }
}


// ----- Component ----- //

interface Props {
    format: Format;
    supportsDarkMode: boolean;
    children: Option<ReactNode>;
}

const styles = css`
    ${textSans.xsmall()}
    padding-top: ${remSpace[2]};
    color: ${text.supporting};
`;

const mediaStyles = css`
    color: ${neutral[86]};
`;

const getStyles = (format: Format): SerializedStyles => {
    switch (format.design) {
        case Design.Media:
            return css(styles, mediaStyles);
        default:
            return styles;
    }
}

const FigCaption: FC<Props> = ({ format, supportsDarkMode, children }) => {
    switch (children.kind) {
        case OptionKind.Some:
            return (
                <figcaption css={getStyles(format)}>
                    <Triangle format={format} supportsDarkMode={supportsDarkMode} />
                    {children.value}
                </figcaption>
            );

        default:
            return null;
    }
    
}


// ----- Exports ----- //

export default FigCaption;
