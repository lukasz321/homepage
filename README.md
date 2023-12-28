## About
Just fooling around. Webapps aren't not my forte, but what better way is there to distribute ideas to the world?

## GH Pages Deployment
```sh
npx create-react-app my-app --template typescript
npm install gh-pages --save-dev
```

#### Update `package.json`
```sh
{
  "name": "homepage",
  "version": "0.1.0",
  "private": true,
->"homepage": "https://lzagaja.com",

...

  "scripts": {
->  "add-domain": "echo \"lzagaja.com\" > build/CNAME",
->  "predeploy": "npm run build",
->  "deploy": "npm run add-domain && gh-pages -d build",

```

#### Deploy
```sh
npm run deploy
```
