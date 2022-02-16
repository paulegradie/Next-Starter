import { Typography } from '@mui/material';
import cls from './SubtitleTypography.module.scss';


export interface SubtitleTypographyProps {
    children: React.ReactNode;
}

export const SubtitleTypography = ({ children }: SubtitleTypographyProps) => {
    return (
        <Typography align="center" variant="h5" className={cls.secondaryText}>
            {children}
        </Typography>
    );
};
