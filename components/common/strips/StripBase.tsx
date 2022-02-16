import cn from 'classnames';
import React from 'react'

export interface StripBaseProps {
    children?: React.ReactNode;
    align?: 'left' | 'right' | 'center';
    height?: string; // that ends in px or rem or some other unit
    backgroundColor?: string; // a hex or rgb (or other that is compatible with the color style property)
    className?: string;
    maxHeight?: string;
}

export const StripBase = ({ children, align = "center", height, maxHeight = "1000px", backgroundColor = '#a19393', className = '' }: StripBaseProps) => {
    return (
        <div
            style={{ minHeight: height, backgroundColor, maxHeight: maxHeight }}
            className={cn(
                'flex items-center w-full',
                {
                    ['justify-start']: align === 'left',
                    ['justify-end']: align === 'right',
                    ['justify-center']: align === 'center' || align === undefined,
                },
                className
            )}
        >
            {children}
        </div>
    );
};
