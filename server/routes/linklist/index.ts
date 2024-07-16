import yaml from "js-yaml";

export default defineEventHandler(async (event) => {
  const file = yaml.load(
    await $fetch(
      "https://friends-src.slirv.vip/list.yml", {
        method: "GET",
        headers: {
            "User-Agent": "curl/8.2.1 (api.slirv.vip)"
        }
      }
    )
  );

  file.forEach(item => {
    if (item.avatar) {
      item.avatar = `https://friends-src.slirv.vip/img/${item.avatar}`;
    }
  });

  const jsonContent = JSON.stringify(file, null, 2);
  const utf8EncodedContent = new TextEncoder().encode(jsonContent);

  return new Response(utf8EncodedContent, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
});