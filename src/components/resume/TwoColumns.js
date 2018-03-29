import React from 'react';
import styled from 'styled-components';

const TwoColumns = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
`;

const LeftColumn = styled.div`
  order: 1;
  width: 50%;
`;

const RightColumn = styled.div`
  order: 2;
  width: 50%;
`;

export { LeftColumn, RightColumn };

export default TwoColumns;
