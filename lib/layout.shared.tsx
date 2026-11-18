import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    links: [
      {
        text: 'Finance',
        url: '/docs/finance',
      },
      {
        text: 'Stocks',
        url: '/docs/stocks',
      },
      {
        text: 'Micro',
        url: '/docs/micro',
      },
      {
        text: 'Macro',
        url: '/docs/macro',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
