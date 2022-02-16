import { Typography, TypographyProps } from "@mui/material";
import React from 'react'


export const TitleCopy = (props: TypographyProps) => {
    return (
        <Typography variant="h5" paragraph >
            {props.children}
        </Typography>
    );
};
