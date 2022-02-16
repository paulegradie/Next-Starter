import classnames from 'classnames';
import { ZoomImage } from '../image/ZoomInImage';
import { Text } from '../text/Text';

import cls from './LandingSection.module.scss';

export interface LandingSectionProps {
    text: string;
    imgSrc: string;
    className?: string;
}

export const LandingSection = ({ text, imgSrc, className }: LandingSectionProps) => {
    return (
        <div className={cls.container}>
            <Text className={cls.text} align="center" variant="h1">
                {text}
            </Text>
            <ZoomImage alt="alt" imgSrc={imgSrc} className={classnames(cls.img, className || '')} />
        </div>
    );
};

export interface ComponentLandingSectionProps {
    text: string | React.ReactNode;
    children: React.ReactNode;
    pad?: boolean;
}

export const ComponentLandingSection = ({ text, pad = false, children }: ComponentLandingSectionProps) => {
    return (
        <div className={classnames({ [cls.container]: pad, [cls.paddlessContainer]: !pad })}>
            <Text className={cls.text} align="center" variant="h1">
                {text}
            </Text>
            {children}
        </div>
    );
};
