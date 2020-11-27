/* eslint-disable import/no-default-export -- exclude stories for this rule */

// ----- Imports ----- //

import { Design, Display, Pillar } from "@guardian/types/Format";
import { some } from "@guardian/types/option";
import type { FC } from "react";
import React from "react";
import { FigCaption } from "./figCaption";

// ----- Stories ----- //

const Default: FC = () => (
  <FigCaption
    format={{
      design: Design.Article,
      display: Display.Standard,
      theme: Pillar.News,
    }}
    supportsDarkMode={true}
  >
    {some(
      "Age of the train … a tourist train in Switzerland. Photograph: Kisa_Markiza/Getty Images"
    )}
  </FigCaption>
);

// ----- Exports ----- //

export default {
  component: FigCaption,
  title: "FigCaption",
};

export { Default };
