// ----- Imports ----- //

import { FC, ReactNode } from 'react';
import { remSpace } from '@guardian/src-foundations';
import { from } from '@guardian/src-foundations/mq';
import { Option, none } from '@guardian/types/option';
import { Format } from '@guardian/types/Format';
import { css, jsx } from '@emotion/core';

import { Image } from 'image';
import Img from 'components/img';
import FigCaption from 'components/figCaption';


// ----- Setup ----- //

const width = `calc(100vw - ${remSpace[4]})`;
const phabletWidth = '620px';


// ----- Component ----- //

interface Props {
    image: Image;
    format: Format;
    supportsDarkMode: boolean;
    lightboxClassName: Option<string>;
    caption: Option<ReactNode>;
}

const styles = css`
    margin: ${remSpace[4]} 0;
    width: ${width};

    ${from.phablet} {
        width: ${phabletWidth};
    }
`;

const BodyImage: FC<Props> = ({
    image,
    format,
    supportsDarkMode,
    lightboxClassName,
    caption,
}) =>
    <figure css={styles}>
        <Img
            image={image}
            sizes={{
                mediaQueries: [{ breakpoint: 'phablet', size: phabletWidth }],
                default: width,
            }}
            className={none}
            format={format}
            supportsDarkMode={supportsDarkMode}
            lightboxClassName={lightboxClassName}
        />
        <FigCaption format={format} supportsDarkMode={supportsDarkMode}>
            {caption}
        </FigCaption>
    </figure>


// ----- Exports ----- //

export default BodyImage;
