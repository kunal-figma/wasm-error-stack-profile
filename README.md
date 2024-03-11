# Error Stack Profiling

This repository demonstrates the performance cost of generating stack traces (via `Error`) in the browser. It specifically tries to highlight the performance overhead of stack traces as the length of the stack trace increases (both WASM + JS). Example from my machine in Chrome 122.0.6261.94.

| Description           | Performance (ms)      |
| --------------------- | --------------------- |
| JS stack size: 1      | 0.001980000000074506  |
| JS stack size: 10     | 0.003519999999925494  |
| JS stack size: 100    | 0.0207                |
| JS stack size: 1000   | 0.19318999999985098   |
| WASM stack size: 1    | 0.0034399999998509885 |
| WASM stack size: 10   | 0.0055899999998509885 |
| WASM stack size: 100  | 0.025129999999701978  |
| WASM stack size: 1000 | 0.2238099999997765    |

## Running Locally

1. Run an HTTP server to serve the WASM/JS. You can do this with `python3 -m http.server`
2. Open `localhost:8000` (or whatever port the server is running on)

## Building Locally

1. First, you need to download and install `emcc`: https://emscripten.org/docs/getting_started/downloads.html
2. Next, run `emcc main.c -o error_stack_profile.js -s EXPORTED_FUNCTIONS="['_errorStackProfile']" -s "EXPORTED_RUNTIME_METHODS=['ccall']"`
3. Follow the instructions in the "Running Locally" section
