// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    "/**": {
      cors: true,
      headers: {
        "Access-Control-Expose-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
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
