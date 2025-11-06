import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = figlet.textSync("Hello Bun!");
      return new Response(body);
    }

    if (url.pathname === "/about") {
      return new Response("about me");
    }

    if (url.pathname === "/contact") {
      return new Response("contact me at ");
    }

    //handle error
    if (url.pathname === "/feed") {
      throw new Error("Could not fetch feed");
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on PORT http://localhost:${server.port}`);
