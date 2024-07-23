//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    "/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
      },
    },
    "/photos/alice": {
      proxy: "https://avatars.githubusercontent.com/u/81961962",
    },
    "/photos/yecdn/**": {
      proxy: "https://i.yecdn.com/**",
    },
  },
});
