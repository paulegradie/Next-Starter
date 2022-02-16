import { ShareButtons } from '@components/common/buttons/ShareButtons';
import { Card, Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { ZoomImage } from '../image/ZoomInImage';
import { Text } from '../text/Text';

import cls from './FullPageCard.module.scss';

export interface FullPageCardProps {
    children: React.ReactNode;
    title?: string;
    img?: string;
    date?: string;
    shareButtons?: boolean;
}

export const FullPageCard = ({ title, children, img, date, shareButtons }: FullPageCardProps) => {
    return (
        <Card className={cls.card}>
            {img && <ZoomImage className={cls.img} imgSrc={img} alt="" />}
            {title && (
                <Box pt={3} pr={3} pl={3} pb={2}>
                    <Text align="left" variant="h4">
                        <b>{title}</b>
                    </Text>
                    {date && <Text style={{ color: 'gray' }}>{format(new Date(date), 'PPP')}</Text>}
                </Box>
            )}
            <Box p={3}>
                {children}
                {shareButtons && (
                    <Box pt={5}>
                        <Grid spacing={1} container>
                            {['Facebook', 'Twitter', 'Reddit', 'Tumblr'].map((type, index) => (
                                <Grid item key={index}>
                                    <ShareButtons
                                        type={type}
                                        title="About Placeholder"
                                        description="Check out this meaningful story about Placeholder!"
                                        disableElevation={true}
                                        variant="contained"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </Box>
        </Card>
    );
};
