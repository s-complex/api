export default defineEventHandler(async (event) => {
    const apiData = await $fetch("https://ungh.cc/users/s-complex/repos");

    const data = apiData as { repos: { name: string, repo: string, description: string }[] };

    if (!data.repos || !Array.isArray(data.repos)) {
        console.error('Invalid data structure');
        return [];
    }

    return data.repos.map(item => {
        return {
            name: item.name,
            html_url: `https://github.com/${item.repo}`,
            description: item.description || ''
        };
    });
});