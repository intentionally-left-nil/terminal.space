import styled from 'styled-components';

const Row = styled.li`
  display: list-item;
  margin-bottom: 8px;
  @media print {
    margin-bottom: 3px;
  }
`;

export default Row;
