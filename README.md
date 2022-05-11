# liff-deep-dive ⏬
Demo app for the [LIFF Deep Dive event](https://linedevelopercommunity.connpass.com/event/242678/)

## Start LIFF Development

1. Create LIFF at [LINE Developers Console](https://developers.line.biz/)
2. `$ npx @line/create-liff-app@latest`
3. Input LIFF ID from ①

### Local Development with mkcert

1. `$ brew install mkcert`
2. `$ mkcert -install`
3. `$ mkcert -cert-file localhost.pem -key-file localhost-key.pem localhost`
4. Configure vite config file like:
```js
{
    plugins: [react()],
    server: {
    https: {
        key: fs.readFileSync("./localhost-key.pem"),
        cert: fs.readFileSync("./localhost.pem")
    }
    }
}
```
