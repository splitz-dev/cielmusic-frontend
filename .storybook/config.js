import {
  configure
} from '@storybook/react';

import '!style-loader!css-loader!sass-loader!../styles/core.scss';

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
