import { defineEventHandler, setHeader, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*');
  setHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type');

  if (event.node.req.method === 'OPTIONS') {
    return { status: 200 };
  }

  const body = await readBody(event);
  const { url } = body;

  try {
    const response = await $fetch.raw(url);
    return { status: response.status };
  } catch (error) {
    return { status: error.response?.status || 500 };
  }
});
