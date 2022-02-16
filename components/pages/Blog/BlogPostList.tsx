import { BlogPostMeta } from 'types';
import { BlogPreviewCard } from './BlogPreviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { useState } from 'react';
import { Breakpoints } from 'styles/theme';
SwiperCore.use([Autoplay, EffectFade]);

export interface BlogPostListProps {
    posts: BlogPostMeta[];
    blogType: 'posts' | 'posts-technical';
}

export const BlogPostList = ({ posts, blogType }: BlogPostListProps) => {
    const [swiper, setSwiper] = useState<any>(0);
    return (
        <Swiper
            breakpoints={{
                [Breakpoints.xs]: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                    direction: 'horizontal',
                    centeredSlides: true,
                },
                [Breakpoints.sm]: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                    direction: 'horizontal',
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.md]: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                    direction: 'horizontal',
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.lg]: {
                    slidesPerView: 3,
                    spaceBetween: 200,
                    direction: 'horizontal',
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.xl]: {
                    slidesPerView: 3,
                    spaceBetween: 500,
                    direction: 'horizontal',
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            observeParents={true}
            observer={true}
        >
            {posts
                .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
                .map((post, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <BlogPreviewCard
                                key={post.slug}
                                url={`/${blogType}/${post.slug}`}
                                postMeta={post.frontMatter}
                                readingTime={post.readingTime}
                            />
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
};
