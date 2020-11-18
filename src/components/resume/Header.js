import styled from 'styled-components';
import { medium } from './media';

const Header = styled.h2`
  color: #61bcf4;
  font-size: 16px;
  text-align: ${(props) => props.align || 'left'};
  text-transform: uppercase;
  letter-spacing: 0px;
  margin-bottom: 10px;
  ${medium(`
  font-size: 14px;
  `)}
`;

export default Header;
