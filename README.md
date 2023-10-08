### About
Just fooling around. Front end is definitely not my forte, but what better way is there to distribute one's ideas to the world?


### Create App
```sh
npx create-react-app my-app
npx create-react-app my-app --template typescript
```

### Install `gh-pages` Package
```sh
npm install gh-pages --save-dev
```

### Update `package.json`
```sh
{
  "name": "treasury",
  "version": "0.1.0",
  "private": true,
->"homepage": "https://treasury.lzagaja.com",

...

  "scripts": {
->  "add-domain": "echo \"treasury.lzagaja.com\" > build/CNAME",
->  "predeploy": "npm run build",
->  "deploy": "npm run add-domain && gh-pages -d build",

```

### Deploy
```sh
npm run deploy
```

### Run Locally
```sh
npm install
npm start
```

### More
https://github.com/gitname/react-gh-pages
