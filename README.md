# Error Stack Profiling

This repository demonstrates the performance cost of generating stack traces (via `Error`) in the browser. It specifically tries to highlight the performance overhead of stack traces that have WASM calls and stack traces that don't have WASM calls. Example from my machine in Chrome 122.0.6261.94.

| Description | Performance (ms) |
| ----------- | ---------------- | 
| WASM Stack Size 0 (only JS) | 0.0013100000023841857 |
| WASM Stack Size 1 | 0.0036299999952316285 |
| WASM Stack Size 10 | 0.00665 |
| WASM Stack Size 100 | 0.036639999997615816 |

## Running Locally
1. Run an HTTP server to serve the WASM/JS. You can do this with `python3 -m http.server`
2. Open `localhost:8000` (or whatever port the server is running on)

## Building Locally

1. First, you need to download and install `emcc`: https://emscripten.org/docs/getting_started/downloads.html
2. Next, run `emcc main.c -o error_stack_profile.js -s EXPORTED_FUNCTIONS="['_errorStackProfile']" -s "EXPORTED_RUNTIME_METHODS=['ccall']"`
3. Follow the instructions in the "Running Locally" section

