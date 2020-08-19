// ----- Imports ----- //

import { Format, Pillar } from '@guardian/types/Format';
import {
    news,
    opinion,
    sport,
    culture,
    lifestyle,
} from '@guardian/src-foundations/palette';


// ----- Types ----- //

type Colour = string;


// ----- Functions ----- //

const svgPrimary = (format: Format): Colour => {
    switch (format.pillar) {
        case Pillar.Opinion:
            return opinion[400];
        case Pillar.Sport:
            return sport[400];
        case Pillar.Culture:
            return culture[400];
        case Pillar.Lifestyle:
            return lifestyle[400];
        case Pillar.News:
        default:
            return news[400];
    }
}

const svgPrimaryInverse = (format: Format): Colour => {
    switch (format.pillar) {
        case Pillar.Opinion:
            return opinion[500];
        case Pillar.Sport:
            return sport[500];
        case Pillar.Culture:
            return culture[500];
        case Pillar.Lifestyle:
            return lifestyle[500];
        case Pillar.News:
        default:
            return news[500];
    }
}


// ----- API ----- //

const svg = {
    primary: svgPrimary,
    primaryInverse: svgPrimaryInverse,
};


// ----- Exports ----- //

export {
    svg,
}
