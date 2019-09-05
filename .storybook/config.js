import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import GlobalStyle from '../src/global/GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Decorator = storyFn => (
  <Wrapper>
    <GlobalStyle />
    {storyFn()}
  </Wrapper>
);

addDecorator(Decorator);

global.___loader = {
  enqueue: () => { },
  hovering: () => { },
};

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
