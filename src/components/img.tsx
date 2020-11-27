// ----- Imports ----- //

import type { SerializedStyles } from "@emotion/core";
import { css } from "@emotion/core";
import { neutral } from "@guardian/src-foundations/palette";
import type { Format } from "@guardian/types/Format";
import { Design } from "@guardian/types/Format";
import type { Option } from "@guardian/types/option";
import { withDefault } from "@guardian/types/option";
import React from "react";
import type { FC } from "react";
import type { Image } from "../image";
import { darkModeCss } from "../lib";
import type { Lightbox } from "../lightbox";
import { getCaption, getClassName, getCredit } from "../lightbox";
import { sizesAttribute, styles as sizeStyles } from "../sizes";
import type { Sizes } from "../sizes";

// ----- Functions ----- //

const backgroundColour = (format: Format): string => {
  switch (format.design) {
    case Design.Media:
      return neutral[20];
    case Design.Comment:
      return neutral[86];
    default:
      return neutral[97];
  }
};

// ----- Component ----- //

type Props = {
  image: Image;
  sizes: Sizes;
  className: Option<SerializedStyles>;
  format: Format;
  supportsDarkMode: boolean;
  lightbox: Option<Lightbox>;
};

const styles = (
  format: Format,
  supportsDarkMode: boolean
): SerializedStyles => css`
  background-color: ${backgroundColour(format)};
  color: ${neutral[60]};
  display: block;

  ${darkModeCss(supportsDarkMode)`
        background-color: ${neutral[20]};
    `}
`;

export const Img: FC<Props> = ({
  image,
  sizes,
  className,
  format,
  supportsDarkMode,
  lightbox,
}) => (
  <picture>
    <source
      sizes={sizesAttribute(sizes)}
      srcSet={image.dpr2Srcset}
      media="(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)"
    />
    <source sizes={sizesAttribute(sizes)} srcSet={image.srcset} />
    <img
      src={image.src}
      alt={withDefault("")(image.alt)}
      className={getClassName(image.width, lightbox)}
      css={[
        sizeStyles(sizes, image.width, image.height),
        styles(format, supportsDarkMode),
        withDefault<SerializedStyles | undefined>(undefined)(className),
      ]}
      data-ratio={image.height / image.width}
      data-caption={getCaption(lightbox)}
      data-credit={getCredit(lightbox)}
    />
  </picture>
);
