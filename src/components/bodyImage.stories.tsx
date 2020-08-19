// ----- Imports ----- //

import React, { FC } from 'react';
import { none, some } from '@guardian/types/option';
import { Display, Design, Pillar } from '@guardian/types/Format';

import { image } from 'fixtures/image';
import BodyImage from './bodyImage';


// ----- Stories ----- //

const Default: FC = () =>
    <BodyImage
        image={image}
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: Pillar.News,
        }}
        supportsDarkMode={true}
        lightboxClassName={none}
        caption={some('Age of the train ... a tourist train in Switzerland. Photograph: Kisa_Markiza/Getty Images')}
    />

const NoCaption: FC = () =>
    <BodyImage
        image={image}
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: Pillar.News,
        }}
        supportsDarkMode={true}
        lightboxClassName={none}
        caption={none}
    />


// ----- Exports ----- //

export default {
    component: BodyImage,
    title: 'BodyImage',
}

export {
    Default,
    NoCaption,
}
