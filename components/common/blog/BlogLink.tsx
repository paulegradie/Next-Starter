import cls from './BlogLink.module.scss';

export interface BlogLinkProps {
    href: string;
    children: React.ReactNode;
}

export const BlogLink = ({ href, children }: BlogLinkProps) => {
    return (
        <a className={cls.link} href={href} target="_blank">
            {children}
        </a>
    );
};
