import { defineEventHandler, setHeader, readBody } from "h3";

export default defineEventHandler(async (event) => {
  handleCors(event, {
    origin: "*",
    preflight: {
      statusCode: 204,
    },
    methods: "*",
  });

  const body = await readBody(event);
  const { url } = body;

  try {
    const response = await $fetch.raw(url);
    return { status: response.status };
  } catch (error) {
    return { status: error.response?.status || 500 };
  }
});
