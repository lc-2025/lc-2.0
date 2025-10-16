# LC 2.0 - Backend

LC 2.0 backend.

[![LC 2.0 CI](https://github.com/lc-2025/lc-2.0/actions/workflows/ci.yml/badge.svg)](https://github.com/lc-2025/lc-2.0/actions/workflows/ci.yml) [![LC 2.0 CD](https://github.com/lc-2025/lc-2.0/actions/workflows/cd.yml/badge.svg)](https://github.com/lc-2025/lc-2.0/actions/workflows/cd.yml)

## About

A server application that provides an UI and a **REST API** to access and manage the website data stored on the _Sanity_ headless CMS.

© LC <ↄ All Rights reserved.

## Stack

- **Languages**: JavaScript, Typescript, GraphQL
- **Environments**: DOM
- **Libraries**: Testing Library
- **Frameworks**: Sanity
- **Linters/Plugins**: ESLint, Prettier
- **Compilers**: TypeScript
- **Testing**: Jest, Testing Library
- **Versioning**: GitHub, Husky
- **Continuous-Integration/Delivery**: GitHub Actions
- **Deployment**: Sanity

## Getting Started

The project production version is available on _Sanity_.
For any contribution, maintanance and/or trial needs, please refer to the following specifications.

### Server

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

- To deploy the production version:

```bash
npm run deploy
```

## Deploy

_LC Backend_ is integrated and delivered to production via _GitHub Actions_ workflows pipeline, where the server is being set up and built with _Sanity_.
