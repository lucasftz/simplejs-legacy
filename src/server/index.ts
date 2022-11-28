import * as esbuild from "https://deno.land/x/esbuild@v0.15.16/wasm.js";

async function build() {
  await esbuild
    .build({
      entryPoints: ["src/index.ts"],
      bundle: true,
      outfile: "index.bundle.js",
    })
    .catch(() => Deno.exit(1));
}

function serve() {
  build();
}

export { serve };
