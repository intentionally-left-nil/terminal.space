import styled from 'styled-components';

const Header = styled.h2`
  color: #61BCF4;
  font-size: 16px;
  text-align: ${props => props.align || 'left'};
  text-transform: uppercase;
  letter-spacing: 0px;
  margin-bottom: 10px;
`;

export default Header;
