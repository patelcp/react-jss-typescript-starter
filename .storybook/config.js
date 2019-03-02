import { configure } from '@storybook/react';
import '../src/assets/css/storybook-style.scss';
import '../src/rootvars.css';
import '../src/index.scss';
import './storybook.scss';

import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'JSS Design System'
});

const req = require.context('../src', true, /stories.tsx$/);
function loadStories() {
  require('../src/Styleguide/index.tsx');
  req.keys().forEach(function (filename) { req(filename) });
}

configure(loadStories, module);