import * as packer from "https://deno.land/x/packup@v0.2.2/cli.ts";

function build() {
  packer.main(["index.html"]);
}

function serve() {
  build();
}

export { serve };
