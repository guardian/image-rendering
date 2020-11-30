// ----- Imports ----- //

import type { SerializedStyles } from "@emotion/core";
import { css } from "@emotion/core";
import { remSpace } from "@guardian/src-foundations";
import { neutral, text } from "@guardian/src-foundations/palette";
import { textSans } from "@guardian/src-foundations/typography";
import type { Format, Option } from "@guardian/types";
import { Design, OptionKind } from "@guardian/types";
import React from "react";
import type { FC, ReactNode } from "react";
import { fill } from "../editorialPalette";
import { darkModeCss } from "../lib";

// ----- Sub-Components ----- //

interface TriangleProps {
  format: Format;
  supportsDarkMode: boolean;
}

const triangleStyles = (
  format: Format,
  supportsDarkMode: boolean
): SerializedStyles => css`
  fill: ${fill.iconPrimary(format)};
  height: 0.8em;
  padding-right: ${remSpace[1]};

  ${darkModeCss(supportsDarkMode)`
        fill: ${fill.iconPrimaryInverse(format)};
    `}
`;

const Triangle: FC<TriangleProps> = ({ format, supportsDarkMode }) => {
  switch (format.design) {
    case Design.Media:
      return null;
    default:
      return (
        <svg
          css={triangleStyles(format, supportsDarkMode)}
          viewBox="0 0 10 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,9 5,0 10,9" />
        </svg>
      );
  }
};

// ----- Component ----- //

type Props = {
  format: Format;
  supportsDarkMode: boolean;
  children: Option<ReactNode>;
};

const styles = css`
  ${textSans.xsmall()}
  padding-top: ${remSpace[2]};
  color: ${text.supporting};
`;

const mediaStyles = css`
  color: ${neutral[86]};
`;

const getStyles = (format: Format): SerializedStyles => {
  switch (format.design) {
    case Design.Media:
      return css(styles, mediaStyles);
    default:
      return styles;
  }
};

export const FigCaption: FC<Props> = ({
  format,
  supportsDarkMode,
  children,
}) => {
  switch (children.kind) {
    case OptionKind.Some:
      return (
        <figcaption css={getStyles(format)}>
          <Triangle format={format} supportsDarkMode={supportsDarkMode} />
          {children.value}
        </figcaption>
      );

    default:
      return null;
  }
};
