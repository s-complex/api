// server/api/check-status.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event); // 读取请求体
  const { url } = body; // 从请求体中获取 URL

  try {
    const response = await $fetch.raw(url); // 使用 $fetch.raw 获取完整响应
    return { status: response.status }; // 返回 HTTP 状态码
  } catch (error) {
    return { status: error.response?.status || 500 }; // 返回错误状态码
  }
});
