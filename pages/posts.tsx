import { BlogPage, BlogPostsProps } from '@components/pages/Blog/BlogPage';
import { getGenericStaticProps } from 'lib/posts';

export async function getStaticProps() {
    const posts = getGenericStaticProps('posts');
    return {
        props: {
            posts,
        },
    };
}

export default function Blog({ posts = [] }: BlogPostsProps) {
    return <BlogPage posts={posts} blogType="posts" blogHeader={<></>} />;
}
