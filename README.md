# Solid Start Blank Page Bug Repro

Repro repo to reproduce a bug in Solid Start that blocks interactivity when using an action.

## To reproduce

Run:

```
pnpm install
pnpm dev
```

go to `/` and notice that `"Never shown"` is printed in the console, signaling that `onMount` is run correctly and the page is interactive.

Then uncomment the line tagged with `@todo` and notice how there's now a warning in the console, no errors in the console or server and the page is not interactive.
