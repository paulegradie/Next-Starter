
import { StripBase } from './StripBase';

export interface MediumStripProps {
    children?: React.ReactNode;
    align?: 'left' | 'right' | 'center';
    className?: string;
    backgroundColor?: string;
    height?: string; // like '100px' or '100rem'
}

export const MediumStrip = ({ children, align, className, backgroundColor, height = '200px' }: MediumStripProps) => {
    return (
        <StripBase align={align} height={height} className={className} backgroundColor={backgroundColor}>
            {children}
        </StripBase>
    );
};
