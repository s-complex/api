import yaml from "js-yaml";

export default defineEventHandler(async (event) => {
    const file = yaml.load(await useStorage("assets:server").getItem("linklist.yml"));
    const utf8EncodedContent = new TextEncoder().encode(JSON.stringify(file, null, 2));
    return new Response(utf8EncodedContent, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });
})