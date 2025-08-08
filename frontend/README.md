# LC 2.0 - Frontend

LC website version 2.0 (3) frontend.

![LC 2.0 Preview](./docs/preview.gif 'LC 2.0 Preview')
![LC 2.0 Preview - Light theme](./docs/preview-light.png 'LC 2.0 Preview - Light theme')
![LC 2.0 Preview - Dark theme](./docs/preview-dark.png 'LC 2.0 Preview - Dark theme')

[![LC 2.0 CI](https://github.com/lc-2025/lc-2.0/actions/workflows/ci.yml/badge.svg)](https://github.com/lc-2025/lc-2.0/actions/workflows/ci.yml) [![LC 2.0 CD](https://github.com/lc-2025/lc-2.0/actions/workflows/cd.yml/badge.svg)](https://github.com/lc-2025/lc-2.0/actions/workflows/cd.yml)

## About

A front-end website based on _NextJS_ consisting of a professional portfolio populated and managed by _Sanity_.

© LC 2025 <ↄ All Rights reserved.

## Stack

### Languages

- HTML
- CSS
- SASS
- JavaScript
- TypeScript
- GROQ
- YAML
- Bash

### Environments

- DOM

### Libraries

- Headless UI
- GSAP
- TypedJS

### Frameworks

- React
- NextJS
- TailwindCSS
- Jest
- Cypress

### Pre/Post-Processors

- PostCSS
- Sass

### Linters/Plugins

- stylelint
- ESLint
- Prettier

### Compilers

- TypeScript

### Testing

- Jest
- Cypress

### Versioning

- GitHub
- Husky

### Continuous-Integration/Delivery

- GitHub Actions

### Deployment

- Vercel

## Getting Started

The project production version is available on _Vercel_ at [https://lucati.dev](https://lucati.dev).
For any contribution, maintanance and/or trial needs, please refer to the following specifications.

### Environment

In order to manage `development` or `production` versions, please set the proper `.env | .env.*` root file according to the distribution guidelines contained in the `.env.dist` version.
The environment configuration contains the core info required by the client in order to start and communicate with the CMS, as well as perform End-To-End testing and analytics monitoring. For any local test, please provide the expected one.

### Client

On terminal, from project root:

- To run in `development` mode

```bash
npm run dev
```

- To build the production version

```bash
npm run build
```

- To run in `production` mode

```bash
npm run start
```

### Tests

#### Unit/Integration/End-To-End

On terminal, from project root:

- To run the unit/integration tests in `development` mode

```bash
npm run test
```

- To run the end-to-end tests in `development` mode

```bash
npm run cypress:open
```

- To run the tests in `testing` mode (staging or content-integration/delivery environments)

```bash
npm run test:ci
```

## Deploy

_LC 2.0 Frontend_ is integrated and delivered to production via _GitHub Actions_ workflows pipeline, where the client is being set up, tested and built.
Then the artifacts are deployed on _Vercel_ production environment available at [https://lucati.dev](https://lucati.dev)

## Contributing

Please read more about required best practices on the specific [contributing reference document](../.github/CONTRIBUTING.md)
