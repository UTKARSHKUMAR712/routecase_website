import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://routecase.dev',
  integrations: [
    starlight({
      title: 'RouteCase',
      description: 'Modern In-Editor API Route & Endpoint Testing for Visual Studio Code by Utkarsh Kumar (utkarshkumar712)',
      logo: {
        src: './src/assets/logo.png',
        alt: 'RouteCase Logo',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/UTKARSHKUMAR712/routecase' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What is RouteCase?', link: '/introduction/' },
            { label: 'Quickstart (3 Minutes)', link: '/getting-started/quickstart/' },
            { label: 'Installation Guide', link: '/getting-started/installation/' },
            { label: 'First Test Suite', link: '/getting-started/first-test/' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Architecture & Workflow', link: '/core-concepts/architecture/' },
            { label: 'Endpoints & Test Cases', link: '/core-concepts/endpoints-and-cases/' },
            { label: 'Execution & Lifecycle', link: '/core-concepts/execution-lifecycle/' },
            { label: 'Results & Debugging', link: '/core-concepts/results-and-debugging/' },
          ],
        },
        {
          label: 'Variables & Chaining',
          items: [
            { label: 'Overview & Resolution Order', link: '/variables/overview/' },
            { label: 'Environment Variables (.env)', link: '/variables/environments/' },
            { label: 'Response Token Chaining', link: '/variables/token-chaining/' },
            { label: 'Dynamic Built-in Generators', link: '/variables/dynamic-generators/' },
            { label: 'URL Path & Query Placeholders', link: '/variables/placeholders-and-encoding/' },
          ],
        },
        {
          label: 'Reference Specification',
          items: [
            { label: '.rcase Schema Reference', link: '/reference/schema-specification/' },
            { label: 'Assertions Engine', link: '/reference/assertions/' },
            { label: 'HTTP Methods & Bodies', link: '/reference/http-methods/' },
            { label: 'Commands & Shortcuts', link: '/reference/commands/' },
            { label: 'Settings Reference', link: '/reference/settings/' },
          ],
        },
        {
          label: 'Tutorials & Recipes',
          items: [
            { label: 'Testing an Express REST API', link: '/tutorials/express-api/' },
            { label: 'JWT Auth & Token Chaining', link: '/tutorials/auth-workflow/' },
            { label: 'Pagination & Query Filtering', link: '/tutorials/pagination-and-filtering/' },
            { label: 'Live Public APIs (GitHub)', link: '/tutorials/public-apis/' },
            { label: 'OpenAPI / Swagger Import', link: '/tutorials/openapi-import/' },
          ],
        },
        {
          label: 'Troubleshooting & Community',
          items: [
            { label: 'Troubleshooting Guide', link: '/troubleshooting/common-issues/' },
            { label: 'Frequently Asked Questions', link: '/faq/' },
            { label: 'Developer & Contributing Guide', link: '/contributing/development-guide/' },
            { label: 'Changelog', link: '/reference/changelog/' },
            { label: 'License & Support', link: '/reference/license/' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Utkarsh Kumar (utkarshkumar712)',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'creator',
            content: 'Utkarsh Kumar',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'RouteCase, API testing, VS Code extension, REST API, JSON testing, CodeLens, Utkarsh Kumar, utkarshkumar712',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'RouteCase Documentation',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://routecase.dev/logo-1024.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:creator',
            content: '@utkarshkumar712',
          },
        },
      ],
    }),
    sitemap(),
  ],
});
