
import { StripBase, StripBaseProps } from './StripBase';

export interface ThinStripProps extends Omit<StripBaseProps, 'height'> {}

export const ThinStrip = ({ align, children, backgroundColor, className }: ThinStripProps) => {
    return (
        <StripBase align={align} height="40px" backgroundColor={backgroundColor} className={className}>
            {children}
        </StripBase>
    );
};
