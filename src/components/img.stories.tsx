/* eslint-disable import/no-default-export -- exclude stories for this rule */

// ----- Imports ----- //

import { Design, Display, Pillar } from "@guardian/types/Format";
import { none } from "@guardian/types/option";
import type { FC } from "react";
import React from "react";
import { image } from "../fixtures/image";
import { Img } from "./img";

// ----- Setup ----- //

const sizes = { mediaQueries: [], default: "40vw" };

// ----- Stories ----- //

const Default: FC = () => (
  <Img
    image={image}
    sizes={sizes}
    className={none}
    format={{
      design: Design.Article,
      display: Display.Standard,
      theme: Pillar.News,
    }}
    supportsDarkMode={true}
    lightbox={none}
  />
);

const Placeholder: FC = () => (
  <Img
    image={{
      ...image,
      src: "",
      srcset: "",
      dpr2Srcset: "",
    }}
    sizes={sizes}
    className={none}
    format={{
      design: Design.Article,
      display: Display.Standard,
      theme: Pillar.News,
    }}
    supportsDarkMode={true}
    lightbox={none}
  />
);

// ----- Exports ----- //

export default {
  component: Img,
  title: "Img",
};

export { Default, Placeholder };
