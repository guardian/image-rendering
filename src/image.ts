// ----- Imports ----- //

import type { Option } from "@guardian/types/option";

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
  role: Role;
}

// ----- Exports ----- //

export { Image, Role };
