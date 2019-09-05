import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: 500;
`;
