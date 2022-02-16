import { ZoomImage } from '../image/ZoomInImage';
import cls from './BlogImage.module.scss';

export interface BlogImageProps {
    src: string;
}

export const BlogImage = ({ src }: BlogImageProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "2rem" }}>
            <ZoomImage imgSrc={src} alt={src} className={cls.blogImg} />
        </div>
    );
};
