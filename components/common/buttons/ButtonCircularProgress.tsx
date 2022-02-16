import { CircularProgress, Box } from '@mui/material';

import cls from './ButtonCircularProgress.module.scss';

export interface IButtonCircularProgress {
    size?: number;
}

export const ButtonCircularProgress = ({ size }: IButtonCircularProgress) => {
    return (
        <Box color="secondary.main" pl={1.5} display="flex">
            <CircularProgress
                size={size ? size : 24}
                thickness={size ? (size / 5) * 24 : 5}
                className={cls.circularProgress}
            />
        </Box>
    );
};
