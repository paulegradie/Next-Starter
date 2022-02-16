import { BlogPostMeta } from 'types';

import { BlogPostList } from './BlogPostList';

export type BlogPostsProps = {
    posts: BlogPostMeta[];
    blogType: 'posts' | 'posts-technical';
    blogHeader: React.ReactNode;
};

export const BlogPage = ({ posts, blogType, blogHeader }: BlogPostsProps) => {
    return (
        <>
            {blogHeader}
            <BlogPostList posts={posts} blogType={blogType} />
        </>
    );
};
