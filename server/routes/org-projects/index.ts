export default defineEventHandler(async (event) => {
    const apiData = await $fetch("https://api.github.com/users/s-complex/repos");
    return apiData;
})