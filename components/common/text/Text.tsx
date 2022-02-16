import { Typography, TypographyProps } from "@mui/material";


export interface TextProps extends TypographyProps {
    children?: React.ReactNode | string | number;
}

export const Text = ({ children, ...rest }) => {
    return <Typography {...rest}>{children}</Typography>;
};
