const MEDIUM_BREAKPOINT = 900;
const SMALL_BREAKPOINT = 625;

export const PRINT_FONT_SIZE = '1.6vh';

export const small = (css) => `
@media not print {
  @media (max-width: ${SMALL_BREAKPOINT}px) {
    ${css}
  }
}`;

export const medium = (css) => `
@media not print {
  @media (max-width: ${MEDIUM_BREAKPOINT}px) {
    ${css}
  }
}`;
