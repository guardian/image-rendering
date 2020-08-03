// ----- Imports ----- //

import { Option } from '@guardian/types/option';


// ----- Types ----- //

const enum Role {
    Standard,
    Thumbnail,
    HalfWidth,
}

interface Image {
    src: string;
    srcset: string;
    dpr2Srcset: string;
    alt: Option<string>;
    width: number;
    height: number;
    caption: Option<DocumentFragment>;
    credit: Option<string>;
    rawCaptionHtml: Option<string>;
    role: Role;
}


// ----- Exports ----- //

export {
    Image,
    Role,
};
