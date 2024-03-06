<script type="text/javascript" src="error_stack_profile.js"></script>
<script type="text/javascript">
  Module.ccall("errorStackProfile", [1]);
  Module.ccall("errorStackProfile", [10]);
  Module.ccall("errorStackProfile", [100]);
  const start = performance.now();
  const NUM_SAMPLES = 1000000;
  for (let i = 0; i < NUM_SAMPLES; i++) {
    new Error().stack
  }
  console.log('performance without wasm stack', performance.now() - start);
  console.log(new Error().stack)
</script>

<h1>Error Stack Profiles</h1>
