// @ts-check
import { defineConfig } from 'astro/config';  
import starlight from '@astrojs/starlight';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';
import tailwindcss from '@tailwindcss/vite';
import starlightLlmsTxt from 'starlight-llms-txt';

const [mainStarlightTypeDoc, mainTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [mainRealtimeStarlightTypeDoc, mainRealtimeTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [coreStarlightTypeDoc, coreTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [openaiStarlightTypeDoc, openaiTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [realtimeStarlightTypeDoc, realtimeTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [extensionsStarlightTypeDoc, extensionsTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();

const typeDocConfig = {
  useCodeBlocks: true,
  parametersFormat: 'htmlTable',
  propertyMembersFormat: 'htmlTable',
  disableSources: true,
  plugin: ['typedoc-plugin-zod'],
};

const plugins = [
  starlightLlmsTxt({
    projectName: 'OpenAI Agents SDK (TypeScript)',
    customSets: [
      {
        label: 'Guides',
        description: 'Guides for using the OpenAI Agents SDK',
        paths: ['guides/**'],
      },
    ],
    exclude: ['ja/**'],
  }),
];

const sidebar = [
  {
    label: '👋 Welcome to lookfor.ai',
    link: '/',
    translations: {
      ja: '概要',
    },
  },
  {
    label: 'Quickstart',
    link: '/guides/quickstart',
    translations: {
      ja: 'クイックスタート',
    },
  },
  {
    label: 'Guides',
    translations: {
      ja: 'ガイド',
    },
    items: [
      {
        label: 'Agents',
        link: '/guides/agents',
        translations: {
          ja: 'エージェント',
        },
      },
      {
        label: 'Running Agents',
        link: '/guides/running-agents',
        translations: {
          ja: 'エージェントの実行',
        },
      },
      {
        label: 'Results',
        link: '/guides/results',
        translations: {
          ja: 'エージェントの実行結果',
        },
      },
      {
        label: 'Tools',
        link: '/guides/tools',
        translations: {
          ja: 'ツール',
        },
      },
      {
        label: 'Orchestrating multiple agents',
        link: '/guides/multi-agent',
        translations: {
          ja: 'マルチエージェント',
        },
      },
      {
        label: 'Handoffs',
        link: '/guides/handoffs',
        translations: {
          ja: 'ハンドオフ',
        },
      },
      {
        label: 'Context management',
        link: '/guides/context',
        translations: {
          ja: 'コンテキスト管理',
        },
      },
      {
        label: 'Models',
        link: '/guides/models',
        translations: {
          ja: 'モデル',
        },
      },
      {
        label: 'Guardrails',
        link: '/guides/guardrails',
        translations: {
          ja: 'ガードレール',
        },
      },
      {
        label: 'Human-in-the-loop',
        link: '/guides/human-in-the-loop',
        translations: {
          ja: '人間の介入（HITL）',
        },
      },
      {
        label: 'Tracing',
        link: '/guides/tracing',
        translations: {
          ja: 'トレーシング',
        },
      },
      {
        label: 'Configuring the SDK',
        link: '/guides/config',
        translations: {
          ja: 'SDK の設定',
        },
      },
      {
        label: 'Troubleshooting',
        link: '/guides/troubleshooting',
        translations: {
          ja: 'トラブルシューティング',
        },
      },
    ],
  },
  {
    label: 'Voice Agents',
    translations: {
      ja: '音声エージェント',
    },
    items: [
      {
        label: 'Overview',
        link: '/guides/voice-agents',
        translations: {
          ja: '音声エージェントの概要',
        },
      },
      {
        label: 'Quickstart',
        link: '/guides/voice-agents/quickstart',
        translations: {
          ja: 'クイックスタート',
        },
      },
      {
        label: 'Building Voice Agents',
        link: '/guides/voice-agents/build',
        translations: {
          ja: '音声エージェントの構築',
        },
      },
      {
        label: 'Transport Mechanisms',
        link: '/guides/voice-agents/transport',
        translations: {
          ja: 'リアルタイムトランスポート',
        },
      },
    ],
  },
  {
    label: 'Extensions',
    translations: {
      ja: '拡張機能',
    },
    items: [
      {
        label: 'Use any model with the AI SDK',
        link: '/extensions/ai-sdk',
        translations: {
          ja: 'AI SDK で任意モデルを指定',
        },
      },
      {
        label: 'Connect Realtime Agents to Twilio',
        link: '/extensions/twilio',
        translations: {
          ja: 'Realtime Agent を Twilio に接続',
        },
      },
    ],
  },
];

// https://astro.build/config
export default defineConfig({
  site: 'https://openai.github.io',
  base: 'openai-agents-js',

  integrations: [
    starlight({
      title: 'OpenAI Agents SDK',
      components: {
        SiteTitle: './src/components/Title.astro',
      },
      //   defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ja: {
          label: '日本語',
          lang: 'ja',
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
