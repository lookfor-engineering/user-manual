// @ts-check
import { defineConfig } from 'astro/config';  
import starlight from '@astrojs/starlight';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import tailwindcss from '@tailwindcss/vite';
import starlightLlmsTxt from 'starlight-llms-txt';

const typeDocConfig = {
  useCodeBlocks: true,
  parametersFormat: 'htmlTable',
  propertyMembersFormat: 'htmlTable',
  disableSources: true,
  plugin: ['typedoc-plugin-zod'],
};

const plugins = [
  starlightLlmsTxt({
    projectName: 'lookfor.ai User Manual',
    customSets: [
      {
        label: 'Guides',
        description: 'Guides for using lookfor.ai',
        paths: ['guides/**'],
      },
    ],
  }),
];

const sidebar = [
  {
    label: 'Welcome',
    link: '/',

  },
  {
    label: 'Quickstart',
    link: '/guides/quickstart',

  },
  {
    label: 'Building Agents',

    items: [
      {
        label: 'Agents',
        link: '/guides/agents',
      },
      {
        label: 'Handoffs',
        link: '/guides/handoffs',

      },
      {
        label: 'Tools',
        link: '/guides/tools',

      },
       {
        label: 'Context',
        link: '/guides/context',
      },
      {
        label: 'Models',
        link: '/guides/models',

      },
      // {
      //   label: 'Context',
      //   link: '/guides/context',

      // },      
      {
        label: 'Writing Effective Agent Instructions',
        link: '/guides/prompt-engineering',

      },
      {
        label: 'Multi-agent Systems',
        link: '/guides/multi-agent-systems',

      }
    ],
  },
  {
    label: 'Others',

    items: [
      {
        label: 'Email Integrations',
        link: '/guides/others/email-integrations',

      },
     {
        label: 'Knowledge Base',
        link: '/guides/others/knowledge-base',

      },
      {
        label: 'Members',
        link: '/guides/others/members',

      },
    ],
  },
];

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.lookfor.ai',

  integrations: [
    starlight({
      title: 'lookfor.ai User Manual',
      components: {
        SiteTitle: './src/components/Title.astro',
      },
      //   defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },

      },
      social: [
        {
          icon: 'x.com',
          href: 'https://x.com/lookfor_ai',
          label: 'lookfor.ai on X',
        },
        {
          icon: 'slack',
          href: 'https://join.slack.com/t/lookfor-workspace/shared_invite/zt-372akqgs2-QfRbT6PFLHzRrCn7V7ircA',
          label: 'lookfor.ai on Slack',
        },
        {
          icon: 'linkedin',
          href: 'https://www.linkedin.com/company/lookfor-ai',
          label: 'lookfor.ai on LinkedIn',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/openai/openai-agents-js/edit/main/docs/',
      },
      plugins,
      sidebar,
      expressiveCode: {
        themes: ['dracula', 'one-light'],
      },
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
