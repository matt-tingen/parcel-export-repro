To repro:

```sh
yarn
yarn build
npx live-server dist # or similar
```

Expected behavior is the page's console to have logged an empty object.
A repro will instead have an error like `Uncaught ReferenceError: $fd1dd7bd163658327eae64fa2f71c5d2$exports is not defined`.
