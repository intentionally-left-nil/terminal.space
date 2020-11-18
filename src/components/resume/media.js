const MEDIUM_BREAKPOINT = 900;
const SMALL_BREAKPOINT = 625;

export const small = (css) =>
  `@media (max-width: ${SMALL_BREAKPOINT}px) {
    ${css}
  }`;

export const medium = (css) =>
  `@media (max-width: ${MEDIUM_BREAKPOINT}px) {
    ${css}
  }`;
