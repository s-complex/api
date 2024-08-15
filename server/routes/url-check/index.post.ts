export default defineEventHandler(async (event) => {
  const corsHandled = handleCors(event, {
    origin: "*",
    methods: "*",
    allowHeaders: ["Content-Type"],
    preflight: {
      statusCode: 204,
    },
  });

  if (corsHandled) {
    return;
  }

  const body = await readBody(event);
  const { url } = body;

  try {
    const response = await $fetch.raw(url);
    return { statusCode: response.status };
  } catch (error) {
    return { statusCode: error.response?.status || 500 };
  }
});
