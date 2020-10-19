// ----- Imports ----- //

import React, { FC } from 'react';
import { none, some } from '@guardian/types/option';
import { Display, Design, Pillar } from '@guardian/types/Format';

import { image } from '../fixtures/image';
import BodyImage from './bodyImage';
import { Role } from '../image';


// ----- Setup ----- //

const format = {
    design: Design.Article,
    display: Display.Standard,
    pillar: Pillar.News,
};
const caption = some('Age of the train … a tourist train in Switzerland. Photograph: Kisa_Markiza/Getty Images');
const copy = (
    <>
        <p>Ever since Mexico City was founded on an island in the lake of Texcoco its inhabitants have dreamed of water: containing it, draining it and now retaining it.</p>
        <p>Nezahualcoyotl, the illustrious lord of Texcoco, made his name constructing a dyke shielding Mexico City’s Aztec predecessor city of Tenochtitlan from flooding. The gravest threat to Mexico City’s existence came from a five-year flood starting in 1629, almost causing the city to be abandoned. Ironically now its surrounding lake system has been drained, the greatest threat to the city’s existence is probably the rapid decline of its overstressed aquifers.</p>
    </>
);


// ----- Stories ----- //

const Default: FC = () =>
    <BodyImage
        image={image}
        format={format}
        supportsDarkMode={true}
        lightbox={none}
        caption={caption}
        leftColumnBreakpoint={none}
    />

const NoCaption: FC = () =>
    <BodyImage
        image={image}
        format={format}
        supportsDarkMode={true}
        lightbox={none}
        caption={none}
        leftColumnBreakpoint={none}
    />

const Thumbnail: FC = () =>
    <>
        <BodyImage
            image={{
                ...image,
                role: Role.Thumbnail,
            }}
            format={format}
            supportsDarkMode={true}
            lightbox={none}
            caption={caption}
            leftColumnBreakpoint={none}
        />
        {copy}
    </>

const ThumbnailNoCaption: FC = () =>
    <>
        <BodyImage
            image={{
                ...image,
                role: Role.Thumbnail,
            }}
            format={format}
            supportsDarkMode={true}
            lightbox={none}
            caption={none}
            leftColumnBreakpoint={none}
        />
        {copy}
    </>


// ----- Exports ----- //

export default {
    component: BodyImage,
    title: 'BodyImage',
}

export {
    Default,
    NoCaption,
    Thumbnail,
    ThumbnailNoCaption,
}
