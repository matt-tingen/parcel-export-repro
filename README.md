To repro:

```sh
yarn
yarn build
npx live-server dist # or similar
```

Expected behavior is the page's console to have logged a function. A repro will instead have an error like `Uncaught ReferenceError: $fd1dd7bd163658327eae64fa2f71c5d2$exports is not defined`.

Changing the import in `index.js` to `@chakra-ui/color-mode` or using `parcel serve` does **not** repro.

Dependencies besides `parcel` and `@chakra-ui/react` are peers of `@chakra-ui/react`.
