export default defineEventHandler(async (event) => {
  const didHandleCors = handleCors(event, {
    origin: "*",
    preflight: {
      statusCode: 204,
    },
    methods: "*",
  });
  if (didHandleCors) {
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
