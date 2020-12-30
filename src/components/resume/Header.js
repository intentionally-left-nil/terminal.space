import styled from 'styled-components';
import { small, medium } from './media';

const Header = styled.h2`
  color: #61bcf4;
  font-size: 16px;
  text-align: ${(props) => props.align || 'left'};
  text-transform: uppercase;
  letter-spacing: 0px;
  margin-bottom: 10px;
  @media print {
    font-size: 2vh;
    margin-bottom: 0.2vh;
    margin-top: 0.3vh;
  }
  ${medium(`
  font-size: 14px;
  `)}
  ${small(`
  text-align: left;
  `)}
`;

export default Header;
