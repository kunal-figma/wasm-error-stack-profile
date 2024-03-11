#include <emscripten.h>

EM_JS(void, jsErrorStackProfile, (int stackSize), { runProfile('WASM stack size: ' + stackSize); });

void errorStackProfile(int stackSize, int remainingStackSize) {
  if (remainingStackSize == 0) {
    jsErrorStackProfile(stackSize);
  } else {
    errorStackProfile(stackSize, remainingStackSize - 1);
  }
}
