// ----- Imports ----- //

import { Format, Pillar } from '@guardian/types/Format';
import {
    news,
    opinion,
    sport,
    culture,
    lifestyle,
    specialReport,
} from '@guardian/src-foundations/palette';

// ----- Types ----- //

type Colour = string;


// ----- Functions ----- //

const fillIconPrimary = (format: Format): Colour => {
    switch (format.theme) {
        case Pillar.Opinion:
            return opinion[400];
        case Pillar.Sport:
            return sport[400];
        case Pillar.Culture:
            return culture[400];
        case Pillar.Lifestyle:
            return lifestyle[400];
        case 5: // TODO: use Special.SpecialReport
            return specialReport[500];
        case Pillar.News:
        default:
            return news[400];
    }
}

const fillIconPrimaryInverse = (format: Format): Colour => {
    switch (format.theme) {
        case Pillar.Opinion:
            return opinion[500];
        case Pillar.Sport:
            return sport[500];
        case Pillar.Culture:
            return culture[500];
        case Pillar.Lifestyle:
            return lifestyle[500];
        case 5: // TODO: use Special.SpecialReport
            return specialReport[500];
        case Pillar.News:
        default:
            return news[500];
    }
}


// ----- API ----- //

const fill = {
    iconPrimary: fillIconPrimary,
    iconPrimaryInverse: fillIconPrimaryInverse,
};


// ----- Exports ----- //

export {
    fill,
}
