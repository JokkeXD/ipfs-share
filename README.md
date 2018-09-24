# IPFS Share Files

![IPFS Share Files](./public/share.png)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg)](https://protocol.ai/) [![](https://img.shields.io/badge/project-IPFS-blue.svg)](http://ipfs.io/) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg)](http://webchat.freenode.net/?channels=%23ipfs)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-blue.svg)](http://standardjs.com/)

> Share files via IPFS

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

The `IPFS Share Files` is a **work-in-progress**. It is part of the wider [IPFS GUI](https://github.com/ipfs-shipyard/ipfs-gui) project.

The app uses the IPFS HTTP API to access the local node. It will use the `window.ipfs` api provided by the [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion) browser extension where available, and fallback to using [js-ipfs-api](https://github.com/ipfs/js-ipfs-api) where not.

This app is built with [`create-react-app`](https://github.com/facebook/create-react-app). Please read the [docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents).

## Install

With `node` and `npm` installed, run:

```sh
> npm install
```

## Usage

To run the app in development mode:

```sh
> npm run start
# Go to http://localhost:3000
```

To run the [storybook](https://storybook.js.org/):

```sh
> npm run storybook
# Go to http://localhost:9009
```

### IPFS Daemon

You need to have a local IPFS daemon running if you want to upload files:

```sh
> ipfs daemon
```

You also need the following configuration set to be able to communicate with the ipfs node:

```sh
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:3000"]'
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```

To reset the config to its default state run:

```sh
> ipfs config --json API.HTTPHeaders {}
```

### Lint

To validate the code using [StandardJS](https://standardjs.com/) run:

```sh
> npm run lint
```

### Build

To build the app for production to the `build` folder:

```sh
> npm run build
```

### Deploy

We use [Jenkins](https://jenkins.io/) for automatic deployments. When a branch gets merged to `master`, it's deployed to [share.ipfs.io](https://share.ipfs.io). When merged to `develop`, it goes to [dev.share.ipfs.io](https://dev.share.ipfs.io).

## Contribute

Feel free to dive in! [Open an issue](https://github.com/ipfs-shipyard/ipfs-share-files/issues/new) or submit PRs.

To contribute to IPFS in general, see the [contributing guide](https://github.com/ipfs/community/blob/master/contributing.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[MIT](LICENSE)
