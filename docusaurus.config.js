// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GlinTFraulein Portal',
  tagline: '面白くて、楽しいことをしましょう！',
  favicon: 'img/icon_2022_Clear.ico',

  // Set the production url of your site here
  url: 'https://glintfraulein.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GilnTFraulein', // Usually your GitHub org/user name.
  projectName: 'GlinTFraulein_website', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GlinTFraulein Portal',
        logo: {
          alt: 'GlinTFraulein icon',
          src: 'img/icon_2022_Clear.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/GlinTFraulein',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Notes',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Misskey (misskey.niri.la)',
                href: 'https://misskey.niri.la/@GlinTFraulein',
              },
              {
                label: 'Misskey (misskey.io)',
                href: 'https://misskey.io/@GlinTFraulein',
              },
              {
                label: 'VRChat',
                href: 'https://vrchat.com/home/user/usr_6e31fb1b-1a13-4226-807e-efc872b4612d',
              },
              {
                label: 'Twitter (Announcement only / Deprecated)',
                href: 'https://twitter.com/GlinTFraulein',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GlinTFraulein',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GlinTFraulein, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
