import { createContentLoader } from 'vitepress';

export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(raw) {
        return raw
            .map(({ url, frontmatter }) => ({
                title: frontmatter.title,
                description: frontmatter.description,
                url,
                date: formatDate(frontmatter.date),
            }))
            .sort((a, b) => b.date.time - a.date.time);
    },
});

function formatDate(raw) {
    const date = new Date(raw);
    date.setUTCHours(12);
    return {
        time: +date,
        string: date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
    };
}
