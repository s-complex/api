import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const target = query.check as string; // 类型断言为字符串

  console.log('Received target URL:', target); // 调试信息

  try {
    const response = await $fetch.raw(target);
    console.log('Response status:', response.status); // 调试信息
    return {
      statusCode: response.status,
      statusMessage: response.statusText // 可选：返回状态消息
    };
  } catch (error) {
    console.error('Error response:', error.response?.status); // 调试信息
    return {
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Internal Server Error' // 可选：返回错误状态消息
    };
  }
});
