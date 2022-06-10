# lesson we3 development

記事

https://zenn.dev/nbr41to/scraps/ef5248146caafd

https://zenn.dev/nbr41to/scraps/5835967f202a42

## Setup

```sh
yarn add -D hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

```sh
npx hardhat
```

## Compile

```sh
npx hardhat compile
```

## deploy

### localhost の場合

server を起動して

```sh
npx hardhat node
```

```sh
npx hardhat run scripts/sample-script.js
```

### Rinkeby の場合

```sh
npx hardhat run scripts/sample-script.js --network rinkeby
```

`hardhat.config.js`の変更と環境変数の設定が必要

### Client

Next.js

`pages/index.jsx`でデプロイ時の contract address を使用するように

```sh
cd client
yarn dev
```
