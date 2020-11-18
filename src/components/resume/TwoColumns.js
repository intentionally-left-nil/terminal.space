import React from 'react';
import styled from 'styled-components';
import { small, medium } from './media';

const TwoColumns = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  ${medium(`
  margin: 10px;
  `)}
  ${small(`
  flex-direction: column;
  `)}
`;

const gap = 40;
const medium_width_gap = 20;
const width = `calc(50% - ${gap}px)`;

const medium_left_width = `calc(40% - ${medium_width_gap}px)`;
const medium_right_width = `calc(60% - ${medium_width_gap}px)`;

const LeftColumnStyled = styled.div`
  order: 1;
  width: ${width};
  padding-right: ${gap}px;
  display: flex;
  justify-content: flex-end;
  ${medium(`
  width: ${medium_left_width};
  padding-right: ${medium_width_gap}px;
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
  ${medium(`
  width: ${medium_right_width};
  padding-left: ${medium_width_gap}px;
  `)}
`;

const ColumnContent = styled.div`
  max-width: 332px;
  ${small(`
  max-width: inherit;
  width: 100%;
  `)}
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
