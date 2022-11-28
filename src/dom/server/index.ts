import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const server = serve({ port: 3000 });

console.log("Now serving on port 3000 🔥");

for await (const req of server) {
  req.respond({ body: "Hello World" });
}
