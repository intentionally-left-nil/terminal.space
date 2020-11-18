const MEDIUM_BREAKPOINT = 900;

export const medium = (css) =>
  `@media (max-width: ${MEDIUM_BREAKPOINT}px) {
    ${css}
  }`;
