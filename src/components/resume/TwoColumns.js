import React from 'react';
import styled from 'styled-components';

const TwoColumns = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
`;

const gap = 40;
const width = `calc(50% - ${gap}px)`;

const LeftColumnStyled = styled.div`
  order: 1;
  width: ${width};
  padding-right: ${gap}px;
  display: flex;
  justify-content: flex-end;
`;

const RightColumnStyled = styled.div`
  order: 2;
  width: ${width};
  padding-left: ${gap}px;
  display: flex;
  justify-content: flex-start;
`;

const ColumnContent = styled.div`
  max-width: 332px;
`;

const LeftColumn = (props) => (
  <LeftColumnStyled>
    <ColumnContent>{props.children}</ColumnContent>
  </LeftColumnStyled>
);

const RightColumn = (props) => (
  <RightColumnStyled>
    <ColumnContent>{props.children}</ColumnContent>
  </RightColumnStyled>
);

export { LeftColumn, RightColumn };

export default TwoColumns;
