import { BlogFrontMatter } from 'types';
import { BlogFullPageCard } from '@components/common/backdrops/BlogFullPageCard';
import { MDXRemote } from 'next-mdx-remote';
import { BlogLink } from '@components/common/blog/BlogLink';
import { BlogImage } from '@components/common/blog/BlogImage';
import { HPos } from '@components/common/blog/HPos';
import { Quote } from '@components/common/blog/Quote';
import cls from './BlogPostPage.module.scss';

export interface BlogPostPageProps {
    frontMatter: BlogFrontMatter;
    serializedMarkdown: string;
    readingTime: number;
}

export const BlogPostPage = ({ frontMatter, serializedMarkdown, readingTime }: BlogPostPageProps) => {
    const { title, image, date, author, author_img } = frontMatter;

    const parts = image.split('/').slice(1);
    const truncatedImage = parts.join('/');

    return (
        <div className={cls.container}>
            <div className={cls.inner}>
                <BlogFullPageCard
                    shareButtons
                    title={title}
                    date={date}
                    img={truncatedImage}
                    readingTime={readingTime.toString()}
                    author={author}
                    author_img={author_img}
                >
                    {/* @ts-ignore */}
                    <MDXRemote
                        {...serializedMarkdown}
                        components={{
                            a: BlogLink,
                            BlogImage,
                            BlogLink,
                            HPos,
                            Quote,
                        }}
                    />
                </BlogFullPageCard>
            </div>
        </div>
    );
};
