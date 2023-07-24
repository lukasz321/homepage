### Create App
```
npx create-react-app my-app
npx create-react-app my-app --template typescript
```

### Install `gh-pages` Package
```
npm install gh-pages --save-dev
```

### Update `package.json`
```
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
```
npm run deploy
```

### More
https://github.com/gitname/react-gh-pages
