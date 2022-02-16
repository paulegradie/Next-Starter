import { BlogAuthorAndDataDetails } from '@components/pages/Blog/BlogAuthorAndDataDetails';
import { Text } from '../text/Text';
import { format } from 'date-fns';
import { ZoomImage } from '../image/ZoomInImage';
import cls from "./BlogPostHeader.module.scss";


export interface BlogPostHeaderProps {
    title: string;
    img: string;
    date: string;
    readingTime: string;
    author: string;
    author_img: string;
}

export const BlogPostHeader = ({ title, author, author_img, date, readingTime, img }: BlogPostHeaderProps) => {
    return (
        <>
            <ZoomImage className={cls.img} imgSrc={img} alt="" />
            <div className={cls.titlebox}>
                <Text align="left" variant="h2" gutterBottom>
                    <b>{title}</b>
                </Text>
                <BlogAuthorAndDataDetails
                    author={author}
                    author_img={author_img}
                    dateFormatted={format(new Date(date), 'PPP')}
                    readingTime={readingTime}
                />
            </div>
        </>
    );
};
