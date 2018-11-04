import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
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
