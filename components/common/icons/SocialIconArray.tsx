import { Box, IconButton } from '@mui/material';
import { socialIcons } from '@components/common/icons/SocialIcons';
import cls from './SocialIconArray.module.scss';

export const SocialIconsArray = () => {
    return (
        <div style={{marginTop: "2rem", marginBottom: "2rem", display: "flex", flexDirection: "row"}}>
            {socialIcons.map((socialIcon, index) => (
                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                    <IconButton aria-label={socialIcon.label} className={cls.socialIcon} href={socialIcon.href}>
                        {socialIcon.icon}
                    </IconButton>
                </Box>
            ))}
        </div>
    );
};
