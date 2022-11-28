import * as packup from "https://deno.land/x/packup@v0.2.2/cli.ts";

function build() {
  packup.main(["index.html"]);
}

function serve() {
  build();
}

export { serve };
