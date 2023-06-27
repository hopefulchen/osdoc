/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Os doc',
  tagline: 'This is the homepage of blockchain introduction',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xuperos', // Usually your GitHub org/user name.
  projectName: 'xuperosdoc', // Usually your repo name.

  //: 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hopefulchen/osdoc/tree/master/apptest/',
        },
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Xuperos',
        logo: {
          alt: 'My Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/hopefulchen/osdoc',
            label: 'GitHub',
            position: 'right',
          },
          
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            
          },
          {
            title: 'Community',
            
          },
          {
            title: 'More',
           
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            
          },
        ],  
      },
    }),
};

module.exports = config;
