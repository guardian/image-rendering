// ----- Imports ----- //

import React, { FC } from 'react';
import { css } from '@emotion/core';
import { none, some } from '@guardian/types/option';
import { Design, Display, Pillar } from '@guardian/types/Format';

import Img from './img';
import { Role } from 'image';


// ----- Stories ----- //

const Default: FC = () =>
    <Img
        image={{
            src: 'https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=500&quality=85&fit=bounds&s=f1467e8be532692f4aaa9597adc07306',
            srcset: 'https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=140&quality=85&fit=bounds&s=822845d0639c4b4deb572c7e6f72baea 140w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=500&quality=85&fit=bounds&s=f1467e8be532692f4aaa9597adc07306 500w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=1000&quality=85&fit=bounds&s=ccf2535722cc3f3034495dae0e761e0c 1000w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=1500&quality=85&fit=bounds&s=7764655d28b562fbbcc184c3bd46e7b2 1500w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=2000&quality=85&fit=bounds&s=78425cffd6524942947d5177a5713bdd 2000w',
            dpr2Srcset: 'https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=140&quality=45&fit=bounds&s=ad06e480e9a2cbd3f59c77f6b1f06454 140w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=500&quality=45&fit=bounds&s=1fe31b8d41295aba16065512712d59c9 500w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=1000&quality=45&fit=bounds&s=35194881b5e1c282daf291a59cafba65 1000w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=1500&quality=45&fit=bounds&s=37a96bc69746a31f7cd982b21d63ef13 1500w, https://i.guim.co.uk/img/media/81af1958373e29e430bf4f894ae666feb5dad47f/0_188_5644_3387/master/5644.jpg?width=2000&quality=45&fit=bounds&s=07fa87119df669fb396b8f81732b7674 2000w',
            alt: some('Demo image'),
            width: 5644,
            height: 3387,
            caption: none,
            credit: none,
            rawCaptionHtml: none,
            role: Role.Standard,
        }}
        sizes="80vw"
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
            src: '',
            srcset: '',
            dpr2Srcset: '',
            alt: some('Demo image'),
            width: 5644,
            height: 3387,
            caption: none,
            credit: none,
            rawCaptionHtml: none,
            role: Role.Standard,
        }}
        sizes="80vw"
        className={some(css`width: 40vw; height: 30vw; display: block;`)}
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
