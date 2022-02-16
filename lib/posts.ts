import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { computeReadingTime } from './utils';

export const readAllFiles = (postDirectory: string) =>
    fs.readdirSync(path.join(postDirectory)).filter((filename: string) => filename.endsWith('.mdx'));

export function getPostBySlug(blogDirectory: string, slug: string) {
    const source = fs.readFileSync(path.join(blogDirectory, slug + '.mdx'), 'utf8');

    const { data, content: markdownBody } = matter(source);

    return {
        frontMatter: data,
        markdownBody,
    };
}

export const getGenericStaticPaths = (postDirectory: string) => {
    const files = readAllFiles(postDirectory);
    const staticPaths = files.map((filename: string) => {
        const slug = filename.replace('.mdx', '');
        return {
            params: {
                slug,
            },
        };
    });
    return staticPaths;
};

export const getGenericStaticProps = (postDirectory: string) => {
    const files = readAllFiles(postDirectory);

    const posts = files.map((filename: string) => {
        const slug = filename.replace('.mdx', '');
        const markdownWithMeta = fs.readFileSync(path.join(postDirectory, filename), 'utf8');

        const { data: frontMatter, content: markdownBody } = matter(markdownWithMeta);

        const readingTime = computeReadingTime(markdownBody);

        return {
            slug,
            frontMatter,
            readingTime,
        };
    });
    return posts;
};
