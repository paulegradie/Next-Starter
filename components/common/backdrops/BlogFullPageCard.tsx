import { ShareButtons } from '@components/common/buttons/ShareButtons';
import { Card, Box, Grid } from '@mui/material';

import cls from './BlogFullPageCard.module.scss';
import { BlogPostHeader } from './BlogPostHeader';

export interface FullPageCardProps {
    children: React.ReactNode;
    title: string;
    img: string;
    date: string;
    shareButtons?: boolean;
    readingTime: string;
    author: string;
    author_img: string;
}

export const BlogFullPageCard = ({
    title,
    author,
    author_img,
    readingTime,
    date,
    children,
    img,
    shareButtons,
}: FullPageCardProps) => {
    return (
        <Card className={cls.card} classes={{ root: cls.root }}>
            <BlogPostHeader
                title={title}
                author={author}
                author_img={author_img}
                readingTime={readingTime}
                date={date}
                img={img}
            />
            <div>
                {children}
                {shareButtons && (
                    <Box pt={5}>
                        <Grid spacing={1} container>
                            {['Facebook', 'Twitter', 'Reddit', 'Tumblr'].map((type, index) => (
                                <Grid item key={index}>
                                    <ShareButtons
                                        type={type}
                                        title="About Placeholder"
                                        description="Description placeholder"
                                        disableElevation={true}
                                        variant="contained"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </div>
        </Card>
    );
};
