import React from 'react';
import styled from 'styled-components';
import { small, medium } from './media';

const TwoColumns = styled.div`
  display: flex;
  width: calc(100% - 40px);
  padding: 20px;
  ${medium(`
  padding: 10px;
  `)}
  ${small(`
  flex-direction: column;
  `)}
`;

const gap = 40;
const mediumWidthGap = 20;
const width = `calc(50% - ${gap}px)`;

const mediumLeftWidth = `calc(40% - ${mediumWidthGap}px)`;
const mediumRightWidth = `calc(60% - ${mediumWidthGap}px)`;

const LeftColumnStyled = styled.div`
  order: 1;
  width: ${width};
  padding-right: ${gap}px;
  display: flex;
  justify-content: flex-end;
  @media print {
    width: 40vw;
    padding-right: 3vw;
  }
  ${medium(`
  width: ${mediumLeftWidth};
  padding-right: ${mediumWidthGap}px;
  `)}
  ${small(`
  width: inherit;
  padding-right: inherit;
  padding-left: 20px;
  `)}
`;

const RightColumnStyled = styled.div`
  order: 2;
  width: ${width};
  padding-left: ${gap}px;
  display: flex;
  justify-content: flex-start;
  @media print {
    width: inherit;
    padding-left: 3vw;
  }
  ${medium(`
  width: ${mediumRightWidth};
  padding-left: ${mediumWidthGap}px;
  `)}
`;

const ColumnContent = styled.div`
  max-width: 332px;
  ${small(`
  max-width: inherit;
  width: 100%;
  `)}
  @media print {
    max-width: inherit;
  }
`;

const LeftColumn = ({ children }) => (
  <LeftColumnStyled>
    <ColumnContent>{children}</ColumnContent>
  </LeftColumnStyled>
);

const RightColumn = ({ children }) => (
  <RightColumnStyled>
    <ColumnContent>{children}</ColumnContent>
  </RightColumnStyled>
);

export { LeftColumn, RightColumn };

export default TwoColumns;
