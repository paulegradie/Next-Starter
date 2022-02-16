import React from 'react';
import { Text, TextProps } from './Text';
import cls from './TitleTypography.module.scss';

export interface TitleTypographyProps extends TextProps {
    children: React.ReactNode;
    display?: 'initial' | 'block' | 'inline' | undefined;
}

export const TitleTypography = ({
    children,
    display = 'inline',
    variant = 'h2',
    align = 'center',
    ...rest
}: TitleTypographyProps) => {
    return (
        <Text className={cls.primaryText} variant={variant}  display={display} align ={align} {...rest}>
            {children}
        </Text>
    );
};
