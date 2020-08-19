// ----- Imports ----- //

import React, { FC } from 'react';
import { Design, Display, Pillar } from '@guardian/types/Format';
import { some } from '@guardian/types/option';

import FigCaption from './figCaption';


// ----- Stories ----- //

const Default: FC = () =>
    <FigCaption
        format={{
            design: Design.Article,
            display: Display.Standard,
            pillar: Pillar.News,
        }}
        supportsDarkMode={true}
    >
        {some('Age of the train ... a tourist train in Switzerland. Photograph: Kisa_Markiza/Getty Images')}
    </FigCaption>


// ----- Exports ----- //

export default {
    component: FigCaption,
    title: 'FigCaption',
}

export {
    Default,
}
