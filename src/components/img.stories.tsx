// ----- Imports ----- //

import { FC } from 'react';
import { jsx } from '@emotion/core';
import { none } from '@guardian/types/option';
import { Design, Display, Pillar } from '@guardian/types/Format';

import Img from './img';
import { image } from 'fixtures/image';


// ----- Setup ----- //

const sizes = { mediaQueries: [], default: '40vw' };


// ----- Stories ----- //

const Default: FC = () =>
    <Img
        image={image}
        sizes={sizes}
        className={none}
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: Pillar.News,
        }}
        supportsDarkMode={true}
        lightboxClassName={none}
    />

const Placeholder: FC = () =>
    <Img
        image={{
            ...image,
            src: '',
            srcset: '',
            dpr2Srcset: '',
        }}
        sizes={sizes}
        className={none}
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: Pillar.News,
        }}
        supportsDarkMode={true}
        lightboxClassName={none}
    />


// ----- Exports ----- //

export default {
    component: Img,
    title: 'Img',
}

export {
    Default,
    Placeholder,
};
