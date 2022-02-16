/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import format from 'date-fns/format';
import { Card, Box, Chip } from '@mui/material';
import classnames from 'classnames';

import cls from './BlogPreviewCard.module.scss';
import { Text } from '@components/common/text/Text';
import { BlogFrontMatter } from 'types';
import { BlogAuthorAndDataDetails } from './BlogAuthorAndDataDetails';
import { useGoSizes } from '@components/common/hooks/mediaQueries';


export interface BlogCardProps {
    url: string;
    postMeta: BlogFrontMatter;
    readingTime: string;
}

export const BlogPreviewCard = ({ url, postMeta, readingTime }: BlogCardProps) => {
    const { image, date, title, snippet, tags, author, author_img } = postMeta;
    const dateFormatted = format(new Date(date), 'PPP');

    const { goVertical, goHorizontal } = useGoSizes();

    return (
        <Card className={classnames({ [cls.card]: goHorizontal, [cls.cardSmall]: goVertical })}>
            {image && (
                <Link href={url}>
                    <a className={classnames(cls.noDecoration, cls.showFocus)}>
                        <img src={image} className={cls.img} alt="" />
                    </a>
                </Link>
            )}
            <Box p={2}>
                <Link href={url}>
                    <a className={classnames(cls.noDecoration, cls.showFocus)}>
                        <Text gutterBottom variant="h4">
                            <span className={cls.title}>{title}</span>
                        </Text>
                    </a>
                </Link>
                <BlogAuthorAndDataDetails
                    author={author}
                    author_img={author_img}
                    dateFormatted={dateFormatted}
                    readingTime={readingTime}
                />
                <Text gutterBottom variant="body1" className={cls.snippet}>
                    {snippet}
                    <Link href={url}>
                        <a className={classnames(cls.noDecoration, cls.showFocus)}>
                            <span className={cls.link}> read more...</span>
                        </a>
                    </Link>
                </Text>
                {tags &&
                    tags.length > 0 &&
                    tags.map((tag, index) => (
                        <Chip
                            style={{ fontSize: '12px', fontWeight: 300, border: '1px solid white' }}
                            key={index}
                            label={tag}
                        />
                    ))}
            </Box>
        </Card>
    );
};
